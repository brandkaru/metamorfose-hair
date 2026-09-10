import { Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="relative w-full bg-neutral-950 py-24 sm:py-32 px-4 sm:px-8 border-t border-neutral-800/80 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Main image */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
                <img
                  src="/images/hero_braids.jpg"
                  alt="Metamorfose Hair Studio"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 p-5 rounded-2xl bg-black/90 border border-amber-400/40 backdrop-blur-xl shadow-2xl max-w-[240px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-amber-400">
                    Espaço Exclusivo
                  </span>
                </div>
                <div className="text-xl font-bold font-['Syne'] text-white">
                  Campo Grande, MS
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  Mata do Jacinto • Atendimento com hora marcada
                </div>
              </div>

              {/* Logo Emblem Stamp */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-neutral-950 border border-amber-400/40 p-2 shadow-2xl flex items-center justify-center">
                <img src="/images/logo/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold font-mono">
                Conceito & Filosofia
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-['Syne'] text-white uppercase tracking-tight leading-tight">
              Mais que Cabelo, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                Uma Metamorfose de Autoestima.
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              O <strong>Metamorfose Hair</strong> nasceu do desejo de criar um espaço onde cada cliente é recebido com carinho, técnica de ponta e respeito à sua história. Unimos o que há de mais refinado em <strong>tranças afro-brasileiras</strong>, <strong>cortes masculinos e femininos autorais na navalha</strong> e <strong>tratamentos que recuperam a vida dos fios</strong>.
            </p>

            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
              Acreditamos que o visual certo transforma a postura, abre portas e fortalece quem você realmente é. Seja para um evento, transição capilar ou seu corte do dia a dia, você encontra excelência e afeto aqui.
            </p>

            {/* Checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Especialistas em Tranças Afro (Sarah Menezes)',
                'Barbearia Moderna & Hair Tattoo (Ana Alice)',
                'Mechas & Gloss Espelhado (Ilda Rodrigues)',
                'Cursos VIP & Formação de Profissionais',
                'Ambiente Climatizado & Acolhedor',
                'Produtos Profissionais de Alto Padrão',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Stat Bar */}
            <div className="mt-10 pt-8 border-t border-neutral-800/80 flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-black font-['Syne'] text-white">3</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono mt-0.5">
                  Especialistas Dedicadas
                </div>
              </div>
              <div>
                <div className="text-3xl font-black font-['Syne'] text-amber-400">+1.000</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono mt-0.5">
                  Transformações Realizadas
                </div>
              </div>
              <div>
                <div className="text-3xl font-black font-['Syne'] text-white">100%</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-mono mt-0.5">
                  Arte & Visagismo Autoral
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
