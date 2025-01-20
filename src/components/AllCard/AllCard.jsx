/* eslint-disable */
import React from 'react'
import styles from './AllCard.module.css'
import { Link } from 'react-router-dom'

export default function AllCard({item}) {
  return (
    <Link to={`/one-attraction/${item.title}`}><div className={styles.main__card}>
        <div className={styles.main__subtitle}>
            <p>{item.title}</p>
        </div>
        <div className={styles.main__img}>
            <img src={item.img3} alt="" />
        </div>
    </div></Link>
  )
}