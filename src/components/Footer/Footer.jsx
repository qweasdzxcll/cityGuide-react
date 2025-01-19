import React from 'react'
import styles from './footer.module.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__block}>
                    <div className={styles.footer__item}>
                        <Link to='/reviews'><a>Оставить отзыв</a></Link>
                    </div>
                    <div className={styles.footer__item}>
                        <Link to='/all-attractions?page=1&limit=4'><a>Посмотреть все достопримечательности</a></Link>
                    </div>
                </div>
                <div className={styles.footer__block}>
                    <div className={styles.footer__item}>
                        <p>E-mail: email@mail.ru</p>
                    </div>
                    <div className={styles.footer__item}>
                        <p>Telegram: @telegram</p>
                    </div>
                    <div className={styles.footer__item}>
                        <p>Facebook: @facebook</p>
                    </div>
                    <div className={styles.footer__item}>
                        <p>Instagram: @instagram</p>
                    </div>
                    <div className={styles.footer__item}>
                        <p>Twitter: @twitter</p>
                    </div>
                </div>
                <div className={styles.footer__block}>
                    <div className={styles.footer__item}>
                        <p>Политика конфиденциальности</p>
                    </div>
                    <div className={styles.footer__item}>
                        <p>FAQ</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
