import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { Gallery } from './components/Gallery';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScheduleModal } from './components/ScheduleModal';

export const App: React.FC = () => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedStylist, setSelectedStylist] = useState('');

  const handleOpenSchedule = (serviceName?: string, stylistName?: string) => {
    setSelectedService(serviceName || '');
    setSelectedStylist(stylistName || '');
    setIsScheduleOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060606] text-neutral-100 font-sans antialiased overflow-x-hidden selection:bg-amber-400 selection:text-black">
      {/* 1. Header / Navbar */}
      <Navbar onOpenSchedule={() => handleOpenSchedule()} />

      {/* 2. Hero Section */}
      <Hero onOpenSchedule={() => handleOpenSchedule()} />

      {/* 3. About / Concept Section */}
      <About />

      {/* 4. Services Section */}
      <ServicesSection onSelectService={(title) => handleOpenSchedule(title)} />

      {/* 5. Team Section */}
      <TeamSection onSelectStylist={(name) => handleOpenSchedule('', name)} />

      {/* 6. Gallery Section */}
      <Gallery onOpenSchedule={(service, stylist) => handleOpenSchedule(service, stylist)} />

      {/* 7. Location & Google Maps Section */}
      <LocationSection onOpenSchedule={() => handleOpenSchedule()} />

      {/* 8. Footer */}
      <Footer onOpenSchedule={() => handleOpenSchedule()} />

      {/* 9. Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* 10. Schedule Modal */}
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
