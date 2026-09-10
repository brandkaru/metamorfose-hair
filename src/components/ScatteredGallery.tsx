import React, { useEffect, useRef, useState, useMemo } from 'react';
import { GALLERY_ITEMS, SALON_CONFIG } from '../config/salon';
import type { GalleryItem } from '../config/salon';
import { Sparkles, MessageCircle, ExternalLink, X, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface ScatteredGalleryProps {
  onSelectServiceForSchedule?: (serviceName: string) => void;
}

export const ScatteredGallery: React.FC<ScatteredGalleryProps> = ({ onSelectServiceForSchedule }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'trancas' | 'cortes' | 'tratamentos'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [columns, setColumns] = useState(4);

  // Filter items based on active tab
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Determine responsive columns
  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      if (w < 640) setColumns(2);
      else if (w < 1024) setColumns(3);
      else setColumns(4);
    };

    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  // Algorithm from spec: buildLayout(count, cols)
  const gridCells = useMemo(() => {
    const count = filteredItems.length;
    const cols = columns;
    const cells: { itemIndex: number; col: number; row: number }[] = [];
    let itemIdx = 0;
    let r = 0;

    while (itemIdx < count) {
      const a = (r * 2 + (r % 2)) % cols;
      cells.push({ itemIndex: itemIdx, col: a, row: r });
      itemIdx++;

      if (r % 3 === 0 && itemIdx < count) {
        let b = (a + 2) % cols;
        if (b === a) b = (a + 1) % cols;
        cells.push({ itemIndex: itemIdx, col: b, row: r });
        itemIdx++;
      }
      r++;
    }

    return { cells, totalRows: r };
  }, [filteredItems, columns]);

  // Reset cardRefs when items change
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, gridCells.cells.length);
  }, [gridCells]);

  // Scroll scale calculation in requestAnimationFrame
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let rafId: number;

    const updateScales = () => {
      const vh = window.innerHeight;

      cardRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top;
        const bottom = rect.bottom;

        if (bottom <= 0 || top >= vh) {
          el.style.transform = 'scale(0.85)';
          el.style.opacity = '0.2';
          return;
        }

        const enter = Math.min(1, (vh - top) / (vh * 0.45));
        const exit = Math.min(1, bottom / (vh * 0.35));
        const scale = Math.max(0.85, Math.min(1, Math.min(enter, exit)));
        const opacity = Math.max(0.2, Math.min(1, Math.min(enter, exit)));

        el.style.transform = `scale(${scale})`;
        el.style.opacity = `${opacity}`;
      });

      rafId = requestAnimationFrame(updateScales);
    };

    rafId = requestAnimationFrame(updateScales);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [gridCells]);

  const handleWhatsAppInquiry = (item: GalleryItem) => {
    if (onSelectServiceForSchedule) {
      onSelectServiceForSchedule(item.title);
    }
    const msg = encodeURIComponent(
      `Olá! Estava navegando no site da Metamorfose Hair e adorei o trabalho "${item.title}" (${item.stylist}). Gostaria de saber mais informações e disponibilidade para agendar!`
    );
    window.open(`https://wa.me/${SALON_CONFIG.whatsapp}?text=${msg}`, '_blank');
  };

  return (
    <section id="galeria" ref={containerRef} className="relative w-full bg-black py-24 sm:py-32 px-4 sm:px-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold font-mono">
                Acervo & Portfólio Autoral
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-['Syne'] tracking-tight text-white uppercase">
              Transformações Reais
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-medium">
              Explore os trabalhos originais realizados pelas nossas profissionais. Cada criação reflete identidade, técnica de precisão e empoderamento.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todos os Trabalhos' },
              { id: 'trancas', label: 'Tranças & Locs' },
              { id: 'cortes', label: 'Cortes & Fade' },
              { id: 'tratamentos', label: 'Cachos & Mechas' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`cursor-pointer px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === tab.id
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                    : 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scattered Dynamic Grid */}
        <div
          className="grid gap-6 sm:gap-8"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gridAutoRows: 'auto',
          }}
        >
          {gridCells.cells.map(({ itemIndex, col, row }, idx) => {
            const item = filteredItems[itemIndex];
            if (!item) return null;

            const isLeft = col < columns / 2;

            return (
              <div
                key={`${item.id}-${idx}`}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => setSelectedItem(item)}
                style={{
                  gridColumnStart: col + 1,
                  gridRowStart: row + 1,
                  transformOrigin: isLeft ? 'right bottom' : 'left bottom',
                }}
                className="bp-card group cursor-pointer relative aspect-[2/3] w-full rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950 transition-shadow duration-500 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/30">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom Overlay Content */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex flex-col justify-end">
                  <span className="text-[11px] font-medium tracking-wide text-neutral-400 uppercase">
                    Por {item.stylist}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug tracking-tight font-['Syne'] mt-1 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-center justify-between text-xs text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">Ver Detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#111111] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative bg-neutral-900">
              <img
                src={selectedItem.image}
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
                  Metamorfose Portfolio
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-['Syne'] text-white mt-1 leading-tight">
                  {selectedItem.title}
                </h3>

                <div className="mt-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <div className="text-xs text-neutral-400 uppercase tracking-wide">Profissional Responsável</div>
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

                <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Realizado com os melhores produtos profissionais e técnicas exclusivas de biossegurança e preservação da fibra capilar.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={() => handleWhatsAppInquiry(selectedItem)}
                  className="w-full py-3.5 px-6 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-lg shadow-amber-400/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Agendar este estilo no WhatsApp
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full py-2.5 text-xs text-neutral-400 hover:text-white uppercase tracking-wider font-semibold transition-colors"
                >
                  Voltar ao Acervo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
