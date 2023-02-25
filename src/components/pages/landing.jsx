import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from './assets/particlesjs-config.json';
import '../styles/landing.css'

function Landing() {
    const opts = options;
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div id="landing">
            <div className="particlebox">
                <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={opts} />
            </div>

            <div className="overlay">
                <h1>testing landing</h1>
                <h2>testing landing p2</h2>

                <h1>testing landing</h1>
                <h2>testing landing p2</h2>
            </div>
            

        </div>
    );
}

export default Landing;