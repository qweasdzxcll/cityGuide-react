import React, { useState, useRef, useEffect } from 'react'
// import Venice from '../images/body-water-buildings.jpg'
// import Warsaw from '../images/background.jpg'
import { Link } from 'react-router-dom'
import '../css/slider.css'
import { useDispatch } from 'react-redux'
import { changePage } from '../redux/actions/page'

export default function Slider() {
    const [position, setPosition] = useState(0)
    const [imageWidth, setImageWidth] = useState(null)

    const warsawData = {
        title: 'Warsaw',
        bg: '/warsawBg.jpg',
        text: 'Варшава - столица Польши и крупнейший город страны с непростой историей и судьбой. Интересное сочетание старины и традиций, современного ритма жизни и энергии большого мегаполиса.',
        images: ['/warsaw1.jpg', '/warsaw2.jpg', '/warsaw3.jpg', 'warsaw4.jpg'],
        info: 'Варшава расположена в центральной части Польши. С 16 века, когда город был выбран в качестве столицы польского государства, он был разрушен несколько раз из за войн.Исторические здания здесь гармонично сочетаются с современной архитектурой, а над черепичными крышами восстановленного Старого города возвышаются небоскрёбы. Висла делит столицу Польши на две части.Правый берег Варшавы был заселён раньше, примерно в 9 - 10 веке, тогда как современный исторический центр расположен на левом.Архитектура Варшавы — это сочетание разных исторических эпох и стилей, которые отражают богатую историю Польши и её столицы. Площадь города - 517 км2. Население - 1.8 млн человек. Язык - польский.',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.98226867567!2d20.89661629285581!3d52.23288709833719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2z0JLQsNGA0YjQsNCy0LAsINCf0L7Qu9GM0YjQsA!5e0!3m2!1sru!2sru!4v1728991842786!5m2!1sru!2sru"
    }

    const veniceData = {
        title: "Venice",
        bg: '/veniceBg.jpg',
        text: 'Венеция - один из самых известных городов Италии и центр одноименной области Венето, расположенной в северо-восточной части страны на берегу Адриатического моря.',
        images: ['/venice1.jpg', '/venice2.jpg', '/venice3.jpg', 'venice4.jpg'],
        info: 'Венеция - потрясающий и сказочный город, исторический центр которого построен на 118 островах Венецианской лагуны. Венеция - город уникальных туристических аттракционов и мест, особой атмосферы и истории. Она входит в список объектов Всемирного наследия ЮНЕСКО, являясь одним из самых уникальных и романтичных мест планеты. Здесь можно совершить прогулку на традиционных лодках-гондолах. Венеция расположена в акватории Адриатического моря. Исторический центр расположен на множестве островов, разделённых каналами и соединённых мостами. Основным средством передвижения являются лодки, по каналам до сих пор плавают традиционные гондолы, а на улицах совсем нет автомобилей Площадь города - 414.6 квадратных километров. Население - 264.6 тысяч человек. Язык - итальянский.',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358561.4527157943!2d12.05769077478678!3d45.40406915890335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2z0JLQtdC90LXRhtC40Y8sINCY0YLQsNC70LjRjw!5e0!3m2!1sru!2sru!4v1729369820675!5m2!1sru!2sru"
    }

    const dispatch = useDispatch()

    const setValue = (i) => {
        dispatch(changePage(i))
    }

    const image = useRef()
    const line = useRef(null)

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

    const styles = {
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
            <div className="main">
                <div className="main__container">
                    <div className="main__line" ref={line} style={styles}>
                        <div ref={image} className="main__img">
                            <img className="main__w" src="/venice.jpg" />
                            <div className="main__title main__title-venezia">
                                <h1>Venice</h1>
                            </div>
                            <div className="main__seemore main__seemore-venezia" onClick={() => setValue(veniceData)}>
                                <Link to='/home' title='Venice'><a>Узнать больше</a></Link>
                            </div>
                        </div>
                        <div className="main__img">
                            <img className="main__w" src="/warsaw.jpg" />
                            <div className="main__title main__title-warsaw">
                                <h1>Warsaw</h1>
                            </div>
                            <div className="main__seemore main__seemore-warsaw" onClick={() => setValue(warsawData)}>
                                <Link to='/home'><a>Узнать больше</a></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        {/* <div class="btns">
            <div class="btns__btn btns__btn-prev" onClick={() => Left()}>
                <img src={l} alt="arrow" />
            </div>
            <div class="btns__btn btns__btn-next" onClick={() => Right()}>
                <img src={r} alt="arrow" />
            </div>
        </div> */}
    </div >
  )
}
