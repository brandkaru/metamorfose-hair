import React, { useState, useMemo } from 'react';
import { GALLERY_ITEMS, SALON_CONFIG } from '../config/salon';
import type { GalleryItem } from '../config/salon';
import { Sparkles, MessageCircle, ExternalLink, X, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface GalleryProps {
  onOpenSchedule: (serviceTitle?: string, stylistName?: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenSchedule }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'trancas' | 'cortes' | 'tratamentos'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const [visibleCount, setVisibleCount] = useState(24);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleBookItem = (item: GalleryItem) => {
    onOpenSchedule(item.title, item.stylist);
    setSelectedItem(null);
  };

  const handleWhatsAppDirect = (item: GalleryItem) => {
    const text = encodeURIComponent(
      `Olá! Estava no site da Metamorfose Hair e adorei o trabalho "${item.title}" feito por ${item.stylist}. Gostaria de informações sobre disponibilidade para agendar esse estilo!`
    );
    window.open(`https://wa.me/${SALON_CONFIG.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="galeria" className="relative w-full bg-black py-24 sm:py-32 px-4 sm:px-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold font-mono">
                Portfólio & Transformações • {GALLERY_ITEMS.length} Obras
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-['Syne'] text-white uppercase tracking-tight">
              Galeria de Criações
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-normal">
              Trabalhos 100% originais produzidos no estúdio pelas nossas especialistas. Clique em qualquer foto para ver os detalhes ou agendar o mesmo visual.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todos os Trabalhos' },
              { id: 'trancas', label: 'Tranças & Locs' },
              { id: 'cortes', label: 'Cortes & Fade' },
              { id: 'tratamentos', label: 'Mechas & Cachos' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id as any);
                  setVisibleCount(24);
                }}
                className={`cursor-pointer px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === tab.id
                    ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-400/20'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Instagram-style Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/80 cursor-pointer hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Tag pill top-left */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-black/80 text-amber-300 border border-amber-400/20 backdrop-blur-md">
                  {item.tag}
                </span>
              </div>

              {/* Hover overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  Por {item.stylist}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white font-['Syne'] leading-snug mt-0.5">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-white/80 font-semibold uppercase tracking-wider">
                  <span>Ver Detalhes</span>
                  <ArrowUpRight className="w-3 h-3 text-amber-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button if remaining */}
        {visibleCount < filteredItems.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 24)}
              className="cursor-pointer px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-amber-400 text-white hover:text-black border border-neutral-700 hover:border-amber-400 font-bold uppercase text-xs tracking-wider transition-all duration-300 shadow-xl"
            >
              Carregar Mais Trabalhos (+{filteredItems.length - visibleCount})
            </button>
          </div>
        )}

        {/* Instagram Profile CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border border-amber-400/40 p-0.5 shrink-0">
              <img src="/images/logo/logo.png" alt="Metamorfose Hair" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-['Syne'] text-white">
                Gostou? Acompanhe o dia a dia no Instagram!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                Postamos resultados diários, vídeos de procedimentos e novidades em primeira mão.
              </p>
            </div>
          </div>

          <a
            href={SALON_CONFIG.instagram}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-neutral-900 hover:bg-amber-400 text-white hover:text-black border border-neutral-700 hover:border-amber-400 font-bold uppercase text-xs tracking-wider flex items-center gap-2 transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Seguir @metamorfosehair_</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#111111] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-neutral-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 aspect-square relative bg-neutral-900">
              <img
                src={selectedItem.fullImage || selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/80 text-amber-400 border border-amber-400/40">
                  {selectedItem.tag}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-semibold">
                  Metamorfose Hair Portfolio
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Syne'] text-white mt-1 leading-tight">
                  {selectedItem.title}
                </h3>

                <div className="mt-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wide">Profissional Responsável</div>
                  <div className="text-base font-bold text-white mt-0.5">{selectedItem.stylist}</div>
                  <a
                    href={`https://instagram.com/${selectedItem.stylistHandle.replace('@', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline mt-1 font-medium"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    {selectedItem.stylistHandle}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  Procedimento personalizado com preservação da saúde dos fios, acabamento limpo e durabilidade prolongada.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={() => handleWhatsAppDirect(selectedItem)}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Agendar este estilo no WhatsApp
                </button>
                <button
                  onClick={() => handleBookItem(selectedItem)}
                  className="w-full py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Preencher Formulário de Agendamento
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
