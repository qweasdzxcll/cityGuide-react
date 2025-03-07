/* eslint-disable */
import React, { useState, useRef } from 'react'
import styles from './card.module.scss'


export default function Card({ items }) {

    const [ gallery, setGallery ] = useState([])
    const [ count, setCount ] = useState(0)
    const [ display, setDisplay ] = useState('none')

    const modal = useRef()

    const nextImg = () => {
        if (count < 3) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }

    const prevImg = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(3)
        }
    }

    const changeGallery = (g, d) => {
        setGallery(g)
        setDisplay(d)
    }

    const text = items.text.split('.')[0]

    const modalStyle = {
        display: `${display}`
    }

    return (
        <>
            <div className={styles.main__card} onClick={() => changeGallery([items.img1, items.img2, items.img3, items.img4], 'block')}>
                <div className={styles.main__title}>
                    <p>{items.title}</p>
                </div>
                <div className={styles.main__rows}>
                    <div className={styles.main__row}>
                        <div className={`${styles.main__img} ${styles.main__gor}`}>
                            <img src={items.img3} alt="img" />
                        </div>
                        <div className={`${styles.main__img} ${styles.main__vert}`}>
                            <img src={items.img1} alt="img" />
                        </div>
                    </div>
                    <div className={styles.main__text}>
                        <p>{text}</p>
                    </div>
                    <div className={styles.main__row}>
                        <div className={`${styles.main__img} ${styles.main__vert}`}>
                            <img src={items.img2} alt="img" />
                        </div>
                        <div className={`${styles.main__img} ${styles.main__gor}`}>
                            <img src={items.img4} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery" ref={modal} style={modalStyle}>
                <div className={styles.gallery__container}>
                    <div className={styles.gallery__back} onClick={() => changeGallery([], 'none')}>
                        <img src="/cityGuide-react/close.png" alt="werty" />
                    </div>
                    <div className={styles.gallery__row}>
                        <div className={styles.gallery__left}>
                            <img src="/cityGuide-react/Prevpage.png" alt="back" onClick={() => prevImg()} />
                        </div>
                        <div className={styles.gallery__img}>
                            <img src={gallery[count]} alt="img" />
                        </div>
                        <div className={styles.gallery__right} onClick={() => nextImg()}>
                            <img src="/cityGuide-react/Nextpage.png" alt="next" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

