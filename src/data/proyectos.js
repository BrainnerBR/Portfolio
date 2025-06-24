import vitality from '../assets/vitality.png';
import vitality2 from '../assets/vitality2.png';
import vitality3 from '../assets/vitality3.png';
import vitality4 from '../assets/vitality4.png';


import concretocr from '../assets/concretocr.png';
import concretocr2 from '../assets/concretocr2.png';
import concretocr3 from '../assets/concretocr3.png';
import concretocr4 from '../assets/concretocr4.png';

import happyHour from '../assets/Happy-hour.png';

import adobloq from '../assets/adobloq.png';
import adobloq2 from '../assets/adobloq2.png';
import adobloq3 from '../assets/adobloq3.png';

import fotoEstudio from '../assets/fotoEstudio.png';
import fotoEstudio2 from '../assets/fotoEstudio2.png';
import fotoEstudio3 from '../assets/fotoestudio3.png';  
import fotoEstudio4 from '../assets/fotoEstudio4.png';

export const proyectos = [
  {
    id: 1,
    nombre: 'Vitality',
    year: '2025',
    tech: [' ReactJS |', ' Tailwind CSS |', ' Firebase |', ' API'],
    stack: 'ReactJS | Tailwind CSS | Firebase | API',
    description:
      'Vitality is a full-featured web application built with React and Tailwind CSS, focused on helping users track daily habits, fitness progress, and wellness routines. Designed as a personal development tool, it offers a dynamic and responsive experience through a clean, modern interface.',
          features:   
      [
      'React-based architecture for fast, component-driven UI',
      'Tailwind CSS for consistent, utility-first styling',
      'Firebase Authentication for secure user login and registration',
      'Realtime Firebase Database to store and sync user data',
      'Integration of external APIs and local JSON to generate personalized fitness and habit content',
      'Data visualization using interactive charts and graphs to show progress and trends',
      'Daily challenges, habits, and motivational messages to boost user engagement',
    ],
    imagenes: [vitality, vitality2, vitality3, vitality4 ],
    live: 'https://vitality-a8e78.web.app/',
    code: 'https://github.com/BrainnerBR/vitality',
  },
  {
    id: 2,
    nombre: 'ConcretoCR',
    year: '2025',
    tech: [' HTML |', ' CSS |', ' JavaScript |', ' Firebase'],
    stack: 'HTML | CSS | JavaScript | Firebase',
    description:
      'This website was developed for a concrete and construction materials company, with a strong focus on enabling fast and direct communication between clients and sales representatives. Built with custom HTML, CSS, and JavaScript, the site delivers a responsive, modern layout tailored to the company’s needs.',
          features:   
      [
      'Custom CSS styling for a clean, business-oriented design',
      'Direct WhatsApp integration for real-time client-vendor communication',
      'Contact form with validation for quick inquiries',
      'Clear presentation of services and product categories',
      'Sticky navigation and smooth scrolling for easy access to key sections',
    ],
    imagenes: [concretocr, concretocr2, concretocr3, concretocr4],
    live: 'https://www.concretocr.com/',
    code: 'https://github.com/BrainnerBR/MaterialesCR6',
  },
  {
    id: 3,
    nombre: 'Happy-Hour',
    year: '2023',
    tech: [' ReactJS |', ' CSS |', ' Firebase'],
    stack: 'ReactJS | CSS | Firebase',
    description:
      'This is a personal project built with React, designed to enhance social gatherings through a fun and interactive drinking game experience. Created purely for entertainment, the app delivers randomized challenges and game prompts to keep the atmosphere lively and spontaneous.',
          features:   
      [
      'Developed entirely with React',
      'Simple and intuitive UI styled with custom CSS',
      'Game data managed through structured JSON integration',
      'Randomized questions and tasks for replayable fun',
      'Responsive design for desktop and mobile use',
    ],
    imagenes: [happyHour],
    live: 'https://happy-hour-drinking-game.web.app/',
    code: 'https://github.com/BrainnerBR/Happy-Hour',
  },
  {
    id: 4,
    nombre: 'Adobloq',
    year: '2025',
    tech: [' ReactJS |' , ' JavaScript |', ' Tailwind CSS |', ' Firebase'],
    stack: 'ReactJS | Tailwind CSS | Firebase',
    description:
      'This is a custom-built web application designed for managing invoicing and inventory in a business that sells concrete blocks and paving stones. Developed with React and styled using Tailwind CSS, the app streamlines the billing process while offering powerful tools for data tracking and client management.',
          features:   
      [
      'Electronic invoicing system with printable receipts and guide generation',
      'Firebase Authentication for secure login and user management',
      'Real-time database with Firebase to store invoices, clients, and product data',
      'Searchable tables for filtering invoices by date, client, or product',
      'Inventory management module for tracking product stock across categories',
    ],
    imagenes: [adobloq, adobloq2, adobloq3],
    live: 'https://adobloq-demo.netlify.app',
    code: 'https://github.com/BrainnerBR/facturacion',
  },
  {
    id: 5,
    nombre: 'JBgraphics',
    year: '2024',
    tech: [' Html |', ' Css |', ' Bootstrap',],
    stack: 'html | css | Bootstrap',
    description:
      'This project is a modern and visually appealing website for a photography studio, designed with a strong emphasis on aesthetics using Bootstrap. The layout highlights the studio’s portfolio with smooth transitions, image carousels, and responsive grids to ensure an optimal experience on all screen sizes. Key features include: Fully responsive design built with Bootstrap 5,Hero section with parallax and call-to-action,Image gallery using Bootstrap’s carousel and cards,Contact form integrated with email delivery,Smooth scrolling and section-based navigation. The goal was to combine clean visuals with functional design to represent the creativity and professionalism of the photography brand.',
    features:   
      [
      'Fully responsive design built with Bootstrap 5',
      'Hero section with parallax and call-to-action',
      'Image gallery using Bootstrap’s carousel and cards',
      'Contact form integrated with email delivery',
      'Smooth scrolling and section-based navigation',
    ],

      imagenes: [fotoEstudio, fotoEstudio2, fotoEstudio3, fotoEstudio4],
    live: 'https://jbgraphics.netlify.app/',
    code: 'https://github.com/BrainnerBR/estudioFotografico',
  },
];

export default proyectos;
