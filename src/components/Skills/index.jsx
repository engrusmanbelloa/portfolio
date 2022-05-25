import React, { useEffect, useState } from 'react'
import "./index.scss";
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Canvass from './canvass';

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const skillsArray = ['Skills', ' ', '&', ' ', 'Experience']

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-after-render')
    }, 3000)
  }, [])    
    
  return (
    <div> 
    <div class="container skills">
      <div class="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            </h1>
          
          <h2>Web and blockchain technologies</h2>
          <h3>CTO <a href='https://bitkova.com' rel="noreferrer" target={"_blank"}>BITKOVA ACADEMY</a></h3>
          <p>
            Experienced web and smart contract developer with focus in the latest web technologies such as&nbsp;
            <span class="tech-tag">HTML5</span>,&nbsp;
            <span class="tech-tag">CSS3</span>,&nbsp;
            <span class="tech-tag">JavaScript</span>,&nbsp;
            <span class="tech-tag">Solidty</span>,&nbsp;
            <span class="tech-tag">Web3JS</span>,&nbsp;
            <span class="tech-tag">React</span>,&nbsp;
            <span class="tech-tag">Mocha</span>,&nbsp;
            <span class="tech-tag">Component CSS</span>,&nbsp;
            <span class="tech-tag">Sass</span>,&nbsp;
            <span class="tech-tag">ExpressJs</span>,&nbsp;
            <span class="tech-tag">MongoDB</span>,&nbsp;
            <span class="tech-tag">Mongoose</span>,&nbsp;
            <span class="tech-tag">NodeJs</span>, etc.
          </p>
          <h2>Digital marketing</h2>
          <h3>PR & MEDIA MANAGER <a href='http://icorbp.org' rel="noreferrer" target={"_blank"}>ICORBP</a></h3>
          <p>
            Proficient in Digital Marketing & Social Media Marketing, 
            Email Marketing, Content Marketing, Copywriting, Google Ads, Facebook Ads, 
            SEO, WordPress, Instagram, YouTube & More.
          </p>
      </div>
        
      <div class="skills-charts">
        <div id="myCanvasContainer">
        
        <Canvass className="canvas" />
        </div>
      </div>
      <Loader type="pacman" />
    </div>
    
    </div>

  )
  
}

export default Skill