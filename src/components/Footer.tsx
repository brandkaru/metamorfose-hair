import React from 'react';
import { SALON_CONFIG } from '../config/salon';
import { Heart, MapPin, Clock, Calendar } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface FooterProps {
  onOpenSchedule: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSchedule }) => {
  return (
    <footer className="relative w-full bg-[#050505] border-t border-neutral-800 py-16 px-4 sm:px-8 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-400/40 p-0.5 bg-black">
                <img
                  src="/images/logo/logo.png"
                  alt="Metamorfose Hair"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-['Syne'] font-extrabold text-white text-base uppercase tracking-wider">
                  Metamorfose
                </div>
                <div className="text-[10px] text-amber-400 font-semibold tracking-widest uppercase">
                  Hair Studio
                </div>
              </div>
            </div>
            <p className="text-neutral-400 leading-relaxed text-xs font-normal">
              Onde sua identidade ganha poder e arte capilar. Tranças afro-brasileiras, cortes masculinos e visagismo moderno.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Syne'] font-bold text-white uppercase tracking-wider text-xs mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li><a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre o Studio</a></li>
              <li><a href="#servicos" className="hover:text-amber-400 transition-colors">Serviços & Procedimentos</a></li>
              <li><a href="#equipe" className="hover:text-amber-400 transition-colors">Nossa Equipe</a></li>
              <li><a href="#galeria" className="hover:text-amber-400 transition-colors">Galeria de Trabalhos</a></li>
              <li><a href="#localizacao" className="hover:text-amber-400 transition-colors">Localização & Acesso</a></li>
            </ul>
          </div>

          {/* Team / Instagrams */}
          <div>
            <h4 className="font-['Syne'] font-bold text-white uppercase tracking-wider text-xs mb-4">
              Profissionais
            </h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <a
                  href="https://www.instagram.com/sararabraids_/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Sarah Menezes (@sararabraids_)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/anaalicehair_/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ana Alice (@anaalicehair_)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ildarodrigueshair_/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ilda Rodrigues (@ildarodrigueshair_)</span>
                </a>
              </li>
              <li>
                <a
                  href={SALON_CONFIG.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Studio Oficial (@metamorfosehair_)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="font-['Syne'] font-bold text-white uppercase tracking-wider text-xs mb-4">
              Atendimento
            </h4>
            <div className="space-y-2 text-neutral-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SALON_CONFIG.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Terça a Sábado: 08:30 — 19:00</span>
              </div>
            </div>

            <button
              onClick={onOpenSchedule}
              className="mt-4 w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase text-[11px] tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              Solicitar Agendamento
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Metamorfose Hair. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Desenvolvido com excelência para elevar sua autoestima</span>
            <Heart className="w-3 h-3 text-amber-400 fill-amber-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};
