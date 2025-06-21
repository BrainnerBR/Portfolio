import React, { useState } from 'react';
import '../styles/Projects.scss';

const proyectos = [
  {
    id: 1,
    nombre: 'Vitality',
    stack: 'ReactJS | Tailwindcss | Firebase | ',
    imagen: '/img/mti.jpg',
  },
  {
    id: 2,
    nombre: 'ConcretoCR',
    stack: 'html | css | Javascript | Firebase',
    imagen: '/img/epikcart.jpg',
  },
  {
    id: 3,
    nombre: 'Happy-Hour',
    stack: 'ReactJS | css |Firebase',
    imagen: '/img/resume.jpg',
  },
  {
    id: 4,
    nombre: 'Adobloq',
    stack: 'ReactJS | Javascript | Tailwindcss | Firebase',
    imagen: '/img/resume.jpg',
  },
  // Podés seguir agregando más proyectos aquí
];

const Projects = () => {
  const [proyectoActivo, setProyectoActivo] = useState(proyectos[0]);

  return (
    <section className="proyectos-showcase">
      <div className="proyectos-showcase__imagen">
        <img src={proyectoActivo.imagen} alt={proyectoActivo.nombre} />
      </div>

      <div className="proyectos-showcase__lista">
        <h3>* Selected Projects</h3>
        <ul>
          {proyectos.map((proyecto, index) => (
            <li
              key={proyecto.id}
              onMouseEnter={() => setProyectoActivo(proyecto)}
              className={proyectoActivo.id === proyecto.id ? 'activo' : ''}
            >
              <span className="numero">{String(index + 1).padStart(2, '0')}.</span>{' '}
              <span className="nombre">{proyecto.nombre}</span>
              <div className="stack">{proyecto.stack}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
