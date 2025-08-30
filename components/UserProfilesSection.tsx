
import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { BuyerIcon, SellerIcon } from './icons';

const ProfileCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}> = ({ icon, title, description, features, delay=0 }) => (
  <AnimatedSection delay={delay}>
    <div className="bg-gray-900/50 p-8 rounded-lg border border-green-500/20 neon-border h-full flex flex-col">
      <div className="mx-auto mb-4 text-green-400">{icon}</div>
      <h3 className="text-2xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-400 text-center mb-6 flex-grow">{description}</p>
      <ul className="space-y-2 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-400 mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </AnimatedSection>
);

export const UserProfilesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Feito para <span className="text-green-400 neon-text">Você</span></h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
            Seja você quem compra ou quem vende, a RavePass garante a sua tranquilidade.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProfileCard
            icon={<BuyerIcon className="w-16 h-16" />}
            title="O Comprador"
            description="Encontre o ingresso para sua próxima rave com total segurança e confiança."
            features={["Navegue e descubra eventos", "Compre com pagamento protegido", "Converse com o vendedor", "Avalie a sua experiência"]}
            delay={200}
          />
          <ProfileCard
            icon={<SellerIcon className="w-16 h-16" />}
            title="O Vendedor"
            description="Venda seu ingresso extra de forma rápida, segura e sem medo de calotes."
            features={["Verificação de identidade", "Anuncie seus ingressos", "Gerencie suas vendas", "Receba o pagamento na hora"]}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};
