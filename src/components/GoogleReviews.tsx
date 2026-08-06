import React, { useState } from 'react';
import { Star, MessageSquare, ThumbsUp, Filter, CheckCircle2 } from 'lucide-react';
import { REVIEWS, GOOGLE_REVIEWS_INFO } from '../data/company';

export const GoogleReviews: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const filteredReviews = selectedTopic
    ? REVIEWS.filter(r => r.comment.toLowerCase().includes(selectedTopic.toLowerCase()) || (selectedTopic === 'Crêpe' && r.comment.toLowerCase().includes('crêpe')))
    : REVIEWS;

  return (
    <section className="bg-white py-16 rounded-3xl border border-[#E8D8C8] shadow-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 my-12">
      {/* Header & Overall Rating */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#F0E6DD]">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Google Reviews Officiel</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-[#2B1713]">
            Avis & Témoignages Clients
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5048]">
            Découvrez les retours authentiques de nos clients sur nos crêpes, boissons et notre ambiance.
          </p>
        </div>

        {/* Big Rating Badge */}
        <div className="flex items-center space-x-4 bg-[#FAF3EB] p-4 rounded-2xl border border-amber-200/60 shadow-sm shrink-0">
          <div className="text-center">
            <span className="text-4xl font-extrabold text-[#2B1713] block leading-none">
              {GOOGLE_REVIEWS_INFO.rating}
            </span>
            <div className="flex items-center text-amber-500 mt-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 fill-current ${i === 4 ? 'text-amber-300' : ''}`} 
                />
              ))}
            </div>
            <span className="text-[11px] font-bold text-[#7A6258] mt-1 block">
              {GOOGLE_REVIEWS_INFO.totalReviews} avis vérifiés
            </span>
          </div>

          <div className="h-12 w-px bg-amber-200/80 mx-1" />

          <div className="text-xs space-y-1">
            <div className="flex items-center text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
              <span>Service 5 Étoiles</span>
            </div>
            <div className="text-[#6B5048]">
              Plats copieux & Qualité Belge
            </div>
          </div>
        </div>
      </div>

      {/* Topics Filter Chips */}
      <div className="space-y-3">
        <span className="text-xs font-bold text-[#2B1713] uppercase tracking-wider flex items-center space-x-1.5">
          <Filter className="w-3.5 h-3.5 text-[#E06A55]" />
          <span>Mots-clés fréquents :</span>
        </span>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTopic(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedTopic === null 
                ? 'bg-[#2B1713] text-white shadow-md' 
                : 'bg-[#FAF3EB] text-[#523B33] hover:bg-amber-100'
            }`}
          >
            Tous les avis ({REVIEWS.length})
          </button>
          {GOOGLE_REVIEWS_INFO.topics.map((t) => (
            <button
              key={t.name}
              onClick={() => setSelectedTopic(selectedTopic === t.name ? null : t.name)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center space-x-1 ${
                selectedTopic === t.name 
                  ? 'bg-[#E06A55] text-white shadow-md' 
                  : 'bg-[#FAF3EB] text-[#523B33] hover:bg-amber-100 border border-amber-200/50'
              }`}
            >
              <span>{t.name}</span>
              <span className="text-[10px] opacity-75">({t.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReviews.map((rev) => (
          <div 
            key={rev.id} 
            className="bg-[#FAF3EB]/50 hover:bg-[#FAF3EB] p-6 rounded-2xl border border-[#E8D8C8] transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Reviewer Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src={rev.avatar} 
                    alt={rev.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-[#2B1713] leading-tight">{rev.author}</h4>
                    <span className="text-[10px] text-[#8C7468] block">{rev.role}</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#A0887A] font-medium">{rev.date}</span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-1 text-amber-500">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Review Comment */}
              <p className="text-xs sm:text-sm text-[#4E3932] leading-relaxed">
                "{rev.comment}"
              </p>
            </div>

            {/* Footer badge */}
            <div className="pt-3 border-t border-[#E8D8C8]/60 flex items-center justify-between text-[11px] text-[#8A7468]">
              <span className="flex items-center text-emerald-700 font-medium">
                <ThumbsUp className="w-3 h-3 mr-1" />
                Avis Vérifié Google
              </span>
              <span className="text-amber-700 font-semibold bg-amber-100/80 px-2 py-0.5 rounded text-[10px]">
                Garden City
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
