import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import '../css/home.css'

export default function Home() {
    const pageState = useSelector((state) => state)
    const styles = {
        backgroundImage: `url(${pageState.changePage.bg})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
    }
    
  return (
    <div style={styles}>
      <Header />
      <div className="mainnn__container">
            <div className="mainn__block">
                <div className="mainn__title">
                    <h1>{pageState.changePage.title}</h1>
                </div>
                <div className="mainn__text">
                    <p>{pageState.changePage.text}</p>
                </div>
                <div className="mainn__btn">
                    <a href="#info">See More</a>
                </div>
            </div>
            <div className="mainn__slider">
                <div className="mainn__line">
                    <div className="mainn__img">
                        <img src={pageState.changePage.images[0]} id="img"alt="" />
                    </div>
                    <div className="mainn__img">
                        <img src={pageState.changePage.images[1]} id="img" alt="" />
                    </div>
                    <div className="mainn__img">
                        <img src={pageState.changePage.images[2]} id="img" alt="" />
                    </div>
                    <div className="mainn__img">
                        <img src={pageState.changePage.images[3]} id="img" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <section class="info">
            <div class="info__container" id="info">
                <div class="info__row">
                    <div class="info__map">
                        <iframe
                        src={pageState.changePage.map}
                        width="500" height="500" style={{border:"0"}} allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="info__text">
                        <p>{pageState.changePage.info}</p>
                        <div class="info__btn">
                            <a href="attractions.html?city=Warsaw">Достопримечательности</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="footer">
            <div class="footer__container">
                <div class="footer__block">
                    <div class="footer__item">
                        <a href="contacts.html">Оставить отзыв</a>
                    </div>
                    <div class="footer__item">
                        <a href="all_attr.html">Посмотреть все достопримечательности</a>
                    </div>
                </div>
                <div class="footer__block">
                    <div class="footer__item">
                        <p>E-mail: email@mail.ru</p>
                    </div>
                    <div class="footer__item">
                        <p>Telegram: @telegram</p>        
                    </div>
                    <div class="footer__item">
                        <p>Facebook: @facebook</p>
                    </div>
                    <div class="footer__item">
                        <p>Instagram: @instagram</p>
                    </div>
                    <div class="footer__item">
                        <p>Twitter: @twitter</p>
                    </div>
                </div>
                <div class="footer__block">
                    <div class="footer__item">
                        <p>Политика конфиденциальности</p>
                    </div>
                    <div class="footer__item">
                        <p>FAQ</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
