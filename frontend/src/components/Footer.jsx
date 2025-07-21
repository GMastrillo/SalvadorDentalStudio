import React from 'react';
import { mockData } from '../mock';

const Footer = () => {
  const { brand, contact } = mockData;

  const handleSocialClick = (platform, handle) => {
    let url = '';
    switch (platform) {
      case 'instagram':
        url = `https://instagram.com/${handle.replace('@', '')}`;
        break;
      case 'facebook':
        url = `https://facebook.com/${handle}`;
        break;
      case 'whatsapp':
        const message = encodeURIComponent("Olá! Vim do site e gostaria de mais informações.");
        url = `https://wa.me/${contact.whatsapp}?text=${message}`;
        break;
      default:
        break;
    }
    if (url) window.open(url, '_blank');
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">{brand.name}</h3>
                <p className="text-gray-400 text-sm">Dental Studio</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando sorrisos com tecnologia de ponta e atendimento humanizado em Salvador.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-yellow-400 font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">{contact.phone}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">{contact.email}</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-yellow-400 font-bold text-lg mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">{contact.operatingHours.weekdays}</p>
              <p className="text-gray-300 text-sm">{contact.operatingHours.saturday}</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-yellow-400 font-bold text-lg mb-4">Nos Envie uma Mensagem</h4>
            <div className="space-y-3">
              <button
                onClick={() => handleSocialClick('whatsapp', contact.whatsapp)}
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors w-full text-left"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-xs text-gray-400">{contact.phone}</p>
                </div>
              </button>

              <button
                onClick={() => handleSocialClick('instagram', contact.instagram)}
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors w-full text-left"
              >
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.019.369c-.526.18-.973.421-1.417.864-.445.444-.685.891-.865 1.417C2.572 3.112 2.45 3.686 2.416 4.633 2.382 5.581 2.369 5.988 2.369 9.609c0 3.621.013 4.028.048 4.976.034.947.156 1.521.321 2.047.18.526.42.973.864 1.417.444.445.891.685 1.417.865.526.165 1.1.287 2.047.321.948.035 1.355.048 4.976.048 3.621 0 4.028-.013 4.976-.048.947-.034 1.521-.156 2.047-.321a3.917 3.917 0 001.417-.864c.445-.444.685-.891.865-1.417.165-.526.287-1.1.321-2.047.035-.948.048-1.355.048-4.976 0-3.621-.013-4.028-.048-4.976-.034-.947-.156-1.521-.321-2.047a3.917 3.917 0 00-.864-1.417A3.917 3.917 0 0018.983.369C18.457.204 17.883.082 16.936.048 15.988.013 15.581 0 11.96 0h.057z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-xs text-gray-400">{contact.instagram}</p>
                </div>
              </button>

              <button
                onClick={() => handleSocialClick('facebook', contact.facebook)}
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors w-full text-left"
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Facebook</p>
                  <p className="text-xs text-gray-400">/{contact.facebook}</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex items-start space-x-3 mb-6">
            <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {contact.address}
              </p>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-xs mb-2">
            {contact.technicalResponsible}
          </p>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;