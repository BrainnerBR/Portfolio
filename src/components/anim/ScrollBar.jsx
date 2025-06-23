import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import '../../styles/ScrollBar.scss';

function ScrollBar() {
  const progressRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (x) => 1 - Math.pow(1 - x, 3),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);

      const scrollTop = window.scrollY; // 🧠 usamos scrollY real
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (progressRef.current && !isNaN(scrollPercent)) {
        progressRef.current.style.height = `${scrollPercent}%`;
      }

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="hero__scrollbar">
      <div
        className="hero__scrollbar--progress"
        ref={progressRef}
      ></div>
    </div>
  );
}

export default ScrollBar;
