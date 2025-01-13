import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <div>
        <footer class={styles.footer}>
            <div class={styles.footer__container}>
                <div class={styles.footer__block}>
                    <div class={styles.footer__item}>
                        <a href="contacts.html">Оставить отзыв</a>
                    </div>
                    <div class={styles.footer__item}>
                        <a href="all_attr.html">Посмотреть все достопримечательности</a>
                    </div>
                </div>
                <div class={styles.footer__block}>
                    <div class={styles.footer__item}>
                        <p>E-mail: email@mail.ru</p>
                    </div>
                    <div class={styles.footer__item}>
                        <p>Telegram: @telegram</p>
                    </div>
                    <div class={styles.footer__item}>
                        <p>Facebook: @facebook</p>
                    </div>
                    <div class={styles.footer__item}>
                        <p>Instagram: @instagram</p>
                    </div>
                    <div class={styles.footer__item}>
                        <p>Twitter: @twitter</p>
                    </div>
                </div>
                <div class={styles.footer__block}>
                    <div class={styles.footer__item}>
                        <p>Политика конфиденциальности</p>
                    </div>
                    <div class={styles.footer__item}>
                        <p>FAQ</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
