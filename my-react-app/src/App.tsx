import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'contact';

function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  const renderPage = () => {
    switch (activePage) {
      case 'about':      return <About />;
      case 'skills':     return <Skills />;
      case 'experience': return <Experience />;
      case 'projects':   return <Projects />;
      case 'contact':    return <Contact />;
      default:           return <Hero onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation activePage={activePage} onNavigate={setActivePage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
