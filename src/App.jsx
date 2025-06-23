import Hero from './components/Hero';
import Projects from './components/Projects';
import ScrollBar from './components/anim/ScrollBar';
import CustomCursor from './components/anim/CustomCursor';
import SkillsStack from './components/SkillsStack';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <ScrollBar />
      <CustomCursor />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Projects />
            <SkillsStack />
            <Contact />
          </>
        } />
        <Route path="/proyecto/:id" element={<ProjectDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
