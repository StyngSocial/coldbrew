import Particles from "react-tsparticles";

const Background = () => {
  const options = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#f8f9fa",
      },
      shape: {
        type: "char",
        character: {
          value: ["Ƀ"],
          font: "Helvetica Heue",
          style: "",
          weight: "500",
          fill: true,
        },
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 25,
        random: false,
        anim: {
          enable: false,
          speed: 10,
          size_min: 15,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#f8f9fa",
        opacity: 0.4,
        width: 1,
      },
      move: {
        collisions: true,
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 0.75,
          },
        },
      },
    },
    retina_detect: false,
    background: {
      color: "#50c878",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  };
  return (
    <>
      <Particles id="tsparticles" options={options} />
    </>
  );
};

export default Background;
