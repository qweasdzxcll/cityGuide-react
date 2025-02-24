/* eslint-disable */
import React from 'react'
import styles from './reviews.module.scss'

export default function Reviews({item}) {
  return (
    <div className={styles.reviews__revcontainer}>
        <div className={styles.reviews__review}>
            <div className={styles.reviews__rtitle}>
                <h2>{item.firstname + ' ' + item.lastname}</h2>
            </div>
            <div className={styles.reviews__comment}>
                <p>{item.comment}</p>
            </div>
        </div>
    </div>
  )
}
