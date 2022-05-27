import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import DrawSVGPlugin from "gsap"
import LogoS from '../../../assets/images/btc.png'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
    
        gsap
          .timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1,
          })
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 2,
            duration: 4,
          }
        )
      }, [])
    
  return (
    <div className="logo-container" ref={bgRef}>
    <img
      className="solid-logo"
      ref={solidLogoRef}
      src={LogoS}
      alt="JavaScript,  Developer"
    />
  </div>

  )
}

export default Logo