import React from 'react'
import styles from './Testimonials.module.scss'
import { AiFillStar } from 'react-icons/ai'

const TESTIMONIALS = [
  {
    name: "Emma Sarah Friday",
    date: "Friday, January  3, 2020",
    description: "What a fantastic service I received! Cannot recommend enough. I was interested in cctv for my own peace of mind and security of my property. Not only are the cameras excellent quality but I am able to access them any time and anywhere on my mobile phone or tablet. For additional peace of mind they also installed an up to date burglar alarm which included a device that rings me when my burglar alarm has been triggered. Overall, great products and a reliable, friendly service!"
  },
  {
    name: "Dee Howarth",
    date: "Tuesday, June 11, 2019",
    description: "Reliable, honest & did a great job. Thankyou very much, would recommend & will use again!"
  },
  {
    name: "Scott Allen",
    date: "Wednesday, December 25, 2019",
    description: "I wanted a CCTV system different to what you find on the high st the camera system I had installed was a bespoke system I wanted cameras that you could actually see who the people actually are not a blurred picture that you see on most Cctv systems the quality of the cameras are brilliant not only in the day but night vision is truly amazing and I can watch real time Cctv on my iPhone anywhere in the world very professional company and the fitting is excellent very happy customer would definitely recommend 10/10"
  },
  {
    name: "Ian Redfern",
    date: "Thursday, January 23, 2020",
    description: "Just had cctv and alarm fitted really impressed would recommend highly many thanks"
  },
]

export default function Testimonials() {
  const [selected, setSelected] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSelected(selected === TESTIMONIALS.length - 1 ? 0 : selected + 1)
    }, 5000);
    return () => {
      clearInterval(interval);
    }
  }, [selected]);


  return (
    <div className={styles.testimonials}>
      <div className={styles.names}>
        {TESTIMONIALS.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)} className={index === selected ? styles.selected : undefined}>
            <h4>{testimonial.name}</h4>
            <p>{testimonial.date}</p>
          </button>
        ))}
      </div>
      <div className={styles.review}>
        <h4>{TESTIMONIALS[selected].name}</h4>
        <p className={styles.stars}><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
        <p>{TESTIMONIALS[selected].description}</p>
      </div>
    </div>
  )
}