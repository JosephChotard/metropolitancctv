import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
  service: "FastMail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export default function handler(req, res) {
  const mail = {
    from: 'contactform@metropolitancctv.co.uk',
    replyTo: req.body.email,
    to: process.env.EMAIL_USERNAME,
    subject: 'Metropolitan CCTV Contact Form',
    text: `Name: ${req.body.name}\nEmail: <${req.body.email}>\nMessage:\n${req.body.message}`,
  }
  return new Promise<void>((resolve, reject) => {
    transporter.sendMail(mail, function (err, info) {
      if (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
        reject(err)
      } else {
        console.log(info)
        res.status(200).json({ success: 'OK' })
        resolve()
      }
    })
  })
}