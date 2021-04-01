import React from 'react'
import styles from './CallUsNow.module.scss'

export default function CallUsNow() {
  const [clicked, setClicked] = React.useState(false)

  return (
    <div className={styles.bar}>
      {clicked ? (
        <>
          <div className={styles.call}>
            <h3>London</h3>
            <a className="button" href="tel:0203 743 8911">0203 743 8911</a>
          </div>
          <div className={styles.call}>
            <h3>South Yorkshire</h3>
            <a className="button" href="tel:0114 294 5565">0114 294 5565</a>
          </div>
        </>
      ) : (
        <button className={`button ${styles.callUsNow}`} onClick={() => setClicked(true)}>Call us Now!</button>
      )
      }   
    </div>
  )
}