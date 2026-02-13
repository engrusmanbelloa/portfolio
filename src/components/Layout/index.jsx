//src/components/Layout/index.jsx
import "./index.scss"
import Sidebar from "../Sidebar"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ParticlesBackground from "../ui/ParticlesBackground"

export default function Layout() {
    const [ init, setInit ] = useState(false);
    const isMobile = window.innerWidth < 768;
  
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
    <div className="App">
        <Sidebar />
        <ParticlesBackground particlesLoaded={particlesLoaded} init={init} disabled={isMobile} />
        {/* <div className="page">
            <span className="tags top-tags">&lt;body&gt;</span>
            <Outlet/>
            <span className="tags bottom-tags">
                &lt;/body&gt;
                <br/>
                <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
        </div> */}
        <main className="main-content">
            {/* Visual decorations: top tags */}
            <span className="tags top-tags">&lt;body&gt;</span>
            
            {/* The content-wrapper is the flexible grid container */}
            <div className="content-wrapper">
                <Outlet />
            </div>

            {/* Visual decorations: bottom tags */}
            <span className="tags bottom-tags">
                &lt;/body&gt;
                <br />
                <span className="bottom-tag-html">&lt;/html&gt;</span>
            </span>
        </main>
        
    </div>)
};