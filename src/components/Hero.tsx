import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, ArrowDown, Scissors, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  onOpenSchedule: () => void;
}

const HERO_SLIDES = [
  {
    image: '/images/hero_braids.jpg',
    category: 'Tranças Afro & Arte Nagô',
    title: 'Arte e Ancestralidade em Cada Divisão',
    lead: 'Tranças rasteiras, box braids, faux locs e twists executados com precisão milimétrica e proteção total aos fios.',
    stylist: 'Sarah Menezes',
  },
  {
    image: '/images/hero_barber.jpg',
    category: 'Cortes & Visagismo Contemporâneo',
    title: 'Degradê Cirúrgico & Hair Tattoo na Lâmina',
    lead: 'Linhas geométricas, acabamentos impecáveis e cortes masculinos e unissex personalizados para o seu estilo.',
    stylist: 'Ana Alice',
  },
  {
    image: '/images/hero_treatment.jpg',
    category: 'Mechas & Recuperação Capilar',
    title: 'Loiras de Luxo, Cachos e Brilho Espelhado',
    lead: 'Gloss express, mechas iluminadas e tratamentos de alta nutrição para fios saudáveis e radiantes.',
    stylist: 'Ilda Rodrigues',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  const scrollToGallery = () => {
    const el = document.getElementById('galeria');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 overflow-hidden bg-black">
      {/* Background Images with smooth fade transition */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={s.image}
            alt={s.category}
            className="w-full h-full object-cover object-center filter brightness-90"
          />
        </div>
      ))}

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/60 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-black pointer-events-none" />

      {/* Subtle gold glow behind text */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-400/30 backdrop-blur-md mb-6 shadow-xl shadow-amber-500/5">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-amber-300 uppercase">
            {slide.category}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-['Syne'] text-white tracking-tight leading-[1.05] uppercase max-w-4xl drop-shadow-2xl">
          Sua Identidade, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
            Nossa Arte.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed">
          {slide.lead}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenSchedule}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold uppercase text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2.5 shadow-2xl shadow-amber-400/30 hover:scale-105 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Horário no WhatsApp</span>
          </button>

          <button
            onClick={scrollToGallery}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700/80 hover:border-neutral-500 font-bold uppercase text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 backdrop-blur-md transition-all cursor-pointer"
          >
            <span>Explorar Trabalhos</span>
            <ArrowDown className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Slide Indicators / Category Switcher */}
        <div className="mt-14 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`cursor-pointer px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 ${
                idx === currentSlide
                  ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-400/20 scale-105'
                  : 'bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              <span className="font-mono text-[10px] opacity-75">0{idx + 1}</span>
              <span>{s.category.split(' & ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Value Props Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-neutral-300 text-xs font-medium">
          <div className="flex items-center justify-center gap-2.5">
            <Scissors className="w-4 h-4 text-amber-400" />
            <span>Tranças Afro & Cortes 100% Autorais</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Biossegurança e Saúde Capilar</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Star className="w-4 h-4 text-amber-400" />
            <span>Mata do Jacinto — Campo Grande MS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
