
import React from 'react';
import { ArrowDownIcon } from './icons';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative bg-black p-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=5')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black to-black"></div>
        
        <div className="z-10 flex flex-col items-center">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-widest text-white drop-shadow-lg mb-4">
                <span className="text-green-400 neon-text">Rave</span>Pass
            </h2>
            <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl">
                Seu ingresso para a próxima rave, com <span className="font-semibold text-green-400">segurança</span> e sem perrengue.
            </p>
        </div>
        <div className="absolute bottom-10 z-10">
            <ArrowDownIcon className="w-8 h-8 text-green-400 animate-bounce" />
        </div>
    </section>
  );
};
