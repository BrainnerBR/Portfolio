import '../styles/Contact.scss';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Toaster, toast } from 'sonner';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rghxrjv', 'template_zg6vyxo', form.current, 'BKxQJ1pyOTxQcx3Um')
      .then(
        () => {
          toast.success('Mensaje enviado con éxito 🚀');
          form.current.reset();
        },
        (error) => {
          toast.error('Error al enviar el mensaje ❌');
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contacto">
      <h2 className="contact__title">
        Want to <span style={{ color: '#00ff99' }}>Contact</span> me ?
      </h2>

      <div className="contact__content">
        <form ref={form} className="contact__form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="reply_to" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your message..." required></textarea>
          <button type="submit">Send</button>
        </form>

        <div className="contact__socials">
          <p>My social media:</p>
          <div className="social-icons">
            <a href="https://github.com/BrainnerBR" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/brainer-blanco-rojas-82ba17230/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://instagram.com/brainner_br" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
