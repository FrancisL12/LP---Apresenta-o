
import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 py-20 text-center">
        <div className="container mx-auto px-6">
            <AnimatedSection>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest text-white drop-shadow-lg mb-4">
                    <span className="text-green-400 neon-text">Rave</span>Pass
                </h2>
                <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl mx-auto">
                    Curta a festa. A gente cuida da segurança.
                </p>
            </AnimatedSection>
             <AnimatedSection delay={200}>
                <p className="text-sm text-gray-500 mt-12">
                    © {new Date().getFullYear()} RavePass. Um projeto conceitual.
                </p>
            </AnimatedSection>
        </div>
    </footer>
  );
};
