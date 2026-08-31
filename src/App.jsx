import React, { useState, useEffect } from 'react';
import { useLanguage } from './contexts/LanguageContext.jsx';

import './styles/variables.css';
import './styles/global.css';
import './styles/responsive.css';
import './styles/animations.css';

import { LoadingScreen } from './components/ui/LoadingScreen';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Certifications } from './components/Certifications/Certifications';
import { Process } from './components/Process/Process';
import { Philosophy } from './components/Philosophy/Philosophy';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export function App() {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (loading) return;
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-active');
      });
    };
    const observer = new IntersectionObserver(observerCallback, { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.1 });
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
    return () => revealElements.forEach((el) => observer.unobserve(el));
  }, [loading]);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <div className="app-main-wrapper">
          <CustomCursor />
          <Navbar />
          <main id="main-content">
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Process />
            <Philosophy />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
