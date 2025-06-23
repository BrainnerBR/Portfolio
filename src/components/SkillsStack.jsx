import '../styles/Skills.scss'
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiFirebase,
  SiMysql,

  SiGit,
  SiHtml5,
  SiCss3,
  SiPhp,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


export const skillsData = {
  frontend: [
    { name: 'HTML', icon: SiHtml5, color: '#df5312' },
    { name: 'CSS', icon: SiCss3, color: '#1e51f7' },
    { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
    { name: 'Java', icon: FaJava, color: '#f71e1e' },
    { name: 'React', icon: SiReact, color: '#61dafb' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#3885f8' },
    { name: 'SASS', icon: SiSass, color: '#cc6699' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
  ],
  database: [
    { name: 'MySQL', icon: SiMysql, color: '#00758f' },
  ],
  tools: [
    { name: 'Git', icon: SiGit, color: '#f1502f' },
    {name: 'Firebase', icon: SiFirebase, color: '#f1ad2f'},
  ],
  learnig: [
    { name: 'PHP', icon: SiPhp, color: '#816a9b' },
    {name: 'React Native', icon: TbBrandReactNative, color: '#61dafb'},
  ]
};

const SkillsStack = () => {
  return (
    <section className="skills" id='skills'>
      <h2 className="skills__title">*<span style={{color: '#00ff99'}}>TECH</span> I USE</h2>
{Object.entries(skillsData).map(([category, items]) => (
  <div className="skills__category" key={category}>
    <h3 className="skills__subtitle">{category.toUpperCase()}</h3>
    <div className="skills__icons">
      {items.map(({ name, icon: Icon, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className="skills__item"
      key={name}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Icon style={{ color }} />
      <span>{name}</span>
    </motion.div>
  );
})}

    </div>
  </div>
))}

    </section>
  );
};

export default SkillsStack;