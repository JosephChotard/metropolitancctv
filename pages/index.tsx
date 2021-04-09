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
        <p>With the continuing rise in crime in the UK taking steps to safeguard yourself and your property is fast becoming not just a luxury but a necessity. Metropolitan security Solutions have offices in South Yorkshire covering Central UK and West London covering London, Central London &amp; outlying areas.</p>

        <p>We can provide a solution for every aspect of security in any environment or application. Our business is your complete peace of mind, we provide bespoke security solutions designed specifically for your individual requirements.</p>

        <p>Metropolitan Security Solutions &amp; Metropolitan CCTV have a vast knowledge of the Security Industry. We offer a wide range of bespoke insurance approved Security Solutions such as CCTV Intruder Alarms, Safes, Gun Cabinets, Vehicle CCTV, Dash Cameras, Action Cameras, Cr&egrave;che &amp; Granny Cams, Covert CCTV, Dog Handling service, Security / Protection Dogs, Security Fencing &amp; Gates and a fully qualified Locksmith Service, we are specialists in Remote Access, Remote Gates, Electric Gates, Access Control, and WiFi Access Control.</p>

        <p>A bespoke security installation from Metropolitan Security Solutions will not only provide a physical barrier and help deter thieves from stealing your property but also provide a wide overview and safer environment for pets, children and employees around the home and workplace.</p>

        <p>We are CCTV &amp; Alarm specialists and only provide the very best systems to our customers. Be aware of companies that offer an inferior product and claim to be &ldquo;Professional Installers&ldquo; Metropolitan CCTV build all Surveillance &amp; Alarm Systems to suit your bespoke requirements. However, all CCTV Systems we install are capable of the following as standard; 24hr recording in full 4K High Definition on all channels (cameras) including night vision. Remote viewing from anywhere in the world via your smartphone or tablet. Tamper Alarm, Talk Back, Audio Record and a three year guarantee. We have a wide range of Cameras and DVRs / NVR&rsquo;s to choose from. If you require a more commercial installation, we offer an advanced range of Cameras and Software for Automatic Number Plate Recognition and Face Recognition, Internet Protocol Cameras, Pan, Tilt and Zoom Cameras, Covert Cameras and Audio.</p>

        <p>Do not be fooled by Security Installers who offer a similar service with a much inferior product. We do not have a budget range as it is counter productive to spend time and money on a Security System that is not fit for purpose. However, we do offer a professional Security Installation at a price that will not break the bank.</p>

        <p>One of our experienced Security Advisors will be able to assist you in the selection of your bespoke Security System, we will always offer honest, impartial advice and assist you to choose the security solution that best suits your needs and budget..</p>

        <p>Peace of mind is not as expensive as you think. Contact for a free no obligation...</p>

        <p>London - 0203 743 8911 | South Yorkshire - 0114 294 5565 | info@metropolitancctv.co.uk</p>
      </div>
      <Testimonials />
      <ContactInfo />
    </>
  )
}
