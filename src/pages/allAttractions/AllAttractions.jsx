/* eslint-disable */
import React, { useState, useRef, useEffect } from 'react'
import styles from './allattractions.module.css'
import { useQuery } from '@tanstack/react-query'
import { getAttractionsPag, getAttractionsFilter, getAttractionsSort, getOneAttraction } from '../../api/attractions'
import { AllCard, Loader } from '../../components'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import useDebounce from './debounce'

export default function AllAttractions() {

    const [ searchItem, setSearchItem ] = useState('')

    const [ result, setResult ] = useState([])

    const debounceSearchItem = useDebounce(searchItem, 1000)

    const inputDebounce = (event) => {
        setSearchItem(event.target.value);
    };

    useEffect(() => {
        if (debounceSearchItem) {
            getOneAttraction(debounceSearchItem)
            .then(results => {
                setResult(results)
            })
        }
    }, [debounceSearchItem])

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

    const [search, setSearch] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()

    const page = searchParams.get('page') || 1
    const limit = searchParams.get('limit') || 4
    const filter = searchParams.get('filter') || 'def'
    const sortBy = searchParams.get('sortBy') || 'def'
    const order = searchParams.get('order') || 'def'

    const [selectFilter, setSelectFilter] = useState('all')

    const changePage = (p) => {
        if (sortBy == 'def' && order == 'def') {
            setSearchParams({ 'page': p, 'limit': limit, 'filter': selectFilter })
        } else {
            setSearchParams({ 'page': p, 'limit': limit, 'sortBy': sortBy, 'order': order })
        }
    }

    const inputSetSearch = (event) => {
        const searchInput = event.target.value
        setSearch(searchInput)
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
        enabled: selectFilter == 'all' && sortBy == 'def' && order == 'def'
    })

    const { data: filterData, isLoading: filterIsLoading } = useQuery({
        queryKey: ['cards', selectFilter, page, limit],
        queryFn: () => getAttractionsFilter(selectFilter, page, limit),
        staleTime: 5 * 60 * 1000,
        enabled: selectFilter != 'all' && sortBy == 'def'
    })

    const { data: sortData, isLoading: sortIsLoading } = useQuery({
        queryKey: ['cards', sortBy, order, page, limit],
        queryFn: () => getAttractionsSort(sortBy, order, page, limit),
        staleTime: 5 * 60 * 1000,
        enabled: !!checkbox && sortBy == 'rating' && order == 'desc' && filter == 'def'
    })

    const { data: searchData, isLoading: searchIsLoading } = useQuery({
        queryKey: ['cards', search],
        queryFn: () => getOneAttraction(search),
        staleTime: 5 * 60 * 1000,
        enabled: search.length > 0 && sortBy == 'def'
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

    console.log(searchData)

    if (pageIsLoading | filterIsLoading | sortIsLoading, searchIsLoading) return <Loader />

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
                                    <input type="text" id="input" className="input" placeholder="Search.."onChange={inputDebounce} value={search} />
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
