
import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-900/40">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Fluxos de Trabalho <span className="text-green-400 neon-text">Essenciais</span></h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
            Processos claros e justos para garantir a melhor experiência, mesmo quando as coisas não saem como o planejado.
          </p>
        </AnimatedSection>
        <div className="bg-black/30 p-8 md:p-12 rounded-lg border border-green-900 neon-box">
            <AnimatedSection>
                <h3 className="text-3xl font-bold text-center mb-8">E se algo der <span className="text-green-400">errado</span>?</h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 text-center items-start">
                <AnimatedSection delay={200}>
                    <div className="p-6">
                        <div className="text-5xl mb-4">😥</div>
                        <h4 className="font-bold text-xl mb-2">Abertura de Disputa</h4>
                        <p className="text-gray-400">O comprador ou vendedor inicia uma disputa se houver um problema com a transação.</p>
                    </div>
                </AnimatedSection>
                <div className="flex justify-center items-center h-full">
                    <AnimatedSection delay={400}>
                        <div className="text-green-400 font-black text-4xl hidden md:block">→</div>
                        <div className="text-green-400 font-black text-4xl rotate-90 md:hidden">↓</div>
                    </AnimatedSection>
                </div>
                <AnimatedSection delay={600}>
                    <div className="p-6">
                        <div className="text-5xl mb-4">🛡️</div>
                        <h4 className="font-bold text-xl mb-2">Intervenção do Admin</h4>
                        <p className="text-gray-400">Um administrador analisa o chat, as provas e medeia a situação de forma neutra.</p>
                    </div>
                </AnimatedSection>
                <div className="md:col-span-3 flex justify-center items-center h-full">
                     <AnimatedSection delay={800}>
                        <div className="text-green-400 font-black text-4xl rotate-90 md:rotate-0">↓</div>
                     </AnimatedSection>
                </div>
                <AnimatedSection delay={1000} className="md:col-span-3">
                    <div className="p-6 mt-0 md:-mt-8">
                        <div className="text-5xl mb-4">⚖️</div>
                        <h4 className="font-bold text-xl mb-2">Resolução Justa</h4>
                        <p className="text-gray-400">A decisão é tomada: ou o comprador é reembolsado ou o vendedor recebe o pagamento.</p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </div>
    </section>
  );
};
