
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { LockIcon } from './icons';

const FlowStep: React.FC<{ number: number; title: string; description: string, delay?: number }> = ({ number, title, description, delay = 0 }) => (
    <AnimatedSection delay={delay} className="relative pl-8">
        <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 text-black bg-green-400 rounded-full font-bold text-lg neon-box">
            {number}
        </div>
        <div className="ml-4">
            <h4 className="font-bold text-xl text-green-400">{title}</h4>
            <p className="text-gray-300">{description}</p>
        </div>
    </AnimatedSection>
);

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-900/40">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
            <LockIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">A Nossa Solução: <span className="text-green-400 neon-text">Segurança Total</span></h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">
                Com nosso sistema de custódia (escrow), eliminamos o risco. O dinheiro só é liberado quando ambas as partes estão satisfeitas.
            </p>
        </AnimatedSection>
        <div className="max-w-2xl mx-auto text-left space-y-10 relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-900"></div>
            <FlowStep number={1} title="Comprador Paga" description="O pagamento é realizado na plataforma e fica retido com segurança." delay={200} />
            <FlowStep number={2} title="Vendedor Transfere" description="Notificado do pagamento, o vendedor envia o ingresso para o comprador." delay={400} />
            <FlowStep number={3} title="Comprador Confirma" description="O comprador valida o ingresso e confirma o recebimento na plataforma." delay={600} />
            <FlowStep number={4} title="Pagamento Liberado" description="A plataforma libera o valor para a carteira do vendedor. Transação concluída!" delay={800} />
        </div>
      </div>
    </section>
  );
};
