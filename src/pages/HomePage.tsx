import React, { useState } from 'react';
import { Coffee, ArrowRight, Star, Heart, Check, Sparkles, MapPin, ShieldCheck, Wifi, Users, Clock, Utensils, MessageSquare, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, DESSERT_HIGHLIGHTS, REVIEWS, SERVICES_LIST } from '../data/company';
import { GoogleReviews } from '../components/GoogleReviews';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (prefilledSubject?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenContactModal }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'desserts' | 'boissons'>('all');

  const filteredHighlights = DESSERT_HIGHLIGHTS.filter(item => {
    if (activeCategoryFilter === 'desserts') return item.category !== 'Café';
    if (activeCategoryFilter === 'boissons') return item.category === 'Café';
    return true;
  });

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* HERO SECTION Inspired by Rêverie Design with Dripping Chocolate Aesthetic */}
      <section className="relative bg-[#FAF3EB] pt-6 sm:pt-10 pb-16 overflow-hidden">
        
        {/* Soft Background Accents */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#F4EAD9]/80 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center space-x-2 bg-[#2B1713] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Coffee Shop & Pâtisserie Premium • Garden City, Alger</span>
              </div>

              <div className="space-y-2">
                <span className="font-caveat text-3xl sm:text-4xl text-[#E06A55] font-bold block transform -rotate-2">
                  Fondant de Plaisir & Pure Gourmandise
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-[#2B1713] leading-[1.15] tracking-tight">
                  L'Art du Chocolat Belge & du Café de Spécialité.
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#6B5048] max-w-2xl leading-relaxed">
                Plongez dans l'univers chaleureux de <strong>Chocolate Sarayi Alger</strong>. Desserts faits maison, pâtisseries artisanales, crêpes et gaufres croustillantes nappées de chocolat pur, accompagnés de nos cafés grands crus dans un cadre scandinave apaisant.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenContactModal('Demande de Réservation de Table')}
                  className="bg-[#E06A55] hover:bg-[#C8553D] text-white px-7 py-3.5 rounded-full font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2.5 transform hover:-translate-y-0.5"
                >
                  <span>Réserver / Nous Contacter</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="bg-[#3D221A] hover:bg-[#2B1713] text-[#E8D8C8] hover:text-white px-6 py-3.5 rounded-full font-medium text-sm transition-colors border border-[#6B5048]/30 flex items-center space-x-2"
                >
                  <Coffee className="w-4 h-4 text-[#E06A55]" />
                  <span>Découvrir nos 20 Services</span>
                </button>
              </div>

              {/* Trust Features Pill List */}
              <div className="pt-6 border-t border-[#E8D8C8] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-[#523A33]">
                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded-full bg-[#E06A55]/15 text-[#E06A55]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Chocolat 100% Belge</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded-full bg-[#E06A55]/15 text-[#E06A55]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Cadre Calme & Familial</span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="p-1 rounded-full bg-[#E06A55]/15 text-[#E06A55]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Wi-Fi Haut Débit Gratuit</span>
                </div>
              </div>

            </div>

            {/* Right Interactive Visual Hero (Inspired by image with handwritten notes!) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Card Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                  <img
                    src={COMPANY_INFO.heroImage}
                    alt="Chocolate Sarayi Desserts & Coffee"
                    referrerPolicy="no-referrer"
                    className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1713]/80 via-transparent to-transparent opacity-80" />

                  {/* Bottom Caption inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-2xl bg-[#2B1713]/80 backdrop-blur-md border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-[#E06A55] font-bold uppercase tracking-wider block">
                          Spécialité Maison
                        </span>
                        <h3 className="font-playfair font-bold text-lg text-white">
                          Crêpes & Lattes Chocolatés
                        </h3>
                      </div>
                      <span className="bg-[#E06A55] text-white text-xs px-2.5 py-1 rounded-full font-bold">
                        100% Fait Maison
                      </span>
                    </div>
                  </div>
                </div>

                {/* Handwritten Annotation Callout 1 (Top Right) */}
                <div className="absolute -top-4 -right-2 sm:-right-6 bg-amber-100 text-[#2B1713] p-3 rounded-2xl shadow-xl border border-amber-200 transform rotate-3 animate-float max-w-[170px] hidden sm:block">
                  <span className="font-caveat text-lg leading-tight font-bold text-[#C85236] block">
                    ✨ Trois chocolats fondants !
                  </span>
                  <span className="text-[10px] text-[#6B5048]">Pur chocolat Belge de couverture</span>
                </div>

                {/* Handwritten Annotation Callout 2 (Bottom Left) */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 text-[#2B1713] p-3.5 rounded-2xl shadow-2xl border border-[#E8D8C8] transform -rotate-3 max-w-[200px] hidden sm:block">
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-4 h-4 text-[#E06A55]" />
                    <span className="font-caveat text-lg font-bold text-[#2B1713]">
                      Café Torréfié Frais
                    </span>
                  </div>
                  <p className="text-[10px] text-[#6B5048] mt-0.5">Espresso & Cappuccinos pur Arabica</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* STATS & HIGHLIGHTS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B1713] text-white rounded-3xl p-8 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#3D221A]">
          <div className="p-3">
            <span className="text-3xl sm:text-4xl font-playfair font-bold text-[#E06A55] block">20+</span>
            <span className="text-xs uppercase tracking-wider text-[#C4B2A0] font-medium block mt-1">Services & Produits</span>
          </div>

          <div className="p-3">
            <span className="text-3xl sm:text-4xl font-playfair font-bold text-amber-400 block">100%</span>
            <span className="text-xs uppercase tracking-wider text-[#C4B2A0] font-medium block mt-1">Fait Maison & Artisanale</span>
          </div>

          <div className="p-3">
            <span className="text-3xl sm:text-4xl font-playfair font-bold text-[#E06A55] block">Garden City</span>
            <span className="text-xs uppercase tracking-wider text-[#C4B2A0] font-medium block mt-1">Alger • Emplacement Privilégié</span>
          </div>

          <div className="p-3">
            <span className="text-3xl sm:text-4xl font-playfair font-bold text-emerald-400 block">7j/7</span>
            <span className="text-xs uppercase tracking-wider text-[#C4B2A0] font-medium block mt-1">De 08:00 à 23:30</span>
          </div>
        </div>
      </section>


      {/* FEATURED DELIGHTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E06A55]">
              Nos Spécialités Incontournables
            </span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-[#2B1713] mt-1">
              Des Créations Gourmandes Préparées avec Passion
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex bg-[#F4EAD9] p-1.5 rounded-full self-start md:self-auto">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategoryFilter === 'all' ? 'bg-[#2B1713] text-white shadow' : 'text-[#6B5048]'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setActiveCategoryFilter('desserts')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategoryFilter === 'desserts' ? 'bg-[#2B1713] text-white shadow' : 'text-[#6B5048]'
              }`}
            >
              Desserts & Crêpes
            </button>
            <button
              onClick={() => setActiveCategoryFilter('boissons')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategoryFilter === 'boissons' ? 'bg-[#2B1713] text-white shadow' : 'text-[#6B5048]'
              }`}
            >
              Boissons & Cafés
            </button>
          </div>
        </div>

        {/* Dessert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredHighlights.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E8D8C8] hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#2B1713]/85 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  {item.category}
                </div>
                {item.badge && (
                  <div className="absolute top-3 right-3 bg-[#E06A55] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                    {item.badge}
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-playfair font-bold text-lg text-[#2B1713] group-hover:text-[#E06A55] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#6B5048] mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Ingredients list */}
                <div className="pt-2 border-t border-[#FAF3EB] flex flex-wrap gap-1.5">
                  {item.ingredients.map((ing, idx) => (
                    <span key={idx} className="bg-[#FAF3EB] text-[#523A33] text-[10px] px-2 py-0.5 rounded-md font-medium">
                      {ing}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenContactModal(`Renseignement / Réservation: ${item.name}`)}
                  className="w-full bg-[#FAF3EB] hover:bg-[#E06A55] text-[#2B1713] hover:text-white py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center space-x-1.5 group-hover:bg-[#E06A55] group-hover:text-white"
                >
                  <span>Demander cette spécialité</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>


      {/* AMBIANCE & EXPERIENCE SECTION */}
      <section className="bg-[#F4EAD9]/60 py-16 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E06A55]">
              L'Expérience & Le Cadre
            </span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-[#2B1713] leading-tight">
              Un Havre de Paix Scandinave & Chaleureux au Cœur d'Alger
            </h2>
            <p className="text-sm sm:text-base text-[#6B5048] leading-relaxed">
              Pensé pour vous offrir un moment de détente absolue, <strong>Chocolate Sarayi Alger</strong> propose une décoration moderne et raffinée aux inspirations scandinaves. Meubles en bois massif, plantes vertes apaisantes, éclairage tamisé, tons chauds (crème, caramel, vert sauge) et grandes baies vitrées.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8D8C8]">
                <div className="p-2 w-8 h-8 rounded-xl bg-[#E06A55]/10 text-[#E06A55] mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-playfair font-bold text-sm text-[#2B1713]">Espoir Familial & Amis</h4>
                <p className="text-xs text-[#8A7868] mt-1">Espaces confortables avec banquettes douces adaptées aux familles et petits groupes.</p>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8D8C8]">
                <div className="p-2 w-8 h-8 rounded-xl bg-[#E06A55]/10 text-[#E06A55] mb-2">
                  <Wifi className="w-4 h-4" />
                </div>
                <h4 className="font-playfair font-bold text-sm text-[#2B1713]">Télétravail & Études</h4>
                <p className="text-xs text-[#8A7868] mt-1">Wi-Fi fibre gratuit, ambiance calme et prises électriques à disposition.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="bg-[#2B1713] hover:bg-[#3D221A] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center space-x-2"
              >
                <span>En savoir plus sur notre histoire</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img 
                src={COMPANY_INFO.ambianceImage} 
                alt="Chocolate Sarayi Alger Ambiance Intérieur & Desserts" 
                referrerPolicy="no-referrer"
                className="w-full h-[480px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0E0B]/85 via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 bg-[#E06A55] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                <span>Atmosphère Authentique</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-widest block">
                  Chocolate Sarayı • Garden City
                </span>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white leading-tight">
                  Chocolats Belges, Cafés Spécialité & Cadre Chaleureux
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GOOGLE REVIEWS SECTION */}
      <GoogleReviews />

    </div>
  );
};
