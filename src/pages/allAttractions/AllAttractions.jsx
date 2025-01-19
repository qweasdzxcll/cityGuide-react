/* eslint-disable */
import React, {useState, useEffect } from 'react'
import styles from './allattractions.module.css'
import { useQuery } from '@tanstack/react-query'
import { getAttractionsPag, getAttractionsFilter } from '../../api/attractions'
import { AllCard, Loader } from '../../components'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'

export default function AllAttractions() {

    let rightData

    const navigate = useNavigate()

    const [ searchParams, setSearchParams ] = useSearchParams()

    const page = searchParams.get('page')
    const limit = searchParams.get('limit')
    const filter = searchParams.get('filter')

    const changeFilter = (f) => {
        searchParams.set('filter', f)
        setSearchParams(searchParams)
        navigate(`?${searchParams}`)
    }

    const changePage = (p) => {
        searchParams.set('page', p)
        setSearchParams(searchParams)
        navigate(`?${searchParams}`)
    }

    const { data: pageData, isLoading: pageIsLoading } = useQuery({
        queryKey: ['cards', page, limit],
        queryFn: () => getAttractionsPag(page, limit),
        staleTime: 5 * 60 * 1000
    })

    const { data: filterData, isLoading: filterIsLoading } = useQuery({
        queryKey: ['cards', filter],
        queryFn: () => getAttractionsFilter(filter),
        staleTime: 5 * 60 * 1000
    })

    console.log(filterData)

    if (pageData) {
        rightData = pageData
    } else if (filterData) {
        rightData = filterData
    } else rightData = []

    console.log(rightData)


    if(pageIsLoading | filterIsLoading) return <Loader />

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
                                    <input type="radio" id="All" className="radio" name="radio" onclick="reload()" />
                                    <label for="sort">Filter</label>
                                    <select name="" id="" onChange={(e) => changeFilter(e.target.value)}>
                                        <option>cultural</option>
                                        <option>historical</option>
                                        <option>natural</option>
                                    </select>
                                    <label for="sort">Rating</label>
                                    <input type="radio" name="radio" id="sort" onclick="filterHeader()" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.main__cards}>
                    {
                        rightData?.map(item => <AllCard item={item} key={item.id}/>)
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
