import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './slider.module.scss'

export default function Slider() {
    const [position, setPosition] = useState(0)
    const [imageWidth, setImageWidth] = useState(null)

    const setValue = (i) => {
        dispatch(changePage(i))
    }

    const image = useRef()
    const line = useRef()

    useEffect(() => {
        const imageStyle = window.getComputedStyle(image.current)
        setImageWidth(parseInt(imageStyle.width))
    }, [])

    const Right = () => {
        setPosition(position + imageWidth)
        if (position >= imageWidth) {
            setPosition(0)
        }
    }

    const lineStyles = {
        transition: 'all 1.5s',
        width: '440vh',
        height: '100vh',
        display: 'flex',
        position: 'relative',
        textAlign: 'center',
        alignItems: 'center',
        right: `${position}px`
    }

    setTimeout(Right, 3000)

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.main__container}>
                    <div className={styles.main__line} ref={line} style={lineStyles}>
                        <div ref={image} className={styles.main__img}>
                            <img className={styles.main__w} src="./venice.jpg" alt='venice' loading="lazy" />
                            <div className={styles.main__title}>
                                <h1>Venice</h1>
                            </div>
                            <div className={styles.main__seemore}>
                                <Link to='/cityGuide-react/home/venice' title='Venice'><a>Узнать больше</a></Link>
                            </div>
                        </div>
                        <div className={styles.main__img}>
                            <img className={styles.main__w} src="./warsaw.jpg" alt='warsaw' loading="lazy" />
                            <div className={styles.main__title}>
                                <h1>Warsaw</h1>
                            </div>
                            <div className={styles.main__seemore}>
                                <Link to='/cityGuide-react/home/warsaw'><a>Узнать больше</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


