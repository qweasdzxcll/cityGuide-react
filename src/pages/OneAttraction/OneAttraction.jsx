/* eslint-disable */
import React from 'react'
import styles from './oneAttraction.module.css'
import { useNavigate, useSearchParams, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getOneAttraction } from '../../api/attractions'
import { Loader } from '../../components'

export default function OneAttraction() {

    const navigate = useNavigate()
  
    const goBack = () => {
      navigate(-1)
    }

  const {id} = useParams()

  const { data, isLoading } = useQuery({
    queryFn: () => getOneAttraction(id),
    queryKey: ['cards', id],
    staleTime: 5 * 60 * 1000
  })

  if(isLoading) return <Loader />

  return (
    <div className={styles.main}>
        <div className={styles.main__container}>
            <div className={styles.main__elems}>
                <div className={styles.main__attrs}>
                    <a onClick={() => goBack()}>Back</a>
                </div>
                <div className={styles.main__title} id="title">
                    <h1></h1>
                </div>
            </div>
            <div className={styles.main__row}>
                <div className={styles.main__gor}>
                    <img src="" alt="" id="img1" />
                </div>
                <div className={styles.main__vert}>
                    <img src="" alt="" id="img2" />
                </div>
            </div>
            <div className={styles.main__row}>
                <div className={styles.main__gor}>
                    <img src="" alt="" id="img3" />
                </div>
                <div className={styles.main__vert}>
                    <img src="" alt="" id="img4" />
                </div>   
            </div>
            <div className={styles.main__text} id="text">
                <p></p>
            </div>
            <div className={styles.main__map} id="map">
              <iframe src={`${data.map}`} width="822" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className={styles.main__reviews}>
                <div className={styles.main__revcontainer} id="reviews">
                  
                </div>
            </div>
        </div>
    </div>
  )
}
