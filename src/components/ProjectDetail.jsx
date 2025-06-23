import { useParams, useNavigate } from 'react-router-dom';
import { proyectos } from '../data/proyectos';
import '../styles/ProjectDetail.scss';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const proyecto = proyectos.find(p => p.id === Number(id));

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

        <div className="project-detail__gallery">
          {proyecto.imagenes?.map((img, i) => (
            <img key={i} src={img} alt={`screenshot ${i + 1}`} className="project-detail__image" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
