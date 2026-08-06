import React from 'react';
import { Phone, MapPin, Clock, Mail, Coffee, Heart, ArrowUp, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal?: (prefilledSubject?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContactModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1C0E0B] text-[#E8D8C8] pt-12 pb-8 overflow-hidden border-t-4 border-[#E06A55]">
      {/* Wave Transition Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#3D221A]">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-auto max-w-[150px] rounded-xl overflow-hidden bg-[#FAF3EB] p-1 shadow-md border border-amber-200/40 flex items-center justify-center">
                <img 
                  src={COMPANY_INFO.logoImage} 
                  alt="Chocolate Sarayi Logo"
                  referrerPolicy="no-referrer"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <span className="font-playfair text-xl font-bold text-white block">
                  Chocolate Sarayı
                </span>
                <span className="text-xs uppercase tracking-wider text-[#E06A55]">
                  Alger • Garden City
                </span>
              </div>
            </div>

            <p className="text-sm text-[#C4B2A0] leading-relaxed">
              Coffee shop moderne et chaleureux spécialisé dans les cafés de haute qualité, les desserts faits maison au pur chocolat belge et les pâtisseries artisanales.
            </p>

            <div className="pt-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center space-x-2 bg-[#3D221A] hover:bg-[#E06A55] text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>{COMPANY_INFO.formattedPhone}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-playfair font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#E06A55] inline-block mr-2"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['home', 'about', 'services', 'contact'].map((pId) => {
                const labels: Record<string, string> = {
                  home: 'Accueil',
                  about: 'À Propos',
                  services: 'Services & Menu',
                  contact: 'Contact & Localisation'
                };
                return (
                  <li key={pId}>
                    <button
                      onClick={() => {
                        onNavigate(pId as PageId);
                        scrollToTop();
                      }}
                      className="text-[#C4B2A0] hover:text-[#E06A55] transition-colors flex items-center"
                    >
                      <span className="text-xs text-[#E06A55] mr-2">›</span>
                      {labels[pId]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Key Services & Specialties */}
          <div>
            <h4 className="text-white font-playfair font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#E06A55] inline-block mr-2"></span>
              Spécialités
            </h4>
            <ul className="space-y-2 text-sm text-[#C4B2A0]">
              <li className="flex items-center"><span className="text-[#E06A55] mr-2">•</span>Café de Spécialité & Lattes</li>
              <li className="flex items-center"><span className="text-[#E06A55] mr-2">•</span>Crêpes & Waffles au Chocolat Belge</li>
              <li className="flex items-center"><span className="text-[#E06A55] mr-2">•</span>Cheesecakes & Pâtisseries Maison</li>
              <li className="flex items-center"><span className="text-[#E06A55] mr-2">•</span>Formules Petit-Déjeuner & Brunch</li>
              <li className="flex items-center"><span className="text-[#E06A55] mr-2">•</span>Gâteaux Personnalisés & Anniversaires</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3 text-sm">
            <h4 className="text-white font-playfair font-bold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#E06A55] inline-block mr-2"></span>
              Coordonnées
            </h4>

            <div className="flex items-start space-x-3 text-[#C4B2A0]">
              <MapPin className="w-4 h-4 text-[#E06A55] shrink-0 mt-1" />
              <div>
                <strong className="text-white block">Adresse</strong>
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-[#C4B2A0]">
              <Clock className="w-4 h-4 text-[#E06A55] shrink-0 mt-1" />
              <div>
                <strong className="text-white block">Horaires</strong>
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  if (onOpenContactModal) {
                    onOpenContactModal('Renseignement rapide');
                  } else {
                    onNavigate('contact');
                    scrollToTop();
                  }
                }}
                className="w-full bg-[#E06A55] hover:bg-[#C8553D] text-white py-2.5 px-4 rounded-xl font-medium text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Formulaire de Contact</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#8A7868]">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits réservés.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="flex items-center">
              Créé avec <Heart className="w-3 h-3 text-[#E06A55] mx-1 fill-current" /> pour la gourmandise à Alger
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#3D221A] text-white hover:bg-[#E06A55] transition-colors"
              title="Haut de page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
