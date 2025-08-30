
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { WarningIcon } from './icons';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">O Lado Sombrio da <span className="text-green-400 neon-text">Revenda</span></h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">
            Comprar ingressos de terceiros é um campo minado de golpes e frustrações. Tanto compradores quanto vendedores correm riscos.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection delay={200}>
            <div className="bg-gray-900/50 p-8 rounded-lg border border-red-500/50 h-full">
              <WarningIcon className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-red-400">Risco do Comprador</h3>
              <p className="text-gray-300">
                Pagar por um ingresso e nunca recebê-lo, ou pior, receber um ingresso falso e ser barrado na entrada do evento dos seus sonhos.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div className="bg-gray-900/50 p-8 rounded-lg border border-red-500/50 h-full">
              <WarningIcon className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-red-400">Risco do Vendedor</h3>
              <p className="text-gray-300">
                Transferir o ingresso de boa fé e o comprador simplesmente desaparecer sem realizar o pagamento, deixando você no prejuízo.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
