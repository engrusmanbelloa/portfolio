// src/components/Layout/index.jsx
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Sidebar from "../Sidebar";
import ParticlesBackground from "../ui/ParticlesBackground";
import "./index.scss";

export default function Layout() {
    const [init, setInit] = useState(false);
    const isMobile = window.innerWidth < 768;

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className="App">
            {/* Sidebar stays outside the main-content flow */}
            <Sidebar />
            
            <ParticlesBackground init={init} disabled={isMobile} />
            
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
        </div>
    );
}