import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Coffee, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContactModal?: (prefilledSubject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenContactModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Main Header Bar */}
      <div className={`bg-[#2B1713] text-white transition-all duration-300 ${scrolled ? 'shadow-2xl py-3' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none"
          >
            <div className="h-12 w-auto max-w-[150px] sm:max-w-[180px] rounded-xl overflow-hidden bg-[#FAF3EB] p-1 shadow-md border border-amber-200/40 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img 
                src={COMPANY_INFO.logoImage} 
                alt="Chocolate Sarayi Logo"
                referrerPolicy="no-referrer"
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <span className="font-playfair text-xl sm:text-2xl font-bold tracking-tight text-white block leading-none">
                Chocolate Sarayı
              </span>
              <span className="text-xs uppercase tracking-widest text-[#E06A55] font-semibold block mt-1">
                Alger • Garden City
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive 
                      ? 'text-[#E06A55] bg-[#3D221A]/80 font-semibold' 
                      : 'text-[#E8D8C8] hover:text-white hover:bg-[#3D221A]/40'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-[#E06A55] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Call Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2.5 rounded-full bg-[#3D221A] text-[#E8D8C8] hover:text-white hover:bg-[#4E2B21] transition-colors"
              title="Appeler Chocolate Sarayi"
            >
              <Phone className="w-4 h-4 text-[#E06A55]" />
            </a>
            
            <button
              onClick={() => {
                if (onOpenContactModal) {
                  onOpenContactModal('Demande générale & Réservation');
                } else {
                  handleNavClick('contact');
                }
              }}
              className="bg-[#E06A55] hover:bg-[#C8553D] text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg flex items-center space-x-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Contact & Réservations</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2 rounded-full bg-[#E06A55] text-white"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#E8D8C8] hover:text-white hover:bg-[#3D221A] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Signature Melting Chocolate Bottom Dripping Wave SVG */}
      <div className="w-full overflow-hidden leading-none z-10 -mt-0.5 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-8 sm:h-12 text-[#2B1713] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,65 C650,160 900,10 1200,80 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#2B1713] border-b border-[#3D221A] shadow-2xl z-50 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  currentPage === item.id 
                    ? 'bg-[#E06A55] text-white font-semibold' 
                    : 'text-[#E8D8C8] hover:bg-[#3D221A]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-[#3D221A] flex flex-col space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#3D221A] text-white font-medium"
              >
                <Phone className="w-4 h-4 text-[#E06A55]" />
                <span>Appeler le {COMPANY_INFO.formattedPhone}</span>
              </a>

              <button
                onClick={() => {
                  handleNavClick('contact');
                }}
                className="w-full py-3 rounded-xl bg-[#E06A55] text-white font-semibold flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Formulaire de Contact</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
