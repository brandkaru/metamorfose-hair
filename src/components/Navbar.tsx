import React, { useState, useEffect } from 'react';
import { SALON_CONFIG } from '../config/salon';
import { Menu, X, Calendar, MapPin } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface NavbarProps {
  onOpenSchedule: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-amber-400/40 bg-black p-0.5 group-hover:border-amber-400 transition-colors shadow-lg shadow-amber-500/10">
            <img
              src="/images/logo/logo.png"
              alt="Metamorfose Hair"
              className="w-full h-full object-contain filter brightness-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-['Syne'] font-extrabold text-white text-base sm:text-lg tracking-wider uppercase leading-none">
              Metamorfose
            </span>
            <span className="text-[10px] tracking-[0.25em] text-amber-400 font-semibold uppercase mt-0.5">
              Hair Studio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-300">
          <button
            onClick={() => scrollTo('sobre')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollTo('servicos')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollTo('equipe')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Equipe
          </button>
          <button
            onClick={() => scrollTo('galeria')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Galeria
          </button>
          <button
            onClick={() => scrollTo('localizacao')}
            className="hover:text-amber-400 transition-colors cursor-pointer"
          >
            Localização
          </button>
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={SALON_CONFIG.instagram}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-neutral-900/80 hover:bg-amber-400 text-neutral-300 hover:text-black transition-all border border-neutral-800 hover:border-amber-400"
            title="Instagram Oficial"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenSchedule}
            className="cursor-pointer px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold uppercase text-xs tracking-wider flex items-center gap-2 shadow-lg shadow-amber-400/20 hover:scale-[1.02] transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Horário</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenSchedule}
            className="px-3.5 py-1.5 rounded-full bg-amber-400 text-black text-[11px] font-bold uppercase tracking-wider"
          >
            Agendar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-amber-400 transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-neutral-800 px-6 py-8 flex flex-col gap-5 text-center animate-fade-in">
          <button
            onClick={() => scrollTo('sobre')}
            className="text-base font-bold uppercase tracking-wider text-neutral-200 hover:text-amber-400"
          >
            Sobre o Studio
          </button>
          <button
            onClick={() => scrollTo('servicos')}
            className="text-base font-bold uppercase tracking-wider text-neutral-200 hover:text-amber-400"
          >
            Serviços & Procedimentos
          </button>
          <button
            onClick={() => scrollTo('equipe')}
            className="text-base font-bold uppercase tracking-wider text-neutral-200 hover:text-amber-400"
          >
            Nossa Equipe
          </button>
          <button
            onClick={() => scrollTo('galeria')}
            className="text-base font-bold uppercase tracking-wider text-neutral-200 hover:text-amber-400"
          >
            Galeria de Trabalhos
          </button>
          <button
            onClick={() => scrollTo('localizacao')}
            className="text-base font-bold uppercase tracking-wider text-neutral-200 hover:text-amber-400"
          >
            Localização & Horários
          </button>

          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full py-3.5 rounded-xl bg-amber-400 text-black font-bold uppercase text-xs tracking-wider"
            >
              Agendar no WhatsApp
            </button>
            <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Mata do Jacinto — Campo Grande MS</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
