import React, { useState, useEffect } from 'react';
import { SALON_CONFIG, SERVICES_LIST } from '../config/salon';
import { X, MessageCircle, User, Scissors, Sparkles } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialStylist?: string;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialStylist = '',
}) => {
  const [name, setName] = useState('');
  const [service, setService] = useState(initialService);
  const [stylist, setStylist] = useState(initialStylist);
  const [preferredPeriod, setPreferredPeriod] = useState('Sem preferência');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialService) setService(initialService);
    if (initialStylist) setStylist(initialStylist);
  }, [initialService, initialStylist]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let text = `Olá! Gostaria de agendar um horário no Metamorfose Hair.\n\n`;
    if (name) text += `*Nome:* ${name}\n`;
    if (service) text += `*Serviço:* ${service}\n`;
    if (stylist) text += `*Profissional:* ${stylist}\n`;
    if (preferredPeriod) text += `*Período preferido:* ${preferredPeriod}\n`;
    if (notes) text += `*Observações:* ${notes}\n`;
    text += `\nVi através do site oficial. Como estão os horários disponíveis?`;

    const url = `https://wa.me/${SALON_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#111111] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-neutral-100">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Agendamento Rápido
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-['Syne'] text-white">
            Transforme seu Visual
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-neutral-400">
            Preencha os dados abaixo e você será direcionado ao WhatsApp da Metamorfose Hair com seu pedido formatado.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Name */}
          <div>
            <label className="block text-neutral-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
              Seu Nome Completo
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Júlia Santos"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 text-sm"
              />
              <User className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
            </div>
          </div>

          {/* Service */}
          <div>
            <label className="block text-neutral-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
              Serviço Desejado
            </label>
            <div className="relative">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-amber-400 text-sm appearance-none cursor-pointer"
              >
                <option value="">Selecione o serviço...</option>
                {SERVICES_LIST.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title} ({s.stylist})
                  </option>
                ))}
                <option value="Outro / Avaliação Personalizada">Outro / Avaliação Personalizada</option>
              </select>
              <Scissors className="absolute right-3.5 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
            </div>
          </div>

          {/* Preferred Stylist */}
          <div>
            <label className="block text-neutral-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
              Profissional de Preferência
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { name: 'Qualquer', label: 'Primeira Disp.' },
                { name: 'Sarah Menezes', label: 'Sarah (Tranças)' },
                { name: 'Ana Alice', label: 'Ana (Cortes)' },
                { name: 'Ilda Rodrigues', label: 'Ilda (Mechas)' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => setStylist(item.name === 'Qualquer' ? '' : item.name)}
                  className={`py-2 px-2 text-center rounded-xl border text-[11px] font-semibold transition-all cursor-pointer ${
                    (stylist === item.name || (item.name === 'Qualquer' && !stylist))
                      ? 'bg-amber-400 text-black border-amber-400 font-bold'
                      : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Period */}
          <div>
            <label className="block text-neutral-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
              Melhor Período para Atendimento
            </label>
            <select
              value={preferredPeriod}
              onChange={(e) => setPreferredPeriod(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-amber-400 text-sm appearance-none cursor-pointer"
            >
              <option value="Sem preferência">Qualquer dia / Horário mais próximo</option>
              <option value="Terça a Sexta - Manhã (08:30 - 12:00)">Terça a Sexta — Manhã (08:30 - 12:00)</option>
              <option value="Terça a Sexta - Tarde (13:00 - 19:00)">Terça a Sexta — Tarde (13:00 - 19:00)</option>
              <option value="Sábado (08:00 - 19:30)">Sábado (08:00 - 19:30)</option>
            </select>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-neutral-300 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
              Observação ou Detalhes (Opcional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Cabelo na altura dos ombros; quero mechas e corte..."
              className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 text-sm resize-none"
            />
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-400/20 hover:scale-[1.01] transition-transform cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Enviar Solicitação pelo WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
