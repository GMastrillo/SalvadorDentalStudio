import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const ServicesSection = () => {
  const { services } = mockData;

  const handleCTAClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar uma avaliação dental.");
    const whatsapp = mockData.contact.whatsapp;
    window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {services.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.items.map((service) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
            >
              <CardContent className="p-6 text-center">
                {/* Service Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                  <img 
                    src={service.icon} 
                    alt={service.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                </div>
                
                {/* Service Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {service.name}
                </h3>
                
                {/* Service Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            onClick={handleCTAClick}
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {services.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;