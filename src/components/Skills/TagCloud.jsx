// src/components/Skills/TagCloud.jsx
import { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import './index.scss';

export default function Sphere() {
  // const containerRef = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;

    const container = '.tagcloud';
    const texts = [
      'Solidity', 'Ethereum', 'React', 'Next.js', 'NodeJS',
      'Ethers.js', 'Foundry',
      'EVM', 'ERC-4337', 'MongoDB', 'Firebase', 'Python',
      'Express', 'Sass', 'Git', 'Mocha'
    ];

    const options = {
      radius: window.innerWidth < 768 ? 150 : 250,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      direction: 135,
      keep: true,
    };

    TagCloud(container, texts, options);
    isInitialized.current = true;
  }, []);

  return (
    <div className="skills-visual">
      <span className="tagcloud"></span>
    </div>
  );
}