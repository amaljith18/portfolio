import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Loader from './components/ui/Loader';
import ScrollToTop from './components/ui/ScrollToTop';

// Lazy load below-fold sections
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/sections/Footer'));

export default function App() {
  const { isDark, toggle } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="noise">
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar isDark={isDark} toggleTheme={toggle} />
          <main>
            <Hero />
            <Suspense fallback={<div className="h-32" />}>
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <ScrollToTop />
        </>
      )}
    </div>
  );
}
