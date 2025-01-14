/* eslint-disable */
import React, {useState, useEffect } from 'react'
import styles from './allattractions.css'
import { useQuery } from '@tanstack/react-query'
import { getAttractionsPag } from '../../api/attractions'
import { AllCard, Loader } from '../../components'
import { useParams } from 'react-router-dom'

export default function AllAttractions() {

    const {page} = useParams()
    const {limit} = useParams()

    
    // const urlParams  = new URLSearchParams(window.location.search)

    // const baseLimit = urlParams.get('limit')
    // const basePage = urlParams.get('page')

    // const [ limit, setLimit ] = useState(baseLimit)
    // const [ page, setPage ] = useState(basePage)

    // const { data, isLoading } = useQuery({
    //     queryKey: ['cards'],
    //     queryFn: getAttractionsPag(page, limit)
    // })

    // if(isLoading) return <Loader />

  return (
    <div>
        <main className={styles.main}>
            <div className={styles.main__container} id="container">
                <div className={styles.header}>
                    <div className={styles.header__container}>
                        <div className={styles.header__elems}>
                            <div className={styles.header__title}>
                                <p>All Attractions</p>
                            </div>
                            <div className={styles.header__item}>
                                <a href="venice.html">Venice</a>
                            </div>
                            <div className={styles.header__item}>
                                <a href="warsaw.html">Warsaw</a>
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
                                    <label for="sort">Sort</label>
                                    <input type="radio" name="radio" id="sort" onclick="sortHeader()" />
                                    <label for="filter">Filter</label>
                                    <input type="radio" name="radio" id="filter" onclick="filterHeader()" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.main__cards}>
                    {/* {
                        data?.map(item => <AllCard item={item}/>)
                    } */}
                </div>
            </div>
        </main>
    </div>
  )
}
