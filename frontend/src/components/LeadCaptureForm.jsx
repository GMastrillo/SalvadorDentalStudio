import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { mockData } from '../mock';
import { useToast } from '../hooks/use-toast';

const LeadCaptureForm = () => {
  const { leadForm } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    setTimeout(() => {
      // Save to localStorage as mock backend
      const existingLeads = JSON.parse(localStorage.getItem('dentalLeads') || '[]');
      const newLead = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      existingLeads.push(newLead);
      localStorage.setItem('dentalLeads', JSON.stringify(existingLeads));

      // Show success message
      toast({
        title: "Agendamento Solicitado!",
        description: "Em breve entraremos em contato para confirmar sua consulta.",
        duration: 5000,
      });

      // Redirect to WhatsApp
      const message = encodeURIComponent(`Olá! Sou ${formData.nome}, gostaria de agendar uma avaliação dental. Meu WhatsApp: ${formData.whatsapp}, E-mail: ${formData.email}`);
      window.open(`https://wa.me/${mockData.contact.whatsapp}?text=${message}`, '_blank');

      // Reset form
      setFormData({ nome: '', email: '', whatsapp: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="leadform" className="py-20 bg-gradient-to-br from-yellow-50 to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {leadForm.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto"></div>
        </div>

        {/* Form Card */}
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-gray-700 font-semibold">
                    Nome Completo *
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-yellow-500 transition-colors"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-gray-700 font-semibold">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    placeholder="(71) 99999-9999"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-yellow-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-semibold">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-yellow-500 transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-12 py-4 text-lg rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Enviando...' : leadForm.ctaText}
                </Button>
              </div>
            </form>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 text-center mt-6">
              Seus dados estão seguros conosco. Utilizamos suas informações apenas para agendar sua consulta.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadCaptureForm;