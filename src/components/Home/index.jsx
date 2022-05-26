import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from "../../assets/images/logo-s.png"
import AnimatedLetters from '../AnimatedLetters'
import "./index.scss"
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['e', 'l', 'l', 'o', ' ', 'U', 's', 'm', 'a', 'n']
    const jobArray = ['Blockchain', ' ', 'Software', ' ', 'Engineer',]

    useEffect(() => {
          setTimeout(() => {
          setLetterClass('text-animate-after-render')
        }, 4000)
      }, [])

  return (
    <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            </h1>
            <h2>Fullstack developer | Web3 professional | Marketing manager</h2>
            <div className="contact-me">
              <h3>Get In Touch</h3>
              <h4>If you love coffe as much as i do.</h4>
              <p className="contact-message">
                Love coffe as much as i do? let`s talk about how awsome it`s!
                <br /> we can code while taking hot coffee!
              </p>
           </div>
            <Link className="flat-button" to="/contact">CONTACT ME</Link>
        </div>
        <Logo/>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Home