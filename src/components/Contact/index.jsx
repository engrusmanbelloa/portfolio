import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-after-render')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_i1cyd0s",
        "template_xca29zs",
        form.current,
        "fugCcKEEr6KZOZIdX"
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="flex-layout">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am open to infrastructure architecture roles, Web3 middleware 
              contracts, or freelance engineering. If you have questions about 
              gasless UX or node automation, drop a message below.
            </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group-half">
                  <input placeholder="Name" type="text" name="name" required />
                  <input placeholder="Email" type="email" name="email" required />
                </div>
                <input placeholder="Subject" type="text" name="subject" required />
                <textarea placeholder="Message" name="message" required></textarea>
                <button type="submit" className="flat-button">SEND MESSAGE</button>
              </form>
            </div>
          </div>
          <div className="map-zone">
            <div className="info-map">
              Bello Usman Abdullahi,<br />
              Nigeria,
              <br />
              CCECC lab, <br />
              Idu industrial, Abuja <br />
              <br />
              <span>usmanbelloa@gmail.com</span>
            </div>
            <div className="map-wrap">
              <MapContainer center={[10.283333, 11.166667]} zoom={10}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[10.283333, 11.166667]}>
                  <Popup>Bello Usman lives here, come over for a cup of coffee :)</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
