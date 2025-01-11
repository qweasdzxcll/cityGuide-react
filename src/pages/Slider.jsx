import React, { useState, useRef, useEffect } from 'react'
import Venice from '../images/body-water-buildings.jpg'
import Warsaw from '../images/background.jpg'
import '../css/slider.css'

export default function Slider() {
    const [ position, setPosition ] = useState(0)
    const [ imageWidth, setImageWidth ] = useState(null)

    const image = useRef()
    const line = useRef(null)

    useEffect(() => {
        const imageStyle = window.getComputedStyle(image.current)
        setImageWidth(parseInt(imageStyle.width))
        console.log(image.current.style.left)
    }, [])
    
    const Right = () => {
        setPosition(position + imageWidth)
        if (position >= imageWidth) {
            setPosition(0)
        }
        line.current.style.right=`${position}px`
        console.log(position)
    }

    // const Left = () => {
    //     setPosition(position - imageWidth)
    //     if (position <= imageWidth) {
    //         setPosition(0)
    //     }
    //     line.current.style.left=`${position}px`
    //     console.log(line.current.style.left)
    // }

    setTimeout(Right, 3000)

  return (
    <div>
        <div class="main">
            <div class="main__container">
                <div class="main__line" ref={line}>
                    <div ref={image} class="main__img main__img-2">
                        <img class="main__w" src={Venice} />
                        <div class="main__title main__title-venezia">
                            <h1>Venice</h1>
                        </div>
                        <div class="main__seemore main__seemore-venezia">
                            <a href="venice.html">Узнать больше</a>
                        </div>
                    </div>
                    <div class="main__img main__img-2">
                        <img class="main__w" src={Warsaw} />
                        <div class="main__title main__title-warsaw">
                            <h1>Warsaw</h1>
                        </div>
                        <div class="main__seemore main__seemore-warsaw">
                            <a href="warsaw.html">Узнать больше</a>
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
    </div>
  )
}
