// src/components/AnimatedText.jsx
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const AnimatedText = ({ text, delay = 0, by = 'letter', className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const split = by === 'word' ? text.split(' ') : text.split('');

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
<motion.div
  className={className}
  ref={ref}
  variants={container}
  initial="hidden"
  animate={isInView ? 'visible' : 'hidden'}
  style={{ display: 'inline', whiteSpace: 'normal', wordWrap: 'break-word' }}
>

      {split.map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block whitespace-pre">
          {char === ' ' && by === 'letter' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
