import React, { useState, useRef } from "react";
import "../styles/Projects.scss";
import vitality from "../assets/vitality.png";
import concretocr from "../assets/concretocr.png";
import happyHour from "../assets/Happy-hour.png";
import adobloq from "../assets/adobloq.png";
import fotoEstudio from "../assets/fotoEstudio.png";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const proyectos = [
  {
    id: 1,
    nombre: "Vitality",
    stack: "ReactJS | Tailwindcss | Firebase | API integration",
    imagen: vitality,
  },
  {
    id: 2,
    nombre: "ConcretoCR",
    stack: "html | css | Javascript | Firebase",
    imagen: concretocr,
  },
  {
    id: 3,
    nombre: "Happy-Hour",
    stack: "ReactJS | css | Firebase",
    imagen: happyHour,
  },
  {
    id: 4,
    nombre: "Adobloq",
    stack: "ReactJS | Javascript | Tailwindcss | Firebase",
    imagen: adobloq,
  },
  {
    id: 5,
    nombre: "JBgraphics",
    stack: "html | css | Javascript | Firebase",
    imagen: fotoEstudio,
  },
];

const ProjectItem = ({ proyecto, index, isActive, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.li
      ref={ref}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`hoverable ${isActive ? "activo" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="numero">{String(index + 1).padStart(2, "0")}.</span>{" "}
      <span className="nombre">{proyecto.nombre}</span>
      <div className="stack">{proyecto.stack}</div>
    </motion.li>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const [proyectoActivo, setProyectoActivo] = useState(proyectos[0]);

  return (
    <section className="proyectos-showcase" id="proyectos">
      <div className="proyectos-showcase__imagen">
        <img
          key={proyectoActivo.id}
          src={proyectoActivo.imagen}
          alt={proyectoActivo.nombre}
        />
      </div>

      <div className="proyectos-showcase__lista">
        <h3>
          * My Selected <span style={{ color: "#00ff99" }}>Projects</span>
        </h3>
        <ul>
          {proyectos.map((proyecto, index) => (
            <ProjectItem
              key={proyecto.id}
              proyecto={proyecto}
              index={index}
              isActive={proyectoActivo.id === proyecto.id}
              onMouseEnter={() => setProyectoActivo(proyecto)}
              onClick={() => navigate(`/proyecto/${proyecto.id}`)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
