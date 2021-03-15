import Head from 'next/head'
import React from 'react'
import '../styles/globals.scss'
import { FaFacebook, FaMapMarkerAlt, FaMobile } from 'react-icons/fa'
import Link from 'next/link'
import { MENU } from '../lib/menu'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#6ce985" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header>
        <div id="logo">
          <img
            src='/logo.png'
            alt='Metropolitan CCTV Security Specialists'
          />
        </div>
        <div id='contact'>
          <p>Contact Us Today On:</p>
          <p>Tel: <a href="tel:02037438911">02037438911</a></p>
          <p>Email: <a href="mailto:info@metropolitancctv.co.uk">info@metropolitancctv.co.uk</a></p>
        </div>
        <div id='quote'>
          <Link href="/contact">
            <a className='button'>
                Get a quote today!
            </a>
          </Link>
          <p>Find us on social media</p>
          <a
            href="https://www.facebook.com/Metropolitan-CCTV-135655190475959"
            target="_blank"
            className='button facebook'>
            <FaFacebook />
          </a>
        </div>
      </header>
      <nav>
        {MENU.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <a className='button'>{menu.name}</a>
          </Link>
        ))}
      </nav>
      <Component {...pageProps} />
      <footer>
        <div>
          <h4>ABOUT</h4>
          <p>We can provide Insurance Approved Safes, Fire Certified Safes, Time Lock Safes, Combination Safes, Hidden / Covert Safes - in fact, we can provide and install any Safe for any requirement.</p>
        </div>
        <div>
          <h4>CONTACT METROPOLITAN CCTV</h4>
          <ul>
            <li>
              <FaMapMarkerAlt />
              <a href="https://goo.gl/maps/kZLqDNqFhwivB9x36" target="_blank">
                Metropolitan CCTV, London And Yorkshire, UK
              </a>
            </li>
            <li>
              <AiFillPhone />
              <a href="tel:02037438911" target="_blank">
                02037438911
              </a>
            </li>
            <li>
              <FaMobile />
              <a href="tel:01142945565" target="_blank">
                01142945565
              </a>
            </li>
            <li>
              <MdEmail />
              <a href="mailto:info@metropolitancctv.co.uk" target="_blank">               
                info@metropolitancctv.co.uk
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default MyApp
