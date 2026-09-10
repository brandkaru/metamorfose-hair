import React from 'react';
import { SALON_CONFIG } from '../config/salon';
import { WhatsAppIcon } from './Icons';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent('Olá! Gostaria de informações sobre agendamento no Metamorfose Hair.');
    window.open(`https://wa.me/${SALON_CONFIG.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleClick}
        className="cursor-pointer group flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-green-500/30 hover:scale-105 transition-all duration-300 border border-white/20"
        aria-label="Falar no WhatsApp"
      >
        <div className="relative">
          <WhatsAppIcon className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider font-['Syne']">
          Agendar no WhatsApp
        </span>
      </button>
    </div>
  );
};
