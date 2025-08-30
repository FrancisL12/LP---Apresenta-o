
import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { UserProfilesSection } from './components/UserProfilesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <UserProfilesSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
