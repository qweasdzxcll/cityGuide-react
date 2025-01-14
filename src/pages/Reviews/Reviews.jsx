/* eslint-disable */
import React from 'react'
import styles from './reviews.module.css'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getAllAttractions } from '../../api/attractions'

export default function Reviews() {

  const { data } = useQuery({
    queryKey: ['cards', 'list'],
    queryFn: () => getAllAttractions(),
    staleTime: 5*60*1000
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
            <form method="post" id="form" />
            <label for="title">Title of attraction: </label>
            <select name="" id="" className={styles.form__select}>
              {
                data?.map(item => <option value="">{item.title}</option>)
              }
            </select>
            <label for="firstname">Firstname: </label>
            <input type="text" name="firstname" id="firstname" required />
            <label for="Lastname">Lastname: </label>
            <input type="text" name="lastname" id="lastname" required />
            <label for="email">Mail: </label>
            <input type="email" name="email" id="email" />
            <label for="comment">Comment: </label>
            <textarea name="comment" id="comment" required />
            <input type="submit" value="Send.." id="submit"/>
          </div>
        </div>
      </main>
    </div>
  )
}
