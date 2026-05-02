// src/App.jsx
import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-dark text-text-primary transition-colors duration-300">
        <Header />
        <main className="grow pt-20">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};