/* eslint-disable */
import React, { useState, useRef } from 'react'
import styles from './allattractions.module.css'
import { useQuery } from '@tanstack/react-query'
import { getAttractionsPag, getAttractionsFilter, getAttractionsSort } from '../../api/attractions'
import { AllCard, Loader } from '../../components'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'

export default function AllAttractions() {

    const [checkbox, setCheckBox] = useState(false)

    const checkboxRef = useRef()

    const changeCheckBox = () => {
        setCheckBox(checkboxRef.current.checked)
    }

    let rightData

    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams()

    const page = searchParams.get('page') || 1
    const limit = searchParams.get('limit') || 4
    const filter = searchParams.get('filter')

    const changeFilter = (f) => {
        const urlParams = new URLSearchParams()
        urlParams.set('filter', f)
        setSearchParams(urlParams)
        navigate(`?filter=${f}`)
    }

    const changePage = (p) => {
        const urlParams = new URLSearchParams()
        urlParams.set('page', p)
        setSearchParams(urlParams)
        navigate(`?page=${p}&limit=${limit}`)
    }

    const { data: pageData, isLoading: pageIsLoading } = useQuery({
        queryKey: ['cards', page, limit],
        queryFn: () => getAttractionsPag(page, limit),
        staleTime: 5 * 60 * 1000,
        enabled: !!page && !!limit
    })

    const { data: filterData, isLoading: filterIsLoading } = useQuery({
        queryKey: ['cards', filter],
        queryFn: () => getAttractionsFilter(filter),
        staleTime: 5 * 60 * 1000,
        enabled: !!filter
    })

    const { data: sortData, isLoading: sortIsLoading } = useQuery({
        queryKey: ['cards', 'sort'],
        queryFn: () => getAttractionsSort(),
        staleTime: 5 * 60 * 1000,
        enabled: !!checkbox
    })

    console.log(checkbox)

    navigate(checkbox === true ? '?sortBy=rating&order=desc' : '?page=1&limit=4')

    if (pageData) {
        rightData = pageData
    } else if (filterData) {
        rightData = filterData
    } else rightData = []


    if (pageIsLoading | filterIsLoading | sortIsLoading) return <Loader />

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
                                    <input type="text" id="input" className="input" placeholder="Search.." />
                                </div>
                                <div className={styles.header__filters}>
                                    <div className={styles.header__row} id="header">
                                    </div>
                                    <div className={styles.header__row}>
                                        <label for="All">All</label>
                                        <input type="radio" id="All" className="radio" name="radio" onClick={() => changePage(1)} />
                                        <label for="sort">Filter</label>
                                        <select name="" id="" onChange={(e) => changeFilter(e.target.value)}>
                                            <option>cultural</option>
                                            <option>historical</option>
                                            <option>natural</option>
                                        </select>
                                        <label for="sort">Rating</label>
                                        <input type="checkbox" name="radio" id="sort" ref={checkboxRef} onClick={() => changeCheckBox()} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main__cards}>
                        {
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
