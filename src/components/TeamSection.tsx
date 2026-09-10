import React from 'react';
import { TEAM_MEMBERS } from '../config/salon';
import { Award, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface TeamSectionProps {
  onSelectStylist: (name: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onSelectStylist }) => {
  return (
    <section id="equipe" className="relative w-full bg-[#080808] py-24 sm:py-32 px-4 sm:px-8 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold font-mono">
              Artistas & Especialistas
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-['Syne'] tracking-tight text-white uppercase">
            Mãos que Transformam
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-medium">
            Conheça as profissionais por trás das transformações mais marcantes de Campo Grande. Cada uma traz anos de dedicação, técnica e paixão pela valorização da sua beleza única.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl bg-neutral-950 border border-neutral-800/80 overflow-hidden flex flex-col justify-between hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500"
            >
              {/* Image & Header */}
              <div>
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                      <Award className="w-3 h-3 text-amber-400" />
                      {member.badge}
                    </span>
                  </div>

                  {/* Instagram handle overlay */}
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/80 hover:bg-amber-400 text-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>{member.instagramHandle}</span>
                  </a>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400/90 font-mono">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-bold font-['Syne'] text-white mt-1">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                    {member.bio}
                  </p>

                  {/* Specialties List */}
                  <div className="mt-6 pt-6 border-t border-neutral-800/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-300 mb-3">
                      Especialidades:
                    </div>
                    <ul className="space-y-2">
                      {member.specialties.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectStylist(member.name)}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-900 hover:bg-amber-400 text-white hover:text-black border border-neutral-700/80 hover:border-amber-400 font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  Agendar com {member.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
