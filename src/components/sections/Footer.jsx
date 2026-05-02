import React from 'react';
import { SocialLinks } from '../common/SocialLinks';
import { BiHeart } from 'react-icons/bi';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark py-12 px-4 text-center text-text-secondary border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <SocialLinks className="mb-6 justify-center" />
        <p className="text-sm tracking-wide">
          &copy; {currentYear} Frontend Developer Portfolio by Besufikad Hosiso.
        </p>
        <p className="text-xs mt-2 opacity-70 flex items-center justify-center gap-1">
          Made with passion for simple, modern websites.
        </p>
      </div>
    </footer>
  );
};