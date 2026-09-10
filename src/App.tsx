import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { HeroVideo } from './components/HeroVideo';
import { OverlayUI } from './components/OverlayUI';
import { ScatteredGallery } from './components/ScatteredGallery';
import { TeamSection } from './components/TeamSection';
import { ServicesSection } from './components/ServicesSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { ArrowDown, Sparkles, Scissors, ShieldCheck, HeartHandshake } from 'lucide-react';

export const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedStylist, setSelectedStylist] = useState('');

  // Track window scroll with requestAnimationFrame for fluid performance
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenSchedule = (serviceName?: string, stylistName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    if (stylistName) setSelectedStylist(stylistName);
    setIsScheduleOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#070707] text-neutral-100 selection:bg-amber-400 selection:text-black font-sans">
      {/* 1. Custom Desktop Exclusion Cursor */}
      <CustomCursor />

      {/* 2. Overlaid Brand Navigation & Badges */}
      <OverlayUI
        scrollY={scrollY}
        onOpenSchedule={() => handleOpenSchedule()}
      />

      {/* 3. Hero Visual Background (Video Scrub / Ambient) */}
      <HeroVideo scrollY={scrollY} />

      {/* 4. Hero Content Section (First 100vh) */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 sm:pb-24 px-4 sm:px-8 z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-8 pointer-events-auto">
          {/* Headline and Motto */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs uppercase tracking-[0.25em] text-white font-mono font-semibold">
                Hairstyling • Tranças • Arte Corporal
              </span>
            </div>

            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black font-['Syne'] tracking-tight text-white uppercase leading-[0.95]">
              Sua Beleza <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Transformada.
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-lg text-neutral-300 max-w-xl font-medium leading-relaxed drop-shadow-md">
              Muito mais que um salão: um espaço autoral dedicado à celebração da sua identidade,
              tranças de alta precisão e visagismo moderno.
            </p>
          </div>

          {/* Scroll down indicator */}
          <div className="flex items-center gap-4 text-xs tracking-widest text-neutral-400 uppercase font-mono">
            <div className="flex flex-col items-end">
              <span className="font-bold text-white">Explore o Acervo</span>
              <span className="text-[10px] text-neutral-400">Role para baixo</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Brand Values Bar */}
      <div id="sobre" className="relative z-20 bg-neutral-950 border-y border-neutral-800/80 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-amber-400 shrink-0">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Syne']">
                Técnicas Autorais
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Precisão milimétrica em divisões e fades navalhados.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Syne']">
                Saúde Capilar Primeiro
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Biossegurança rigorosa e produtos de alto padrão internacional.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center sm:justify-start">
            <div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 text-amber-400 shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Syne']">
                Atendimento Acolhedor
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Espaço pensado no seu conforto e na sua autoestima.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Scattered Gallery Section (Phase 2 from spec) */}
      <ScatteredGallery
        onSelectServiceForSchedule={(service) => handleOpenSchedule(service)}
      />

      {/* 7. Team Section */}
      <TeamSection
        onSelectStylist={(stylistName) => handleOpenSchedule('', stylistName)}
      />

      {/* 8. Services Section */}
      <ServicesSection
        onSelectService={(serviceTitle) => handleOpenSchedule(serviceTitle)}
      />

      {/* 9. Location & Hours Section */}
      <LocationSection
        onOpenSchedule={() => handleOpenSchedule()}
      />

      {/* 10. Footer & Floating Pill Outro CTA */}
      <Footer
        onOpenSchedule={() => handleOpenSchedule()}
        scrollY={scrollY}
      />

      {/* 11. WhatsApp Schedule Modal */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        initialService={selectedService}
        initialStylist={selectedStylist}
      />
    </div>
  );
};

export default App;
