import React, { useState, useRef, useEffect } from 'react'
import styles from './allattractions.module.css'
import { useQuery } from '@tanstack/react-query'
import { getAttractionsPag, getAttractionsFilter, getAttractionsSort, getOneAttraction, getAttractionSearch } from '../../api/attractions'
import { AllCard, Loader } from '../../components'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { debounce } from 'lodash'

export default function AllAttractions() {

    const [ inputValue, setInputValue ] = useState('')
    const [ result, setResult ] = useState('')

    const changeInput = (v) => {
        setInputValue(v)
    }

    const debouncedSave = debounce((value) => {
        setResult(value)
        value.length > 0 ? setSearchParams({'page': 1, 'limit': 4, 'filter': 'all', 'title': value}) : setSearchParams({'page': 1, 'limit': 4, 'filter': 'all'})
    }, 1000)

    useEffect(() => {
        debouncedSave(inputValue)
        return () => debouncedSave.cancel()
    }, [inputValue])

    const navigate = useNavigate()

    const [checkbox, setCheckBox] = useState(false)

    const changeCheckBox = (event) => {
        const isChecked = event.target.checked
        setCheckBox(isChecked)
        if (isChecked) {
            setSelectFilter('all')
            setSearchParams({ 'page': 1, 'limit': 4, 'sortBy': 'rating', 'order': 'desc' })
        } else {
            setSearchParams({ 'page': 1, 'limit': limit, 'filter': 'all' })
        }
    }

    const [rightData, setRightData] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    const page = searchParams.get('page') || 1
    const limit = searchParams.get('limit') || 4
    const filter = searchParams.get('filter') || 'def'
    const sortBy = searchParams.get('sortBy') || 'def'
    const order = searchParams.get('order') || 'def'
    const title = searchParams.get('title') || ''

    const [selectFilter, setSelectFilter] = useState('all')

    const changePage = (p) => {
        if (sortBy == 'def' && order == 'def' && title.length < 1) {
            setSearchParams({ 'page': p, 'limit': limit, 'filter': selectFilter })
        } else if (sortBy.length > 0 & order.length > 0 && title.length < 1) {
            setSearchParams({ 'page': p, 'limit': limit, 'sortBy': sortBy, 'order': order })
        } else if (title.length > 0) {
            setSearchParams({ 'page': p, 'limit': limit, 'filter': selectFilter, 'title': result })
        }
    }

    const changeFilter = (f) => {
        setCheckBox(false)
        setSelectFilter(f)
        setSearchParams({ 'page': 1, 'limit': limit, 'filter': f })
    }

    const { data: pageData, isLoading: pageIsLoading } = useQuery({
        queryKey: ['cards', page, limit],
        queryFn: () => getAttractionsPag(page, limit),
        staleTime: 5 * 60 * 1000,
        enabled: selectFilter == 'all' && sortBy == 'def' && order == 'def' && result.length <= 0
    })

    const { data: filterData, isLoading: filterIsLoading, isError: filterError } = useQuery({
        queryKey: ['cards', selectFilter, page, limit],
        queryFn: () => getAttractionsFilter(selectFilter, page, limit),
        staleTime: 5 * 60 * 1000,
        enabled: selectFilter != 'all' && sortBy == 'def' && result.length <= 0
    })

    const { data: sortData, isLoading: sortIsLoading, isError: sortError } = useQuery({
        queryKey: ['cards', sortBy, order, page, limit],
        queryFn: () => getAttractionsSort(sortBy, order, page, limit),
        staleTime: 5 * 60 * 1000,
        enabled: !!checkbox && sortBy == 'rating' && order == 'desc' && filter == 'def' && result.length <= 0
    })

    const { data: searchData, isLoading: searchIsLoading, isError: searchError } = useQuery({
        queryKey: ['cards', result, page, limit],
        queryFn: () => getAttractionSearch(result, page, limit),
        staleTime: 5 * 60 * 1000,
        enabled: result.length > 0 && sortBy == 'def'
    })

    useEffect(() => {
        if (Array.isArray(sortData) && sortData.length > 0) {
            setRightData(sortData)
        } else if (Array.isArray(filterData) && filterData.length > 0) {
            setRightData(filterData)
        } else if (Array.isArray(searchData) && searchData.length > 0) {
            setRightData(searchData)
        } else if (Array.isArray(pageData) && pageData.length > 0) {
            setRightData(pageData)
        }
        
    }, [sortData, filterData, searchData, pageData])

    if (pageIsLoading | filterIsLoading | sortIsLoading | searchIsLoading) return <Loader />

    return (
        <div>
            <main className={styles.main}>
                <div className={styles.main__container}>
                    <div className={styles.header}>
                        <div className={styles.header__container}>
                            <div className={styles.header__elems}>
                                <div className={styles.header__title}>
                                    <p>All Attractions</p>
                                </div>
                                <div className={styles.header__item}>
                                    <Link to="/home/venice"><a>Venice</a></Link>
                                </div>
                                <div className={styles.header__item}>
                                    <Link to="/home/warsaw"><a>Warsaw</a></Link>
                                </div>
                                <div className={styles.header__search}>
                                    <input type="text" id="input" className="input" placeholder="Search.."onChange={(e) => changeInput(e.target.value)} value={inputValue} />
                                </div>
                                <div className={styles.header__filters}>
                                    <div className={styles.header__row} id="header">
                                    </div>
                                    <div className={styles.header__row}>
                                        <label htmlFor="sort">Filter</label>
                                        <select name="" id="" value={selectFilter} onChange={(e) => changeFilter(e.target.value)}>
                                            <option value={'all'}>all</option>
                                            <option value={'cultural'}>cultural</option>
                                            <option value={'historical'}>historical</option>
                                            <option value={'natural'}>natural</option>
                                        </select>
                                        <label htmlFor="sort">Rating</label>
                                        <input type="checkbox" name="radio" id="sort" checked={checkbox} onChange={changeCheckBox}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main__cards}>
                        {rightData &&
                            rightData?.map(item => <AllCard item={item} key={item.id} />)
                        }
                    </div>
                    <div className={styles.main__pagination}>
                        <div className={styles.main__pagination__pagnum}>
                            <p onClick={() => changePage(1)}>1</p>
                        </div>
                        <div className={styles.main__pagination__pagnum}>
                            <p onClick={() => changePage(2)}>2</p>
                        </div>
                        <div className={styles.main__pagination__pagnum}>
                            <p onClick={() => changePage(3)}>3</p>
                        </div>
                        <div className={styles.main__pagination__pagnum}>
                            <p onClick={() => changePage(4)}>4</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
