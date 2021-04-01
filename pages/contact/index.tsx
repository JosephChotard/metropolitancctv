import ContactInfo from '@components/contact-info/ContactInfo'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import styles from './Contact.module.scss'

export default function IntruderAlarms() {
  const [loading, setLoading] = React.useState(false)
  const [sent, setSent] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')

  const registerUser = async event => {
    event.preventDefault()
    setLoading(true)
    setErrorMessage('')
    
    fetch('/api/contact', {
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
      .then(function (response) {
        console.log(response)
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then(() => setSent(true))
      .catch(e => {
        console.error(e)
        setErrorMessage('Something went wrong, please try again later')
      })
      .finally(() => setLoading(false))
  }
  
  return (
    <div className={`content`}>
      <h1>CONTACT METROPOLITAN CCTV</h1>
      
      {
        sent ?
          (
            <div className={styles.success}>
              <h3>We'll get back to you as soon as we can!</h3>
              <FaCheckCircle />
              <button onClick={() => setSent(false)}>Send another message?</button>
            </div>
          )
          : (
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
              <p className={styles.error}>{errorMessage}</p>
              <button type="submit" className="button" disabled={loading}>
                {loading ? (<div className={styles.loading}></div>) : <>Send Message</>}
              </button>
            </form>
          )
      }
      

      <ContactInfo />
    </div>
  )
}
