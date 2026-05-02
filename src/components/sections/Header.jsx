// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // For hamburger menu


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark border-b border-white/10 py-4 px-4 md:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#home" className="text-2xl font-bold text-text-primary hover:text-primary transition-colors duration-300 tracking-wide">
          Besu<span className="text-primary">Hosiso</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium tracking-wide uppercase text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 p-2 rounded-md text-text-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-2xl transition-opacity duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Aside (Drawer) */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 z-50 w-[85%] max-w-sm bg-dark border-r border-white/10 p-8 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-16">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-text-primary">
              Besu<span className="text-primary">Hosiso</span>
            </a>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-text-secondary hover:text-primary transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>

          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold text-text-secondary hover:text-primary transition-all duration-300 uppercase tracking-tighter hover:translate-x-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-10 border-t border-white/5">
            <p className="text-xs text-text-secondary uppercase tracking-widest opacity-50 font-semibold">
              Let's build something great
            </p>
          </div>
        </div>
      </aside>
    </header>
  );
};