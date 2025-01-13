import React from 'react'

export default function Card({ items }) {

    const text = items.text.split('.')[0]

    return (
        <div>
            <div className="main-2__card" id="">
                <div className="main-2__title">
                    <p>{items.title}</p>
                </div>
                <div className="main-2__rows">
                    <div className="main-2__row main-2__row1">
                        <div className="main-2__img main-2__img-gor">
                            <img src={items.img1} alt="img" />
                        </div>
                        <div className="main-2__img main-2__img-vert">
                            <img src={items.img2} alt="img" />
                        </div>
                    </div>
                    <div className="main-2__text">
                        <p>{text}</p>
                    </div>
                    <div className="main-2__row main-2__row2">
                        <div className="main-2__img main-2__img-vert">
                            <img src={items.img4} alt="img" />
                        </div>
                        <div className="main-2__img main-2__img-gor">
                            <img src={items.img3} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
