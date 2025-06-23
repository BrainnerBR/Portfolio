// src/components/Hero.jsx
import '../styles/Hero.scss';
import Reveal from './anim/Reveal';


const Hero = () => {
  return (
    <div className="hero">
      {/* Correo lateral */}
      <div className="hero__email">brainnerblanco@gmail.com</div>

      {/* Contenido central */}
      <div className="hero__content">

        <h1 className="hero__title">
          <span className="green">Brainer</span> <br />
          <span className="white">Blanco</span>
        </h1>
        <p className="hero__description">
          ¡Hello World! I'm <span>Brainer</span>, Frontend Developer Junior committed to continuous improvement and constant learning. I'm passionate about building clean, efficient, and modern interfaces. I'm looking for an opportunity to grow within a team where knowledge is shared and innovation is encouraged.
        </p>
        <button className="hero__button">SEE CV</button>
      </div>

      {/* Menú lateral derecho */}
      <div className="hero__menu">
        <a href="#sobremi">About me</a>
        <a href="#proyectos">Projects</a>
        <a href="#contacto">Contact</a>
      </div>

      {/* Barra de scroll */}
      <div className="hero__scrollbar">
        <div className="hero__scrollbar--progress"></div>
      </div>
    </div>
  );
};

export default Hero;
