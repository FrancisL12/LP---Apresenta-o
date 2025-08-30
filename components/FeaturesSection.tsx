
import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const FeatureCard: React.FC<{ title: string; description: string; delay?: number, imageUrl: string }> = ({ title, description, delay = 0, imageUrl }) => (
    <AnimatedSection delay={delay}>
        <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-green-500/20 neon-border h-full group">
            <div className="overflow-hidden h-48">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-green-400">{title}</h3>
                <p className="text-gray-300 mt-2">{description}</p>
            </div>
        </div>
    </AnimatedSection>
);


export const FeaturesSection: React.FC = () => {
    const features = [
        {
            title: "Página Inicial Dinâmica",
            description: "Descubra eventos com banners e uma listagem clara de ingressos disponíveis.",
            imageUrl: "https://picsum.photos/seed/rave1/400/300"
        },
        {
            title: "Detalhes do Ingresso",
            description: "Todas as informações que você precisa, incluindo detalhes do vendedor e sua reputação.",
            imageUrl: "https://picsum.photos/seed/rave2/400/300"
        },
        {
            title: "Chat Seguro",
            description: "Converse diretamente com a outra parte para combinar detalhes da transferência.",
            imageUrl: "https://picsum.photos/seed/rave3/400/300"
        },
        {
            title: "Carteira Digital",
            description: "Gerencie seu saldo, adicione fundos e solicite saques com facilidade.",
            imageUrl: "https://picsum.photos/seed/rave4/400/300"
        },
        {
            title: "Sistema de Reputação",
            description: "Avaliações e comentários ajudam a construir uma comunidade confiável.",
            imageUrl: "https://picsum.photos/seed/rave5/400/300"
        },
    ]

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Tudo que Você <span className="text-green-400 neon-text">Precisa</span></h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
            Ferramentas criadas para tornar sua experiência simples, rápida e 100% segura.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <FeatureCard 
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    imageUrl={feature.imageUrl}
                    delay={index * 150}
                />
            ))}
        </div>
      </div>
    </section>
  );
};
