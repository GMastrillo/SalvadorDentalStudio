import React from 'react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const TeamSection = () => {
  const { team } = mockData;

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {team.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Specialist Card */}
          <div className="order-2 lg:order-1">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <div className="text-center">
                  {/* Doctor Photo */}
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-yellow-400/30">
                    <img 
                      src={team.specialist.photo} 
                      alt={team.specialist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Doctor Info */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {team.specialist.name}
                  </h3>
                  
                  <p className="text-lg text-yellow-600 font-semibold mb-4">
                    {team.specialist.specialty}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {team.specialist.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Description */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Equipe de Especialistas
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {team.teamDescription}
              </p>
              
              {/* Key Points */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Tecnologia de ponta em todos os tratamentos</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Estrutura completa e confortável</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Atendimento humanizado e personalizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;