import React from 'react'
import '../css/header.css'

export default function Header() {
  return (
    <div>
        <header class="header">
            <div class="header__container">
                <div class="header__elems" id="elems">
                    <div class="header__item header__item-3">
                        <a href="venice.html">Venice</a>
                    </div>
                    <div class="header__item header__item-4">
                        <p>Warsaw</p>
                    </div>
                    <div class="header__item header__item-5">
                        <p>Venice Attractions</p>
                    </div>
                    <div class="header__item header__item-6">
                        <p>Warsaw Attractions</p>
                    </div>
                    <div class="header__item header__allattr">
                        <a href="all_attr.html?page=1&limit=4">All Attractions</a>
                    </div>
                    <div class="header__item header__cont">
                        <a href="contacts.html">Reviews</a>
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
                                    <a href="venice.html">Venice</a>
                                </div>
                                <div class="header__burger-item header__burger-item4">
                                    <p>Warsaw</p>
                                </div>
                                <div class="header__burger-item" id="items">

                                </div>
                                <div class="header__burger-item header__burger-item6">
                                    <a href="all_attr.html?page=1&limit=4">All Attractions</a>
                                </div>
                                <div class="header__burger-item header__burger-contact">
                                    <a href="contacts.html">Reviews</a>
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
