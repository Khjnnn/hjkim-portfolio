import React from 'react';
import Header from './components/Header';
import About from './components/about';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/footer';
import Skills from './components/Skills';  
import './styles.css';

function App() {
    return (
        <div className="font-sans">
            <Header />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;