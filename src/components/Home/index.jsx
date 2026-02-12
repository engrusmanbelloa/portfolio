// src/components/Home/index.jsx
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import "./index.scss";

export default function Home() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'l', 'l', 'o', ' ', 'U', 's', 'm', 'a', 'n'];

    useEffect(() => {
        setTimeout(() => setLetterClass('text-animate-after-render'), 4000);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="flex-layout">
                    <div className="text-zone">
                        <h1>
                            <span className={letterClass}>H</span>
                            <span className={`${letterClass} _12`}>i,</span>
                            <br />
                            <span className={`${letterClass} _13`}>I</span>
                            <span className={`${letterClass} _14`}>'m</span>
                            <img src={LogoTitle} alt="B" />
                            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                            <br />
                            <span className="job-title">Web3 Infra Engineer</span>
                        </h1>

                        <h2 className="sub-heading">Middleware • Automation • Gasless UX</h2>

                        <div className="description">
                            <p>
                                I architect systems that abstract blockchain complexity, 
                                enabling products to scale without breaking the user experience.
                            </p>
                            <ul className="tech-list">
                                <li><span>//</span> EVM Middleware & Smart Contracts</li>
                                <li><span>//</span> Account Abstraction (ERC-4337)</li>
                                <li><span>//</span> Event-Driven Web3 Backends</li>
                            </ul>
                        </div>

                        <Link className="flat-button" to="/contact">INITIATE BUILD</Link>
                    </div>

                    <div className="logo-zone">
                        <Logo />
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}