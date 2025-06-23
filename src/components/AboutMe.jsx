import React from 'react';
import '../styles/AboutMe.scss';

const AboutMe = () => {
  return (
    <section className="about-me" id="sobremi">
      {/* Frase grande */}
      <div className="about-me__intro">
        <h1>
          I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.
        </h1>
      </div>

      {/* Título de sección */}
      <div className="about-me__heading">
        <p>This is me.</p>
        <hr />
        <h2>
          Hi, I'm <span>Brainer</span>.
        </h2>
      </div>

      {/* Dos columnas de párrafos */}
      <div className="about-me__content">
        <p>
          Soy un desarrollador web apasionado por crear experiencias digitales únicas. Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer profesionalmente. Siempre estoy buscando mejorar mis habilidades y contribuir a proyectos interesantes.
        </p>
        <p>
          En mi tiempo libre disfruto de la lectura, la música y explorar nuevas tendencias en el mundo del desarrollo. Creo firmemente en el poder de la colaboración y el trabajo en equipo para lograr resultados excepcionales.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
