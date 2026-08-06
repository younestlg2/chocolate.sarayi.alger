import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Calendar, Users, Sparkles, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  prefilledSubject?: string;
  isEmbeddedInModal?: boolean;
  onCloseModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  prefilledSubject = '', 
  isEmbeddedInModal = false,
  onCloseModal 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    subject: prefilledSubject || 'Demande de Réservation de Table',
    guestsCount: '2 personnes',
    preferredDate: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Veuillez renseigner au moins votre nom et votre numéro de téléphone.');
      return;
    }

    setStatus('submitting');
    
    // Simulate server submission
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <section id="contact-form-section" className={`${isEmbeddedInModal ? 'p-2' : 'py-16 bg-[#FAF3EB]'} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!isEmbeddedInModal && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E06A55]/10 text-[#E06A55] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contact & Réservations</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-[#2B1713]">
              Contactez Chocolate Sarayi Alger
            </h2>
            <p className="mt-3 text-base text-[#6B5048]">
              Une question, une réservation de table ou une demande de gâteau sur mesure ? Envoyez-nous un message via notre formulaire ci-dessous ou appelez-nous directement.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordonnées Card */}
          <div className="lg:col-span-5 bg-[#2B1713] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E06A55]/20 rounded-full blur-2xl pointer-events-none" />
            
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E06A55] block mb-2">
              Chocolate Sarayi Garden City
            </span>
            <h3 className="text-2xl font-playfair font-bold text-white mb-6">
              Restons en Contact
            </h3>

            <div className="space-y-6 text-sm">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#3D221A] text-[#E06A55] rounded-2xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#C4B2A0] font-semibold">
                    Téléphone Direct
                  </h4>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-lg font-bold text-white hover:text-[#E06A55] transition-colors block mt-0.5"
                  >
                    {COMPANY_INFO.formattedPhone}
                  </a>
                  <p className="text-xs text-[#9B8878] mt-0.5">
                    Appel rapide pour réservations immédiates
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#3D221A] text-[#E06A55] rounded-2xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#C4B2A0] font-semibold">
                    Adresse
                  </h4>
                  <p className="text-base font-semibold text-white mt-0.5">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-xs text-[#9B8878] mt-0.5">
                    Au cœur du centre commercial & de loisirs Garden City
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#3D221A] text-[#E06A55] rounded-2xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#C4B2A0] font-semibold">
                    Horaires d'Ouverture
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {COMPANY_INFO.hours}
                  </p>
                  <p className="text-xs text-[#9B8878] mt-0.5">
                    7 jours sur 7 (Du Lundi au Dimanche)
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#3D221A] space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full bg-[#E06A55] hover:bg-[#C8553D] text-white py-3 px-4 rounded-2xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Appeler maintenant (0562 41 63 99)</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappPhone}?text=Bonjour%20Chocolate%20Sarayi%20Alger%2C%20je%20souhaite%20des%20informations.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-2xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Écrire sur WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Formulaire de Contact */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#E8D8C8]/60 relative">
            
            {status === 'success' ? (
              <div className="py-8 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-[#2B1713]">
                  Merci ! Votre message a été transmis.
                </h3>
                <p className="text-sm text-[#6B5048] max-w-md mx-auto leading-relaxed">
                  L'équipe de <strong>Chocolate Sarayi Alger</strong> a bien reçu votre demande concernant <span className="text-[#E06A55] font-semibold">"{formData.subject}"</span>.
                  Nous vous recontacterons dans les plus brefs délais au <strong>{formData.phone}</strong>.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        subject: 'Demande de Réservation de Table',
                        guestsCount: '2 personnes',
                        preferredDate: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#FAF3EB] text-[#2B1713] font-medium text-sm hover:bg-[#F4EAD9] transition-colors"
                  >
                    Envoyer une autre demande
                  </button>

                  {onCloseModal && (
                    <button
                      onClick={onCloseModal}
                      className="px-6 py-2.5 rounded-full bg-[#E06A55] text-white font-medium text-sm hover:bg-[#C8553D] transition-colors"
                    >
                      Fermer
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-playfair font-bold text-[#2B1713] flex items-center">
                    <Send className="w-5 h-5 text-[#E06A55] mr-2" />
                    Formulaire de Contact
                  </h3>
                  <p className="text-xs text-[#8A7868] mt-1">
                    Remplissez les champs ci-dessous pour nous envoyer votre demande.
                  </p>
                </div>

                {status === 'error' && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Nom & Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3D221A] mb-1">
                      Nom complet <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Ex: Yasmine Benali"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF3EB] border border-[#E8D8C8] text-[#2B1713] text-sm focus:outline-none focus:ring-2 focus:ring-[#E06A55] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3D221A] mb-1">
                      Numéro de téléphone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Ex: 0562 00 00 00"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF3EB] border border-[#E8D8C8] text-[#2B1713] text-sm focus:outline-none focus:ring-2 focus:ring-[#E06A55] transition-all"
                    />
                  </div>
                </div>

                {/* Email & Objet */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3D221A] mb-1">
                      Adresse e-mail (Optionnel)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF3EB] border border-[#E8D8C8] text-[#2B1713] text-sm focus:outline-none focus:ring-2 focus:ring-[#E06A55] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3D221A] mb-1">
                      Objet de la demande <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF3EB] border border-[#E8D8C8] text-[#2B1713] text-sm focus:outline-none focus:ring-2 focus:ring-[#E06A55] transition-all"
                    >
                      <option value="Demande de Réservation de Table">Demande de Réservation de Table</option>
                      <option value="Commandes de Gâteaux Personnalisés">Commande de Gâteau Personnalisé</option>
                      <option value="Organisation d'Anniversaires & Événements">Organisation d'Anniversaire / Événement</option>
                      <option value="Service Traiteur pour Événements">Service Traiteur</option>
                      <option value="Demande d'information générale">Renseignement général</option>
                    </select>
                  </div>
                </div>

                {/* Conditionally show date/guests for reservations */}
                {(formData.subject.includes('Réservation') || formData.subject.includes('Anniversaire')) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 bg-[#FAF3EB]/70 rounded-2xl border border-[#E8D8C8]/50">
                    <div>
                      <label className="block text-xs font-semibold text-[#3D221A] mb-1 flex items-center">
                        <Users className="w-3.5 h-3.5 mr-1 text-[#E06A55]" />
                        Nombre de personnes
                      </label>
                      <select
                        name="guestsCount"
                        value={formData.guestsCount}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E8D8C8] text-[#2B1713] text-xs focus:outline-none focus:ring-2 focus:ring-[#E06A55]"
                      >
                        <option value="1 personne">1 personne</option>
                        <option value="2 personnes">2 personnes</option>
                        <option value="3-4 personnes">3 à 4 personnes</option>
                        <option value="5-8 personnes">Groupe (5 à 8 personnes)</option>
                        <option value="Plus de 10 personnes">Événement (+10 personnes)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3D221A] mb-1 flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1 text-[#E06A55]" />
                        Date souhaitée
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E8D8C8] text-[#2B1713] text-xs focus:outline-none focus:ring-2 focus:ring-[#E06A55]"
                      />
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#3D221A] mb-1">
                    Votre message ou précision
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Précisez votre heure d'arrivée, vos préférences (chocolat noir/lait/blanc, allergies, thème d'anniversaire...)"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF3EB] border border-[#E8D8C8] text-[#2B1713] text-sm focus:outline-none focus:ring-2 focus:ring-[#E06A55] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#E06A55] hover:bg-[#C8553D] text-white py-3.5 px-6 rounded-2xl font-bold text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>Envoi de votre demande...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer la demande à Chocolate Sarayi</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#8A7868] text-center italic">
                  Vos informations restent strictement confidentielles pour le traitement de votre demande.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
