import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCityAttractions } from '../../api/attractions'
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import styles from './attraction.module.scss'

export default function Attractions() {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const { city } = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['cards', city],
    queryFn: getCityAttractions(city ?? 'warsaw')
  })

  if (isLoading) return

  return (
    <div>
      <header class="header">
        <div class="header__container">
          <div class="header__elem">
            <a onClick={() => goBack()}>Back</a>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="main__container">
          {
            data?.map(card => <Card key={card.id} items={card} />)
          }
        </div>
      </div>
    </div>
  )
}
