/* eslint-disable */
import React, { useState } from 'react'
import styles from './reviews.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAllAttractions } from '../../api/attractions'

export default function Reviews() {

  const [ formData, setFormData] = useState({
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    comment: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }))
  } 

  const submitForm = (e) => {
    e.preventDefault()
    fetch('https://672c8d021600dda5a9f8e610.mockapi.io/reviews', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if(!response.ok) {
          throw new Error('Ошибка запроса')
      }
    })
    .then(response => {
      navigate('/all-attractions?page=1&limit=4')
    })
  }

  const { data } = useQuery({
    queryKey: ['cards', 'list'],
    queryFn: () => getAllAttractions(),
    staleTime: 5 * 60 * 1000
  })

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__elems}>
            <div className={styles.header__item}>
              <Link to="/home/venice"><a>Venice</a></Link>
            </div>
            <div className={styles.header__item}>
              <Link to="/home/warsaw"><a>Warsaw</a></Link>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.form}>
        <div className={styles.form__container}>
          <div className={styles.form__form}>
            <form method="post" id="form" onSubmit={submitForm}>
              <label htmlFor="title">Title of attraction: </label>
              <select name="title" id="" className={styles.form__select} value={formData.title} onChange={handleChange}>
                {
                  data?.map(item => <option key={item.id}>{item.title}</option>)
                }
              </select>
              <label htmlFor="firstname">Firstname: </label>
              <input type="text" name="firstname" id="firstname" required value={formData.firstname} onChange={handleChange} />
              <label htmlFor="Lastname">Lastname: </label>
              <input type="text" name="lastname" id="lastname" required value={formData.lastname} onChange={handleChange} />
              <label htmlFor="email">Mail: </label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
              <label htmlFor="comment">Comment: </label>
              <textarea name="comment" id="comment" required value={formData.comment} onChange={handleChange} />
              <input type="submit" value="Send.." id="submit"/>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}


// onChange={(e) => changeFilter(e.target.value)}