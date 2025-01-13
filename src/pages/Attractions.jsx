import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCityAttractions } from '../api/attractions'
import Card from '../components/Card'
import '../css/attraction.scss'

export default function Attractions() {

  const urlParams = new URLSearchParams(window.location.search)

  const urlCity = urlParams.get('city')

  const { data, isLoading, isError } = useQuery({
    queryKey: ['cards'],
    queryFn: getCityAttractions
  })

  if (isLoading) return <div className="loader" id="loader"><p></p></div>

  return (
    <div>
      <header class="headerr">
        <div class="headerr__container">
            <div class="headerr__elem">
                <a href="" id="back">Back</a>
            </div>
        </div>
      </header>
      <div className="main-2">
        <div className="main-2__container">
          {
            data?.map(card=> <Card  key={card.id} items={card} />)
          }
        </div>
      </div>
    </div>
  )
}
