import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, ChevronDown, ChevronUp, Sparkles, Navigation } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { COMPANY_INFO, FAQS } from '../data/company';

export const ContactPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E06A55]/10 text-[#E06A55]">
          <MapPin className="w-3.5 h-3.5" />
          <span>GARDEN CITY, Alger</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-playfair font-bold text-[#2B1713]">
          Contact & Réservations
        </h1>
        <p className="text-base text-[#6B5048]">
          Nous sommes à votre disposition pour toute demande de réservation, commande de gâteau personnalisé, organisation d'anniversaire ou renseignement.
        </p>
      </div>

      {/* Embedded Primary Contact Form Section */}
      <ContactSection />

      {/* Map & Arrival Directions */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8D8C8] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E06A55]">
            Emplacement Privilégié
          </span>
          <h3 className="text-2xl font-playfair font-bold text-[#2B1713]">
            Comment nous trouver à Garden City
          </h3>
          <p className="text-xs sm:text-sm text-[#6B5048] leading-relaxed">
            Situé au cœur de la destination incontournable de <strong>GARDEN CITY à Alger</strong>, Chocolate Sarayi vous accueille dans un cadre moderne, accessible avec parking sécurisé et de grands espaces conviviaux.
          </p>

          <div className="space-y-3 pt-2 text-xs">
            <div className="p-3 bg-[#FAF3EB] rounded-2xl flex items-center justify-between">
              <span className="font-semibold text-[#2B1713]">Adresse exacte</span>
              <span className="text-[#E06A55] font-bold">GARDEN CITY, Alger</span>
            </div>

            <div className="p-3 bg-[#FAF3EB] rounded-2xl flex items-center justify-between">
              <span className="font-semibold text-[#2B1713]">Téléphone</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#E06A55] font-bold underline">
                0562 41 63 99
              </a>
            </div>

            <div className="p-3 bg-[#FAF3EB] rounded-2xl flex items-center justify-between">
              <span className="font-semibold text-[#2B1713]">Horaires</span>
              <span className="text-[#2B1713] font-medium">7j/7 (08h00 - 23h30)</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://maps.google.com/?q=Garden+City+Alger"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-[#2B1713] hover:bg-[#3D221A] text-white px-5 py-2.5 rounded-2xl text-xs font-bold transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-[#E06A55]" />
              <span>Ouvrir dans Google Maps</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#FAF3EB] rounded-2xl p-4 border border-[#E8D8C8] h-80 relative overflow-hidden flex flex-col justify-center items-center text-center">
          <div className="p-4 bg-white rounded-3xl shadow-xl max-w-sm border border-[#E8D8C8] space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#E06A55] text-white flex items-center justify-center mx-auto shadow-md">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-playfair font-bold text-lg text-[#2B1713]">
              Chocolate Sarayi Alger
            </h4>
            <p className="text-xs text-[#6B5048]">
              GARDEN CITY, Alger • Algérie
            </p>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] px-3 py-1 rounded-full font-bold">
              ● Ouvert actuellement (08h00 - 23h30)
            </span>
          </div>
        </div>

      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E06A55]">
            Foire Aux Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-[#2B1713] mt-1">
            Questions Fréquentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#E8D8C8] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center font-playfair font-bold text-sm sm:text-base text-[#2B1713] hover:text-[#E06A55] transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#E06A55]" /> : <ChevronDown className="w-4 h-4 text-[#8A7868]" />}
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-[#6B5048] border-t border-[#FAF3EB] pt-3 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
