import { MENU } from 'lib/menu'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import styles from './Navbar.module.scss'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const [active, setActive] = useState(false)
  const router = useRouter()
  

  React.useEffect(() => {
    const closeMenu = () => setActive(false)
    router.events.on('routeChangeStart', closeMenu)

    return () => {
      router.events.off('routeChangeStart', closeMenu)
    }
  })

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.headNav}>
          <button
            className={styles.menuBtn}
            onClick={handleClick}
          >
            <GiHamburgerMenu />
          </button>
        </div>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? undefined : styles.hidden
          } ${styles.navLinks}`}
        >
          {MENU.map((menu, index) => (
            <Link href={menu.link} key={index}>
              <a className='button'>{menu.name}</a>
            </Link>
          ))}
        </div>

      </nav>
    </>
  )
}
