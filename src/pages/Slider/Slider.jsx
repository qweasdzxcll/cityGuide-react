import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './slider.module.css'
import { useDispatch } from 'react-redux'
import { changePage } from '../../redux/actions/page'
import venice from '../../../build/venice.jpg'

export default function Slider() {
    const [position, setPosition] = useState(0)
    const [imageWidth, setImageWidth] = useState(null)

    const dispatch = useDispatch()

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
                            <img className={styles.main__w} src={venice} />
                            <div className={styles.main__title}>
                                <h1>Venice</h1>
                            </div>
                            <div className={styles.main__seemore}>
                                <Link to='/home/venice' title='Venice'><a>Узнать больше</a></Link>
                            </div>
                        </div>
                        <div className={styles.main__img}>
                            <img className={styles.main__w} src="/warsaw.jpg" />
                            <div className={styles.main__title}>
                                <h1>Warsaw</h1>
                            </div>
                            <div className={styles.main__seemore}>
                                <Link to='/home/warsaw'><a>Узнать больше</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


