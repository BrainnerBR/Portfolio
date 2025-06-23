import { useParams, useNavigate } from 'react-router-dom';
import { proyectos } from '../data/proyectos';
import '../styles/ProjectDetail.scss';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const proyecto = proyectos.find(p => p.id === Number(id));

  const [index, setIndex] = useState(0);

  // Scroll arriba al cargar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Rotación automática de imágenes
  useEffect(() => {
    if (!proyecto?.imagenes?.length) return;
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % proyecto.imagenes.length);
    }, 4000); // cada 4 segundos
    return () => clearInterval(interval);
  }, [proyecto]);

  if (!proyecto) {
    return (
      <div className="project-detail">
        <p>Proyecto no encontrado.</p>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    );
  }

  return (
    <section className="project-detail">
      <button className="project-detail__back" onClick={() => navigate(-1)}>
        <FiArrowLeft /> Back
      </button>

      <div className="project-detail__content">
        <div className="project-detail__info">
          <h1 className="project-detail__title">{proyecto.nombre}</h1>

          <div className="project-detail__meta">
            <p><strong>Year:</strong> {proyecto.year}</p>
            <p><strong>Tech & Technique:</strong> {proyecto.tech}</p>
            <p><strong>Description:</strong> {proyecto.description}</p>
          </div>

          <div className="project-detail__buttons">
            {proyecto.live && (
              <a href={proyecto.live} target="_blank" rel="noopener noreferrer" className="project-detail__btn">
                <FiExternalLink /> Ver Live
              </a>
            )}
            {proyecto.code && (
              <a href={proyecto.code} target="_blank" rel="noopener noreferrer" className="project-detail__btn">
                <FiGithub /> Ver Código
              </a>
            )}
          </div>
        </div>

        <div className="project-detail__gallery--single">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="project-detail__fade-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={proyecto.imagenes[index]}
              alt={`screenshot ${index + 1}`}
              className="project-detail__image"
            />
          </motion.div>
        </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
