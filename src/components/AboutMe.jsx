import React from 'react';
import '../styles/AboutMe.scss';
import AnimatedText from './anim/AnimatedText';

const AboutMe = () => {
  return (
    <section className="about-me" id="sobremi">
      {/* Frase grande */}
      <div className="about-me__intro">
        <h1>
            <AnimatedText
                text='Just a junior frontend developer passionate about learning and building innovative web applications that make an impact.'
                by='span'
                />
        </h1>
      </div>

      {/* Título de sección */}
      <div className="about-me__heading">
        <hr />
        <h2>
          Some things <span>About me</span>.
        </h2>
      </div>

      {/* Dos columnas de párrafos */}
      <div className="about-me__content">
<p>
  <AnimatedText
    text="I'm a web developer passionate about creating unique digital experiences. I love learning new technologies and taking on challenges that help me grow professionally. I'm always looking to improve my skills and contribute to meaningful projects."
    by="span"
  />
</p>

<p>
  <AnimatedText
    text="In my free time, I enjoy reading, listening to music, and exploring new trends in the development world. I firmly believe in the power of collaboration and teamwork to achieve exceptional results."
    by="span"
  />
</p>

      </div>
    </section>
  );
};

export default AboutMe;
