import React from 'react'
import '../css/header.scss'
import { useNavigate, Link } from 'react-router-dom'

export default function Header({ city }) {

// const navigate = useNavigate()

// const newPath = (city) => {
//     navigate(`/home?city=${city}
// }

  return (
    <div>
        <header class="header">
            <div class="header__container">
                <div class="header__elems" id="elems">
                    <div class="header__item header__item-3">
                        <a href="http://localhost:3000/home?city=venice">Venice</a>
                    </div>
                    <div class="header__item header__item-4">
                        <a href="http://localhost:3000/home?city=warsaw">Warsaw</a>
                    </div>
                    <div class="header__item header__item-5">
                        <a>Attractions</a>
                    </div>
                    <div class="header__item header__allattr">
                        <a>All Attractions</a>
                    </div>
                    <div class="header__item header__cont">
                        <a>Reviews</a>
                    </div>
                    <div class="header__burgerbtn">
                        <img src="https://s.iimg.su/s/11/2i1tCX6V0atlpzxmoJE4STXIuSYfGd3QHoWXeeKy.png" alt="burger" />
                    </div>
                    <div class="header__burger">
                        <div class="header__burger-cont">
                            <div class="header__burger-elems">
                                <div class="header__burger-close">
                                    <img src="https://s.iimg.su/s/11/6l1YGOA4UTtqmY86cCFeqYMuJkFrUf7X4iM97rse.png" alt="close" />
                                </div>
                                <div class="header__burger-item header__burger-item3">
                                    <a>Venice</a>
                                </div>
                                <div class="header__burger-item header__burger-item4">
                                    <p>Warsaw</p>
                                </div>
                                <div class="header__burger-item" id="items">

                                </div>
                                <div class="header__burger-item header__burger-item6">
                                    <a>All Attractions</a>
                                </div>
                                <div class="header__burger-item header__burger-contact">
                                    <a>Reviews</a>
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
