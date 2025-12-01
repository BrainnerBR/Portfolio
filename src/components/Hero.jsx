// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/Hero.scss";
import Lenis from "lenis";
import AnimatedText from "./anim/AnimatedText";

const Hero = () => {
  const [activeSection, setActiveSection] = useState("");
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    lenisRef.current = lenis;
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["sobremi", "proyectos", "skills", "contacto"];

      let found = false;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(id);
            found = true;
            break;
          }
        }
      }
      if (!found) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero">
      {/* Correo lateral */}
      <a
        href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJXKbWZMLphQFXwrnckhpJtLRTlKRRtdBXPPxTNmCBmGsKlDDsCrTdGFvHGFTFLknqHV"
        target="blank"
      >
        <div className="hero__email">brainnerblanco@gmail.com</div>
      </a>

      {/* Contenido central */}
      <div className="hero__content">
        <h1 className="hero__title">
          <AnimatedText text="Brainer" className="green" />
          <br />
          <span className="white">Blanco</span>
        </h1>
        <p className="hero__description">
          ¡Hello World! I'm <span>Brainer</span>, Frontend Developer Junior
          committed to continuous improvement and constant learning. I'm
          passionate about building clean, efficient, and modern interfaces. I'm
          looking for an opportunity to grow within a team where knowledge is
          shared and innovation is encouraged.
        </p>
        <a
          href="/Brainer_Blanco_Resume_EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero__button"
        >
          SEE RESUME
        </a>
      </div>

      {/* Menú lateral derecho */}
      <div className="hero__menu">
        <a
          onClick={() => scrollToSection("sobremi")}
          className={activeSection === "sobremi" ? "active" : ""}
        >
          About me
        </a>
        <a
          onClick={() => scrollToSection("proyectos")}
          className={activeSection === "proyectos" ? "active" : ""}
        >
          Projects
        </a>
        <a
          onClick={() => scrollToSection("skills")}
          className={activeSection === "skills" ? "active" : ""}
        >
          Tech
        </a>
        <a
          onClick={() => scrollToSection("contacto")}
          className={activeSection === "contacto" ? "active" : ""}
        >
          Contact
        </a>
      </div>

      {/* Barra de scroll */}
      <div className="hero__scrollbar">
        <div className="hero__scrollbar--progress"></div>
      </div>
    </div>
  );
};

export default Hero;
