import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MessageSquare, Calendar } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactSection } from './components/ContactSection';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { PageId } from './types';
import { COMPANY_INFO } from './data/company';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [prefilledSubject, setPrefilledSubject] = useState<string>('Demande de Réservation de Table');

  const handleOpenContactModal = (subject?: string) => {
    if (subject) {
      setPrefilledSubject(subject);
    }
    setContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setContactModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF3EB] text-[#2B1713] font-outfit antialiased selection:bg-[#E06A55] selection:text-white">
      
      {/* Header with signature melting chocolate dripping wave */}
      <Header 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenContactModal={handleOpenContactModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {currentPage === 'home' && (
              <HomePage 
                onNavigate={setCurrentPage} 
                onOpenContactModal={handleOpenContactModal}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage 
                onNavigate={setCurrentPage} 
                onOpenContactModal={handleOpenContactModal}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage 
                onNavigate={setCurrentPage} 
                onOpenContactModal={handleOpenContactModal}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={setCurrentPage}
        onOpenContactModal={handleOpenContactModal}
      />

      {/* Floating Action Button (Quick Phone Call / WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Bonjour%20Chocolate%20Sarayi%20Alger%2C%20je%20souhaite%20des%20informations.`}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group relative"
          title="Discuter sur WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-14 bg-[#2B1713] text-white text-[11px] px-3 py-1 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp Direct
          </span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="w-12 h-12 rounded-full bg-[#E06A55] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group relative"
          title="Appeler 0562 41 63 99"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-[#2B1713] text-white text-[11px] px-3 py-1 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Appeler 0562 41 63 99
          </span>
        </a>
      </div>

      {/* Quick Contact Form Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-[#FAF3EB] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-[#E8D8C8]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseContactModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#3D221A] text-[#E8D8C8] hover:text-white hover:bg-[#E06A55] transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            <ContactSection 
              prefilledSubject={prefilledSubject}
              isEmbeddedInModal={true}
              onCloseModal={handleCloseContactModal}
            />
          </div>
        </div>
      )}

    </div>
  );
}
