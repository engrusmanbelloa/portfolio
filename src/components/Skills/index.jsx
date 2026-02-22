// src/components/Skills/index.jsx
import React, { useEffect, useState } from 'react'
import "./index.scss";
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import TagCloud from './TagCloud';

export default function Skills() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const skillsArray = ['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-after-render')
    }, 3000)
  }, [])    
    
  return (
    <> 
    <div class="container skills-page">
    <div className="flex-layout">
      <div class="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            </h1>
            <div className="experience-block">
              <h2>Blockchain & Infrastructure</h2>
              <p>
                Specializing in <span className="tech-tag">Solidity</span>,&thinsp; 
                <span className="tech-tag">Ethers.js</span>, and <span className="tech-tag">Foundry toolchain</span>. 
                I focus on ERC-4337 (Account Abstraction) and automated middleware.
              </p>
            </div>
            <div className="experience-block">
              <h2>Full Stack Stack</h2>
              <p>
                Building event-driven backends with <span className="tech-tag">Node.js</span>, <span className="tech-tag">REST APIs</span>, &thinsp;
                <span className="tech-tag">Firebase</span>, and <span className="tech-tag">MongoDB</span>, 
                integrated with high performance <span className="tech-tag">NextJs</span>, and <span className="tech-tag">React Native</span> frontends.
              </p>
            </div>
          </div>
          <div className="skills-visual">
             <TagCloud />
          </div>
      </div>
      <Loader type="pacman" />
    </div>
    
    </>

  )
  
}