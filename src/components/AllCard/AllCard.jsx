/* eslint-disable */
import React from 'react'
import styles from './AllCard.css'

export default function AllCard({item}) {
  return (
    <div class={styles.main__card}>
        <div class={styles.main__subtitle}>
            <p>{item.title}</p>
        </div>
        <div class={styles.main__img}>
            <img src={item.img3} alt="" />
        </div>
    </div>
  )
}
