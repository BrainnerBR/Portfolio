import vitality from '../assets/vitality.png';
import concretocr from '../assets/concretocr.png';
import happyHour from '../assets/Happy-hour.png';
import adobloq from '../assets/adobloq.png';

export const proyectos = [
  {
    id: 1,
    nombre: 'Vitality',
    year: '2024',
    tech: ['ReactJS', 'Tailwind CSS', 'Firebase', 'REST API'],
    technique: 'Responsive Design & API Integration',
    stack: 'ReactJS | Tailwind CSS | Firebase | API',
    description:
      'Vitality es una plataforma enfocada en el bienestar físico y mental. Incluye autenticación con Firebase, integración de APIs de salud, y un diseño mobile-first moderno y dinámico.',
    imagenes: [vitality],
    live: 'https://vitality-app-demo.netlify.app',
    code: 'https://github.com/tuusuario/vitality',
  },
  {
    id: 2,
    nombre: 'ConcretoCR',
    year: '2024',
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    technique: 'Landing corporativa + formulario conectado a Firebase',
    stack: 'HTML | CSS | JavaScript | Firebase',
    description:
      'Sitio web informativo para una empresa de concreto premezclado. Incluye cotizador, formulario de contacto funcional, y estructura optimizada para carga rápida.',
    imagenes: [concretocr],
    live: 'https://concretocr.netlify.app',
    code: 'https://github.com/tuusuario/concretocr',
  },
  {
    id: 3,
    nombre: 'Happy-Hour',
    year: '2024',
    tech: ['ReactJS', 'CSS', 'Firebase'],
    technique: 'Component-driven UI + autenticación',
    stack: 'ReactJS | CSS | Firebase',
    description:
      'Happy-Hour es una app tipo dashboard para gestión de recetas de cocteles. Permite a los usuarios crear y guardar sus favoritos con login protegido por Firebase.',
    imagenes: [happyHour],
    live: 'https://happy-hour-bar.netlify.app',
    code: 'https://github.com/tuusuario/happy-hour',
  },
  {
    id: 4,
    nombre: 'Adobloq',
    year: '2024',
    tech: ['ReactJS', 'JavaScript', 'Tailwind CSS', 'Firebase'],
    technique: 'SPA con filtros dinámicos y login',
    stack: 'ReactJS | Tailwind CSS | Firebase',
    description:
      'Marketplace de productos sostenibles. Desarrollado como Single Page Application, incluye búsqueda dinámica, filtros por categoría y login de usuario con Firebase.',
    imagenes: [adobloq],
    live: 'https://adobloq-demo.netlify.app',
    code: 'https://github.com/tuusuario/adobloq',
  },
];

export default proyectos;
