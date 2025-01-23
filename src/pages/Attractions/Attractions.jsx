import React from 'react'
import { Loader, Card } from '../../components'
import { useQuery } from '@tanstack/react-query'
import { getCityAttractions } from '../../api/attractions'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './attraction.module.css'
import cardStyles from '../../components/card/card.module.css'

export default function Attractions() {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const { city } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['cards', city],
    queryFn: () => getCityAttractions(city),
    staleTime: 10 * 60 * 1000
  })

  if (isLoading) return <Loader />

  return (
    <div>
      <header className="header">
        <div className={styles.header__container}>
          <div className={styles.header__elem}>
            <a onClick={() => goBack()}>Back</a>
          </div>
        </div>
      </header>
      <div className={cardStyles.main}>
        <div className={cardStyles.main__container}>
          {
            data?.map(card => <Card key={card.id} items={card} />)
          }
        </div>
      </div>
    </div>
  )
}
