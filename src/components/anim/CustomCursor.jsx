import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import gsap from 'gsap';
import '../anim/animates.scss'

function CustomCursor() {
  const location = useLocation();
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');

    if(cursor) {
      gsap.to(cursor, {scale: 1, backgroundColor: 'white'});
    }

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const handleHoverIn = () => {
      gsap.to(cursor, { scale: 2, backgroundColor: '#00ff88' });
    };

    const handleHoverOut = () => {
      gsap.to(cursor, { scale: 1, backgroundColor: 'white' });
    };

    window.addEventListener('mousemove', moveCursor);

    // esperar al render de otros elementos
    setTimeout(() => {
      document.querySelectorAll('a, button, .hoverable').forEach((el) => {
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    }, 100); // o usar requestAnimationFrame

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, .hoverable').forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, [location.pathname]);
  

  return <div className="custom-cursor"></div>;
}

export default CustomCursor;
