import React from 'react'
import styles from './oneAttraction.module.scss'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getOneAttraction } from '../../api/attractions'
import { getReviews } from '../../api/reviews'
import { Loader, Reviews } from '../../components'

export default function OneAttraction() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const { title } = useParams()

    const { data: dataOne, isLoading: isLoadingOne } = useQuery({
        queryFn: () => getOneAttraction(title),
        queryKey: ['cards', title],
        staleTime: 5 * 60 * 1000
    })

    const { data: dataReviews, isLoading: isLoadingReviews, isError: isErrorReview } = useQuery({
        queryFn: () => getReviews(title),
        queryKey: ['reviews', title],
        staleTime: 1 * 60 * 1000
    })

    if (isLoadingOne | isLoadingReviews) return <Loader />

    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <div className={styles.main__elems}>
                    <div className={styles.main__attrs}>
                        <a onClick={() => goBack()}><img src='/cityGuide-react/Prev page.png' /></a>
                    </div>
                    <div className={styles.main__title} id="title">
                        <p>{dataOne[0].title}</p>
                    </div>
                </div>
                <div className={styles.main__row}>
                    <div className={styles.main__gor}>
                        <img src={dataOne[0].img3} alt="" id="img1" />
                    </div>
                    <div className={styles.main__vert}>
                        <img src={dataOne[0].img1} alt="" id="img2" />
                    </div>
                </div>
                <div className={styles.main__row}>
                    <div className={styles.main__gor}>
                        <img src={dataOne[0].img4} alt="" id="img3" />
                    </div>
                    <div className={styles.main__vert}>
                        <img src={dataOne[0].img2} alt="" id="img4" />
                    </div>
                </div>
                <div className={styles.main__text} id="text">
                    <p>{dataOne[0].text}</p>
                </div>
                <div className={styles.main__map} id="map">
                    <iframe src={dataOne[0].map} width="822" height="500" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={styles.main__reviews}>
                    <p className={styles.main__revtitle}>Отзывы</p>
                    <hr />
                    {
                        dataReviews?.map(item => <Reviews item={item} key={item.id} />)
                    }
                    <div className={styles.main__revtitle}>
                        <Link to="/reviews"><a>Оставить отзыв</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
