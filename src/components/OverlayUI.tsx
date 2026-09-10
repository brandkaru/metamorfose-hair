import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SALON_CONFIG } from '../config/salon';
import { Menu, X, Calendar } from 'lucide-react';

interface OverlayUIProps {
  scrollY: number;
  onOpenSchedule: () => void;
}

export const OverlayUI: React.FC<OverlayUIProps> = ({ scrollY, onOpenSchedule }) => {
  const [symbol, setSymbol] = useState('✂');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic symbol switching on scroll (throttled)
  useEffect(() => {
    const symbols = ['✂', '✦', '8', '⌘', '⚡', 'MS', '★', '∞'];
    const interval = Math.floor(scrollY / 70);
    const selected = symbols[interval % symbols.length];
    setSymbol(selected);
  }, [scrollY]);

  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;

  // Scroll to section helper
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Brand Logo (Top Left) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0 }}
        className="fixed top-4 left-4 sm:top-8 sm:left-8 z-30 pointer-events-none mix-blend-exclusion"
      >
        <a href="#" className="pointer-events-auto flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-white/20 bg-black/40 backdrop-blur-md p-1 group-hover:scale-105 transition-transform duration-300">
            <img
              src="/images/logo/logo.png"
              alt="Metamorfose Hair Logo"
              className="w-full h-full object-contain filter brightness-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-['Syne'] font-extrabold tracking-tight text-white text-base sm:text-xl uppercase leading-tight">
              Metamorfose
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] text-white/80 uppercase font-medium">
              Hair Studio
            </span>
          </div>
        </a>
      </motion.div>

      {/* 2. Editorial Caption / Studio Manifesto (Below Logo, Left Side) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        className={`fixed left-4 sm:left-8 top-28 sm:top-36 max-w-[290px] sm:max-w-md z-20 pointer-events-none mix-blend-exclusion transition-opacity duration-500 ${
          scrollY > vh * 0.9 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <p className="text-[11px] sm:text-[13px] leading-relaxed tracking-[-0.03em] text-white/90 font-medium">
          Onde sua identidade ganha poder e transformação. Especialistas em tranças afro-brasileiras,
          divisões de precisão extrema, cortes autorais na navalha, mechas iluminadas e visagismo contemporâneo.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          <span className="text-[10px] tracking-wider uppercase font-semibold text-white/75">
            Campo Grande — MS • Mata do Jacinto
          </span>
        </div>
      </motion.div>

      {/* 3. Header Navigation (Top Right) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        className="fixed top-4 right-4 sm:top-8 sm:right-8 z-40 mix-blend-exclusion flex items-center gap-4 sm:gap-8"
      >
        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-[-0.02em] font-medium text-white uppercase">
          <button
            onClick={() => scrollTo('sobre')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollTo('galeria')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Galeria
          </button>
          <button
            onClick={() => scrollTo('equipe')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Equipe
          </button>
          <button
            onClick={() => scrollTo('servicos')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollTo('localizacao')}
            className="hover:opacity-60 transition-opacity cursor-pointer"
          >
            Localização
          </button>
        </nav>

        {/* Schedule / Agendar CTA */}
        <button
          onClick={onOpenSchedule}
          className="cursor-pointer group flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 hover:border-white bg-white/10 hover:bg-white text-white hover:text-black transition-all duration-300 backdrop-blur-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span className="text-[12px] sm:text-[13px] font-semibold tracking-wide uppercase">
            [ AGENDAR ]
          </span>
        </button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:opacity-80 transition-opacity cursor-pointer"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 p-6 lg:hidden"
          >
            <button
              onClick={() => scrollTo('sobre')}
              className="text-2xl font-bold font-['Syne'] tracking-tight text-white hover:text-amber-400 uppercase"
            >
              Sobre o Studio
            </button>
            <button
              onClick={() => scrollTo('galeria')}
              className="text-2xl font-bold font-['Syne'] tracking-tight text-white hover:text-amber-400 uppercase"
            >
              Galeria & Trabalhos
            </button>
            <button
              onClick={() => scrollTo('equipe')}
              className="text-2xl font-bold font-['Syne'] tracking-tight text-white hover:text-amber-400 uppercase"
            >
              Nossa Equipe
            </button>
            <button
              onClick={() => scrollTo('servicos')}
              className="text-2xl font-bold font-['Syne'] tracking-tight text-white hover:text-amber-400 uppercase"
            >
              Menu de Serviços
            </button>
            <button
              onClick={() => scrollTo('localizacao')}
              className="text-2xl font-bold font-['Syne'] tracking-tight text-white hover:text-amber-400 uppercase"
            >
              Localização & Contato
            </button>

            <div className="mt-8 flex flex-col gap-4 w-full max-w-xs">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full py-4 rounded-full bg-white text-black font-bold uppercase tracking-wider text-sm text-center shadow-lg hover:bg-amber-400 transition-colors"
              >
                Agendar no WhatsApp
              </button>
              <a
                href={SALON_CONFIG.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-center text-xs tracking-widest text-neutral-400 hover:text-white uppercase"
              >
                Seguir {SALON_CONFIG.instagramHandle}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Bottom Right Studio Badge / Dynamic Indicator */}
      <motion.div
        id="outro-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className={`fixed right-4 bottom-4 sm:right-8 sm:bottom-8 z-20 pointer-events-none mix-blend-exclusion flex flex-col items-end gap-1.5 transition-opacity duration-500 ${
          scrollY > vh * 0.95 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
            <span className="text-white text-xs font-mono font-bold">{symbol}</span>
          </div>
          <div className="text-right">
            <div className="text-[12px] sm:text-[14px] font-bold tracking-tight text-white uppercase font-['Syne']">
              METAMORFOSE HAIR
            </div>
            <div className="text-[9px] sm:text-[10px] tracking-widest text-white/70 uppercase">
              STUDIO AUTORAL • CG/MS
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
