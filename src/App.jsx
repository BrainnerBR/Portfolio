import { useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Lenis from 'lenis'


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (x) => 1 - Math.pow(1 - x, 3),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [])

return (
  <div>
    <Hero/>
    <Projects/>
  </div>
  );
}

export default App
