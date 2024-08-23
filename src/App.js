// src/App.js
// src/App.js
import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Experience from './components/Experience';
import Skills from './components/Skills';


const App = () => (
    <div>
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <ContactForm />
    </div>
);

export default App;
