import styles from './Index.module.scss'
import Link from 'next/link'
import React from 'react'
import Testimonials from '@components/testimonials/Testimonials'
import CallUsNow from '@components/call-us-now/CallUsNow'
import ContactInfo from '@components/contact-info/ContactInfo'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title='Home'
        description='Metropolitan CCTV, give us a call now for a quote'
      />
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
      <CallUsNow />
      <div className={styles.blob}>
        <p>With the continuing rise in crime in the UK taking steps to safeguard yourself and your property is fast becoming not just a luxury but a necessity. We have offices in South Yorkshire covering Central UK and West London covering London, Central London & outlying areas.</p>
        <p>A bespoke CCTV or Alarm System from Metropolitan CCTV will not only help deter thieves from stealing your property but also provide a wide overview and safer environment for pets and children around the home.</p>
        <p>Metropolitan CCTV have a vast knowledge of the Security Industry. We offer a wide range of bespoke insurance approved Security Solutions such as Intruder Alarms, Safes, Gun Cabinets, Vehicle CCTV, Dash Cameras, Action Cameras, Crèche & Granny Cams, Covert  CCTV, and a fully qualified Locksmith Service.</p>
        <p>Metropolitan CCTV are specialists in Remote Access, Remote Gates, Electric Gates, Access Control, and WiFi Access Control.</p>
        <p>Our fully qualified Locksmiths are able to under take any work including; Lock Repairs, Lock Replacements, additional Security Locks, Lock Upgrades, Window Locks and Garage Door Locks. We also supply and install Anti Pick Locks, Anti Snap Locks, Anti  Bump Locks, Anti Drill Locks and Insurance Approved Locks. Our Locksmiths are able to gain entry to your property if you are locked out using Lock Picking / Lock Slipping and non destructive Lock Opening methods.</p>
        <p>We are CCTV Specialists and only provide the very best systems to our customers. Be aware of companies that offer an inferior product and claim to be “Professional Installers“</p>
        <p>Metropolitan CCTV build all Surveillance & Alarm Systems to suit your bespoke requirements. However, all CCTV Systems we install are capable of the following as standard;</p>
        <p>24hr recording in full High Definition 1080p on all channels (cameras) including night vision.</p>
        <p>Remote viewing from anywhere in the world via your smartphone or tablet.</p>
        <p>Tamper Alarm, Talk Back, Audio Record and a three year guarantee.</p>
        <p>Do not be fooled by Installers who offer a similar service with a much inferior product. We do not have a budget range as it is counter productive to spend time and money on a CCTV System that is not fit for purpose. However, we do offer a professional  Security System at a price that will not break the bank. We have a wide range of Cameras and DVRs / NVR’s to choose from.</p>
        <p>One of our experienced Security Advisors will be able to assist you in the selection of your bespoke Security System, we will always offer honest, impartial advice and assist you to choose the system that best suits your needs and budget..</p>
        <p>If you wish to go one step further, we offer an advanced range of Cameras and Software for Automatic Number Plate Recognition and Face Recognition, Internet Protocol Cameras, Pan, Tilt and Zoom Cameras, Covert Cameras and Audio.</p>
        <p>Peace of mind is not as expensive as you think.</p>
        <p>Contact for a free no obligation...</p>
        <p>London - 0203 743 8911 | South Yorkshire - 0114 294 5565 | info@metropolitancctv.co.uk</p>
      </div>
      <Testimonials />
      <ContactInfo />
    </>
  )
}
