import styles from './ContactInfo.module.scss'

export default function ContactInfo() {
  return (
    <div className={styles.getInTouch}>
      <div>
        <h3>Get in touch</h3>
        <p>Address: London And Yorkshire, UK</p>
        <p>Telephone: <a href="tel:02037438911">02037438911</a></p>
        <p>Mobile: <a href="tel:01142945565">01142945565</a></p>
        <p>Email Address: <a href="mailto:info@metropolitancctv.co.uk">info@metropolitancctv.co.uk</a></p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.3308981853884!2d-1.4982704841082735!3d53.40890807772428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48797947f00e736d%3A0xcde65f2d75291973!2sMetropolitan%20CCTV!5e0!3m2!1sen!2suk!4v1593599944319!5m2!1sen!2suk" width="600" height="300"
        style={{ border: 0 }}
        aria-hidden="false">
      </iframe>
    </div>
  )
}