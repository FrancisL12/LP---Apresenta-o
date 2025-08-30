
import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg shadow-green-500/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <h1 className="text-3xl font-black tracking-widest text-green-400 uppercase neon-text">
          RavePass
        </h1>
      </div>
    </header>
  );
};
