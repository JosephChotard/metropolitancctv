import Head from 'next/head'
import React from 'react'
import '../styles/globals.scss'
import { FaFacebook, FaMapMarkerAlt, FaMobile } from 'react-icons/fa'
import Link from 'next/link'
import { MENU } from '../lib/menu'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { CgMenu } from 'react-icons/cg'
import { Navbar } from '@components/navbar/Navbar'
import { DefaultSeo } from 'next-seo'
import SEO from '../lib/next-seo.config'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <DefaultSeo
        {...SEO}
      />
      <header>
        <Link href='/' >
          <a id="logo">
            <img
              src='/logo.png'
              alt='Metropolitan CCTV Security Specialists'
            />
          </a>
        </Link>
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
        {/* <button className='menu'><CgMenu />MENU</button>
        <div className='nav'>
          {MENU.map((menu, index) => (
            <Link href={menu.link} key={index}>
              <a className='button'>{menu.name}</a>
            </Link>
          ))}
        </div> */}
        <Navbar />
      </nav>
      <main>
        <Component {...pageProps} />
      </main>
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
