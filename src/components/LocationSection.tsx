import React from 'react';
import { SALON_CONFIG } from '../config/salon';
import { MapPin, Navigation, Clock, ExternalLink, Calendar } from 'lucide-react';

interface LocationSectionProps {
  onOpenSchedule: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenSchedule }) => {
  return (
    <section id="localizacao" className="relative w-full bg-[#080808] py-24 sm:py-32 px-4 sm:px-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold font-mono">
              Nosso Endereço & Acesso
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-['Syne'] tracking-tight text-white uppercase">
            Venha Nos Visitar
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 font-medium">
            Localizado no bairro Mata do Jacinto em Campo Grande - MS. Ambiente climatizado, acolhedor e com estacionamento fácil.
          </p>
        </div>

        {/* Layout Grid: Info & Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card */}
          <div className="lg:col-span-5 rounded-3xl bg-neutral-950 border border-neutral-800/80 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Endereço Oficial
                    </h3>
                    <p className="text-base font-semibold text-white mt-1 leading-snug">
                      {SALON_CONFIG.address}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">
                      Campo Grande — Mato Grosso do Sul
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-800/80 flex flex-wrap gap-2">
                  <a
                    href={SALON_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-400" />
                    Abrir no Google Maps
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                  <a
                    href="https://waze.com/ul?q=Metamorfose+Hair+Campo+Grande+MS"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors"
                  >
                    Waze
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Horário de Funcionamento
                    </h3>
                    <div className="mt-3 space-y-2">
                      {SALON_CONFIG.hours.map((h, i) => (
                        <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-neutral-800/50 last:border-0">
                          <span className="text-neutral-300 font-medium">{h.days}</span>
                          <span className="text-amber-400 font-mono font-bold">{h.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <button
                onClick={onOpenSchedule}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-400/20 hover:scale-[1.01] transition-transform cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Agendar Horário Antecipado
              </button>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-neutral-800/80 bg-neutral-950 min-h-[350px] sm:min-h-[450px] relative">
            <iframe
              title="Metamorfose Hair no Google Maps"
              src={SALON_CONFIG.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px]"
            />
            <div className="absolute top-4 right-4 z-10 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-white/20">
                Campo Grande — MS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
