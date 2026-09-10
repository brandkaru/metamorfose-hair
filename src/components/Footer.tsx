import React from 'react';
import { SALON_CONFIG } from '../config/salon';
import { Calendar, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface FooterProps {
  onOpenSchedule: () => void;
  scrollY: number;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSchedule, scrollY }) => {
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
  const outroProgress = Math.min(1, Math.max(0, (scrollY - vh * 0.4) / (vh * 0.8)));

  return (
    <>
      {/* Dynamic Floating Pill CTA Button */}
      <div
        id="outro-buy"
        className="fixed right-4 bottom-4 sm:right-8 sm:bottom-8 z-40 transition-transform duration-300 origin-bottom-right"
        style={{
          transform: `scale(${outroProgress})`,
          opacity: outroProgress > 0.05 ? 1 : 0,
          pointerEvents: outroProgress > 0.1 ? 'auto' : 'none',
        }}
      >
        <button
          onClick={onOpenSchedule}
          className="cursor-pointer group flex items-center justify-center gap-3 px-6 sm:px-8 py-4 sm:py-5 rounded-full bg-white text-black hover:bg-amber-400 font-bold uppercase tracking-tight shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20"
        >
          <Calendar className="w-5 h-5 text-black" />
          <span className="font-['Syne'] text-base sm:text-lg">
            AGENDAR HORÁRIO
          </span>
        </button>
      </div>

      {/* Main Footer */}
      <footer className="relative w-full bg-black border-t border-neutral-900 py-16 px-4 sm:px-8 text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand info */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-800 p-0.5">
              <img
                src="/images/logo/logo.png"
                alt="Logo Metamorfose Hair"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-['Syne'] font-bold text-white text-sm tracking-tight uppercase">
                Metamorfose Hair
              </div>
              <div className="text-[11px] text-neutral-500">
                Campo Grande — MS • Studio Autoral
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-semibold tracking-wider uppercase text-neutral-300">
            <a
              href={SALON_CONFIG.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              {SALON_CONFIG.instagramHandle}
            </a>
            <a
              href="https://www.instagram.com/sararabraids_/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              @sararabraids_
            </a>
            <a
              href="https://www.instagram.com/anaalicehair_/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              @anaalicehair_
            </a>
            <a
              href="https://www.instagram.com/ildarodrigueshair_/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              @ildarodrigueshair_
            </a>
          </div>

          {/* Copyright & Dev Credit */}
          <div className="text-center md:text-right text-[11px] text-neutral-500">
            <div>
              &copy; {new Date().getFullYear()} METAMORFOSE HAIR. TODOS OS DIREITOS RESERVADOS.
            </div>
            <div className="mt-1 flex items-center justify-center md:justify-end gap-1">
              <span>Feito com</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              <span>para elevar sua autoestima</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
