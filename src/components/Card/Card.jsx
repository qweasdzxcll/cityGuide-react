/* eslint-disable */
import React from 'react'
import styles from './card.module.css'


export default function Card({ items }) {

    const text = items.text.split('.')[0]

    return (
        <div className={styles.main__card}>
            <div className={styles.main__title}>
                <p>{items.title}</p>
            </div>
            <div className={styles.main__rows}>
                <div className={styles.main__row}>
                    <div className={`${styles.main__img} ${styles.main__gor}`}>
                        <img src={items.img1} alt="img" />
                    </div>
                    <div className={`${styles.main__img} ${styles.main__vert}`}>
                        <img src={items.img2} alt="img" />
                    </div>
                </div>
                <div className={styles.main__text}>
                    <p>{text}</p>
                </div>
                <div className={styles.main__row}>
                    <div className={`${styles.main__img} ${styles.main__vert}`}>
                        <img src={items.img4} alt="img" />
                    </div>
                    <div className={`${styles.main__img} ${styles.main__gor}`}>
                        <img src={items.img3} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

