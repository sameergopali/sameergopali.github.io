import React from 'react';
import {Home, FileText, ArrowUp } from 'lucide-react';

import AboutMeSection from '../components/AboutMeSection';
import BeyondTechSection from '../components/BeyondTechSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ProfessionalExperienceSection from '../components/ProfessionalExperienceSection';
import ScrollToTopButton from '../components/ScrollToTopButton';
import SkillsSection from '../components/SkillsSection';
import SocialLinks from '../components/SocialLinks';

const HomePage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-8">
      <main className="mx-auto max-w-6xl px-4">
        <HeroSection />
        <AboutMeSection />
        <ProfessionalExperienceSection />
        <SkillsSection />
        <BeyondTechSection />
        <SocialLinks />
        <ScrollToTopButton onClick={scrollToTop} />
       
      </main>
    <Footer />
    </div>
  );
};

export default HomePage;