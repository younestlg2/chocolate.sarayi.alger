import React, { useState } from 'react';
import { Coffee, Search, Check, ArrowRight, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../data/company';
import { PageId, ServiceItem } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (prefilledSubject?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenContactModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = SERVICES_LIST.filter((srv) => {
    const matchesSearch = srv.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          srv.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || srv.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E06A55]/10 text-[#E06A55]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Nos 20 Services & Prestations</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-playfair font-bold text-[#2B1713]">
          Une Offre Complète pour Toutes vos Envies
        </h1>
        <p className="text-base text-[#6B5048]">
          Explorez l'ensemble de nos produits gourmands, nos formules de restauration, nos espaces de travail et nos prestations événementielles sur mesure à Garden City.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-[#E8D8C8] space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8A7868] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher un service ou produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#FAF3EB] border border-[#E8D8C8] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E06A55]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {[
              { id: 'all', label: `Tous (${SERVICES_LIST.length})` },
              { id: 'boissons', label: 'Cafés & Boissons' },
              { id: 'desserts', label: 'Desserts & Pâtisseries' },
              { id: 'formules', label: 'Formules & Brunch' },
              { id: 'prestations', label: 'Événements & Services' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#2B1713] text-white shadow'
                    : 'bg-[#FAF3EB] text-[#6B5048] hover:bg-[#F4EAD9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Services Grid (20 Services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            className="bg-white rounded-3xl p-6 border border-[#E8D8C8] hover:border-[#E06A55] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {service.tag && (
              <span className="absolute top-4 right-4 bg-[#E06A55] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                {service.tag}
              </span>
            )}

            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF3EB] group-hover:bg-[#E06A55] text-[#E06A55] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8A7868]">
                    Service #{index + 1}
                  </span>
                  <h3 className="font-playfair font-bold text-lg text-[#2B1713] group-hover:text-[#E06A55] transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#6B5048] leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="pt-4 border-t border-[#FAF3EB]">
              <button
                onClick={() => onOpenContactModal(`Demande pour: ${service.title}`)}
                className="w-full bg-[#FAF3EB] group-hover:bg-[#E06A55] text-[#2B1713] group-hover:text-white py-2.5 rounded-2xl text-xs font-semibold transition-all flex items-center justify-center space-x-2"
              >
                <span>Faire une demande</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl p-8 border border-[#E8D8C8]">
          <p className="text-sm text-[#6B5048]">Aucun service ne correspond à votre recherche "{searchTerm}".</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
            className="mt-3 text-xs font-bold text-[#E06A55] underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="bg-[#2B1713] text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-playfair font-bold text-white">
            Besoin d'un service sur mesure ou d'un événement privé ?
          </h3>
          <p className="text-xs sm:text-sm text-[#C4B2A0]">
            Commandes de gâteaux personnalisés, anniversaires, réunions ou traiteur : nous sommes à votre écoute.
          </p>
        </div>

        <button
          onClick={() => onOpenContactModal('Prestation sur mesure / Événement')}
          className="bg-[#E06A55] hover:bg-[#C8553D] text-white px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider shrink-0 shadow-lg"
        >
          Envoyer votre demande
        </button>
      </div>

    </div>
  );
};
