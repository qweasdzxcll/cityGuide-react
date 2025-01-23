/* eslint-disable */
import React, { useState } from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'


export default function Header({attr}) {

    const [ display, setDisplay ] = useState('none')

    const changeDisplay = (d) => {
        setDisplay(d)
    }

    const burgerStyle = {
        display: `${display}`,
        backgroundColor: 'rgba(128, 128, 128, 0.719)',
        borderRadius: '30px',
        color: 'white',
        fontFamily: 'Protest Strike',
        position: 'absolute',
        zIndex: 12388750,
        top: '30px',
        right: '150px'
    }

    return (
        <div>
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <div className={styles.header__elems} id="elems">
                        <div className={styles.header__item}>
                            <Link to="/home/venice"><a>Venice</a></Link>
                        </div>
                        <div className={styles.header__item}>
                            <Link to="/home/warsaw"><a>Warsaw</a></Link>
                        </div>
                        <div className={styles.header__item}>
                            <Link to={`/attractions/${attr}`}><a>Attractions</a></Link>
                        </div>
                        <div className={styles.header__item}>
                            <Link to='/all-attractions?page=1&limit=4&filter=all'><a>All Attractions</a></Link>
                        </div>
                        <div className={styles.header__item}>
                            <Link to="/reviews"><a>Reviews</a></Link>
                        </div>
                        <div className={styles.header__burgerbtn} onClick={() => changeDisplay('block')}>
                            <img src="/burger.png" alt="burger" />
                        </div>
                        <div className='header__burger' style={burgerStyle}>
                            <div className={styles.header__burgercont}>
                                <div className={styles.header__burgerelems}>
                                    <div className={styles.header__burgerclose} onClick={() => changeDisplay('none')}>
                                        <img src="/close.png" alt="close" />
                                    </div>
                                    <div className={styles.header__burgeritem}>
                                        <Link to="/home/venice"><a>Venice</a></Link>
                                    </div>
                                    <div className={styles.header__burgeritem}>
                                        <Link to="/home/warsaw"><a>Warsaw</a></Link>
                                    </div>
                                    <div className={styles.header__burgeritem}>
                                        <Link to={`/attractions/${attr}`}><a>Attractions</a></Link>
                                    </div>
                                    <div className={styles.header__burgeritem}>
                                        <Link to='/all-attractions?page=1&limit=4&filter=all'><a>All Attractions</a></Link>
                                    </div>
                                    <div className={styles.header__burgeritem}>
                                        <Link to="/reviews"><a>Reviews</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
