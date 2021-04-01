import ContactInfo from '@components/contact-info/ContactInfo'
import React from 'react'
import styles from './Contact.module.scss'

export default function IntruderAlarms() {

  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        name: event.target.name.value,
        phone: event.target.phone.value,
        email: event.target.email.value,
        message: event.target.message.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    console.log(result)
    // result.user => 'Ada Lovelace'
  }
  return (
    <div className={`content`}>
      <h1>CONTACT METROPOLITAN CCTV</h1>
      
      <form onSubmit={registerUser} className={styles.form}>
        <label>
          Name:
          <input type="text" id="name" autoComplete="name" placeholder="Your Name"/>
        </label>
        <label>
          Phone:
          <input type="text" id="phone" autoComplete="phone" placeholder="Your Phone Number"/>
        </label>
        <label>
          Email:
          <input type="text" id="email" autoComplete="email" placeholder="Your email"/>
        </label>
        <label>
          Message:
          <textarea id="message" placeholder="How can we help?"/>
        </label>
        <button type="submit" className="button">Send Message</button>
      </form>

      <ContactInfo />
    </div>
  )
}
