import React from 'react'
import styles from './loader.module.css'

export default function Loader() {
  return (
    <div>
      <div className={styles.loader} id="loader"><p></p></div>
    </div>
  )
}
