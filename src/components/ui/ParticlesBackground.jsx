// import Particles from "react-tsparticles"
import Particles from "@tsparticles/react";

export default function ParticlesBackground(props) {
   const { particlesLoaded, init, disabled } = props;
   // if (disabled) return null
return (
   init && <Particles
    id="tsparticles"
    particlesLoaded={particlesLoaded}
    options={{
      fullScreen: { enable: true, zIndex: -1 },
      background: {
        color: "#0B0E14",
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            area: 1000,
          },
        },
        color: {
          value: ["#2A5CFF", "#00F0A0"],
        },
        links: {
          enable: true,
          distance: 140,
          color: "#2A5CFF",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }}
  />
);
};
