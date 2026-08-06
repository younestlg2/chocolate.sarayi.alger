import React from 'react';
import { Coffee, Heart, Sparkles, Check, Users, MapPin, Clock, Phone, Award, Shield, Wifi } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenContactModal: (prefilledSubject?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContactModal }) => {
  return (
    <div className="space-y-16 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E06A55]/10 text-[#E06A55]">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span>Notre Histoire & Notre Passion</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-playfair font-bold text-[#2B1713]">
          À Propos de Chocolate Sarayi Alger
        </h1>
        <p className="text-base text-[#6B5048] leading-relaxed">
          {COMPANY_INFO.description}
        </p>
      </div>

      {/* Main Story & Ambiance Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <img 
              src={COMPANY_INFO.ambianceImage} 
              alt="Interieur Chocolate Sarayi Alger" 
              referrerPolicy="no-referrer"
              className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#2B1713] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-[#3D221A]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E06A55] block">
              Cadre Scandinave
            </span>
            <p className="text-xs text-[#E8D8C8] mt-1">
              Bois noble, plantes vertes, tons crème et caramel pour une sérénité totale.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E06A55]">
            Notre Philosophie
          </span>
          <h2 className="text-3xl font-playfair font-bold text-[#2B1713]">
            Un Cadre Calme, Moderne et Convivial à Garden City
          </h2>
          
          <p className="text-sm text-[#6B5048] leading-relaxed">
            {COMPANY_INFO.longDescription}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start space-x-3">
              <div className="p-1.5 bg-[#E06A55] text-white rounded-full mt-0.5 shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#2B1713]">Ingrédients d'Exception</h4>
                <p className="text-xs text-[#8A7868]">Chocolat Belge d'origine, beurre pur, fruits frais de saison et grains pur arabica.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-1.5 bg-[#E06A55] text-white rounded-full mt-0.5 shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#2B1713]">Adapté à Tous vos Moments</h4>
                <p className="text-xs text-[#8A7868]">Retrouvailles en famille, rendez-vous d'affaires, révisions d'examens ou pause gourmande.</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="p-1.5 bg-[#E06A55] text-white rounded-full mt-0.5 shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#2B1713]">Service Attentionné</h4>
                <p className="text-xs text-[#8A7868]">Une équipe dynamique, souriante et dédiée à votre satisfaction absolue.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onOpenContactModal('Demande d\'information générale')}
              className="bg-[#E06A55] hover:bg-[#C8553D] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Contactez-nous
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-[#2B1713] hover:bg-[#3D221A] text-white px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.formattedPhone}</span>
            </a>
          </div>
        </div>

      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        <div className="bg-white p-6 rounded-3xl border border-[#E8D8C8] shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF3EB] text-[#E06A55] flex items-center justify-center">
            <Coffee className="w-6 h-6" />
          </div>
          <h3 className="font-playfair font-bold text-lg text-[#2B1713]">Café de Spécialité</h3>
          <p className="text-xs text-[#6B5048] leading-relaxed">
            Moulus à la demande pour préserver tous les huiles essentielles et arômes délicats.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E8D8C8] shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF3EB] text-[#E06A55] flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-playfair font-bold text-lg text-[#2B1713]">Pur Chocolat Belge</h3>
          <p className="text-xs text-[#6B5048] leading-relaxed">
            Sans huile de palme ajoutée. Du vrai chocolat fondant noir, lait et blanc.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E8D8C8] shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF3EB] text-[#E06A55] flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-playfair font-bold text-lg text-[#2B1713]">Sérénité & Confort</h3>
          <p className="text-xs text-[#6B5048] leading-relaxed">
            Espaces spacieux avec banquettes molletonnées pour préserver l'intimité de chaque table.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#E8D8C8] shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF3EB] text-[#E06A55] flex items-center justify-center">
            <Wifi className="w-6 h-6" />
          </div>
          <h3 className="font-playfair font-bold text-lg text-[#2B1713]">Espace Connecté</h3>
          <p className="text-xs text-[#6B5048] leading-relaxed">
            Wi-Fi gratuit très haut débit et prises électriques pour travailler en toute sérénité.
          </p>
        </div>
      </div>

      {/* Call to Contact Section */}
      <div className="bg-[#2B1713] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xl">
        <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-white">
          Venez nous rendre visite à Garden City, Alger
        </h3>
        <p className="text-sm text-[#C4B2A0] max-w-2xl mx-auto">
          Ouvert tous les jours de 08:00 à 23:30. Notre équipe est impatiente de vous recevoir !
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#E06A55] hover:bg-[#C8553D] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
          >
            Accéder à la page de Contact
          </button>
        </div>
      </div>

    </div>
  );
};
