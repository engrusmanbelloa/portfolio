import React from 'react'
import { useEffect, useState } from 'react'
import { faEthereum, faReact, faNodeJs, faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons'
import { faCubes, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

export default function About() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-after-render')
      }, 3000)
    }, [])

  return (
    <>
      <div className="container about-page">
        <div className="flex-layout">
          <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am a Web3 Infrastructure Engineer focused on bridging the gap between 
              complex protocol logic and seamless user experiences. My expertise lies 
              in building robust middleware and automation for the EVM ecosystem.
          </p>
          <p>
            With a background in Post-Quantum Cryptography research, I approach 
            infrastructure with a security-first mindset, ensuring that the 
            systems I build today are resilient against future threats.
          </p>
          <p>
            I'm a naturally curious problem-solver, a tech-obsessed father, 
            and a firm believer that the best middleware is the kind that 
            developers never have to worry about.
          </p>
        </div>
        <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faEthereum} color="#A85CF9" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faNodeJs} color="#4E944F" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faShieldHalved} color="#00F0A0" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faCubes} color="#4B7BE5" />
              </div>
            </div>
          </div>
          </div>
        
      </div>
      <Loader type="pacman" />
    </>
  )
}