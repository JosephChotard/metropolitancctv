import styles from './Index.module.scss'
import Link from 'next/link'
import React from 'react'
import Testimonials from '@components/testimonials/Testimonials'

export default function Home() {
  return (
    <>
      <div className={styles.greydiv}></div>
      <div className={styles.pages}>
        <Link href='/cctv'>
          <a className={styles.card}>
            <h2>CCTV</h2>
            <img src="/home/cctv.jpg" alt="Round CCTV camera"/>
          </a>
        </Link>
        <Link href='/services'>
          <a className={styles.card}>
            <h2>Other Services</h2>
            <img src="/home/surveillance.jpg" alt="Surveillance system"/>
          </a>
        </Link>
        <Link href='/intruder-alarms'>
          <a className={styles.card}>
            <h2>Intruder Alarms</h2>
            <img src="/home/intruder.jpg" alt="Intruder with crowbar"/>
          </a>
        </Link>
      </div>
      <Testimonials />

    </>
  )
}
