// src/components/Contact.jsx
import '../styles/Contact.scss';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contacto">
      <h2 className="contact__title">* GET IN TOUCH</h2>

      <div className="contact__content">
        {/* Formulario */}
        <form
          className="contact__form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Mensaje enviado 🚀 (esto es solo un demo)");
          }}
        >
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea rows="5" placeholder="Tu mensaje..." required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>

        {/* Redes sociales */}
        <div className="contact__socials">
          <p>O encontrame en:</p>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:tuemail@correo.com">
              <FaEnvelope />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
