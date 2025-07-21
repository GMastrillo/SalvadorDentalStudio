import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Header = () => {
  const { brand, contact } = mockData;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Vim do site e gostaria de agendar uma avaliação dental.");
    window.open(`https://wa.me/${contact.whatsapp}?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">{brand.name}</h1>
              <p className="text-gray-400 text-xs">Dental Studio</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
            >
              Tratamentos
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
            >
              Especialista
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;