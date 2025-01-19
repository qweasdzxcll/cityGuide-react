/* eslint-disable */
import React from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'


export default function Header({attr}) {

    // const navigate = useNavigate()

    // const newPath = (city) => {
    //     navigate(`/home?city=${city}
    // }

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
                            <Link to='/all-attractions?page=1&limit=4'><a>All Attractions</a></Link>
                        </div>
                        <div className={styles.header__item}>
                            <Link to="/reviews"><a>Reviews</a></Link>
                        </div>
                        <div className={styles.header__burgerbtn}>
                            <img src="https://s.iimg.su/s/11/2i1tCX6V0atlpzxmoJE4STXIuSYfGd3QHoWXeeKy.png" alt="burger" />
                        </div>
                        {/* <div className={styles.header__burger}>
                            <div className={styles.header__burger-cont}>
                                <div className={styles.header__burger-elems}>
                                    <div className={styles.header__burger-close}>
                                        <img src="https://s.iimg.su/s/11/6l1YGOA4UTtqmY86cCFeqYMuJkFrUf7X4iM97rse.png" alt="close" />
                                    </div>
                                    <div className={styles.header__burger-item}>
                                        <a>Venice</a>
                                    </div>
                                    <div className={styles.header__burger-item}>
                                        <p>Warsaw</p>
                                    </div>
                                    <div className={styles.header__burger-item}>
                                        <a>All Attractions</a>
                                    </div>
                                    <div className={styles.header__burger-item}>
                                        <a>Reviews</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </header>
        </div>
    )
}
