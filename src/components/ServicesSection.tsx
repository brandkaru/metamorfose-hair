import React, { useState } from 'react';
import { SERVICES_LIST } from '../config/salon';
import { Clock, Check, MessageCircle, Scissors } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [filter, setFilter] = useState<'all' | 'trancas' | 'cortes' | 'tratamentos'>('all');

  const filteredServices = SERVICES_LIST.filter((s) => {
    if (filter === 'all') return true;
    return s.category === filter;
  });

  return (
    <section id="servicos" className="relative w-full bg-black py-24 sm:py-32 px-4 sm:px-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Scissors className="w-4 h-4 text-amber-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold font-mono">
                Menu de Experiências
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-['Syne'] tracking-tight text-white uppercase">
              Serviços & Procedimentos
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-medium">
              Atendimento personalizado com avaliação individual, biossegurança rigorosa e produtos de nível internacional.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todos os Serviços' },
              { id: 'trancas', label: 'Tranças & Afro' },
              { id: 'cortes', label: 'Cortes & Navalhado' },
              { id: 'tratamentos', label: 'Mechas & Recuperação' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`cursor-pointer px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-white text-black font-bold'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group p-6 sm:p-8 rounded-3xl bg-neutral-950/90 border border-neutral-800/80 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-neutral-900 text-amber-400 border border-neutral-800">
                    {service.stylist}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-['Syne'] text-white group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-medium">
                  {service.description}
                </p>

                <div className="mt-4 pt-4 border-t border-neutral-900 flex items-center gap-2 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-neutral-400">Indicado para: <strong className="text-neutral-200">{service.recommendedFor}</strong></span>
                </div>
              </div>

              <div className="mt-6 pt-4 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 px-5 rounded-full bg-neutral-900 hover:bg-amber-400 text-white hover:text-black border border-neutral-800 hover:border-amber-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Consultar Valor & Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
