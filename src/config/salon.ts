export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  instagram: string;
  instagramHandle: string;
  photo: string;
  bio: string;
  specialties: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'trancas' | 'cortes' | 'tratamentos';
  duration: string;
  description: string;
  stylist: string;
  recommendedFor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'trancas' | 'cortes' | 'tratamentos';
  image: string;
  stylist: string;
  stylistHandle: string;
  tag: string;
}

export const SALON_CONFIG = {
  name: 'Metamorfose Hair',
  tagline: 'Onde sua identidade ganha poder e arte capilar.',
  description: 'Referência em Campo Grande - MS em tranças afro-brasileiras, cortes masculinos e femininos autorais, freestyle hair tattoo navalhado e mechas de alta precisão.',
  address: 'R. Hugo Pereira do Vale, 791 - Mata do Jacinto, Campo Grande - MS',
  googleMapsUrl: 'https://www.google.com/maps/place/Metamorfose+Hair/data=!4m2!3m1!1s0x0:0x490153585ad2e49a?sa=X&ved=1t:2428&ictx=111',
  googleMapsEmbed: 'https://maps.google.com/maps?q=Metamorfose+Hair+Rua+Hugo+Pereira+do+Vale+791+Campo+Grande+MS&t=&z=16&ie=UTF8&iwloc=&output=embed',
  instagram: 'https://www.instagram.com/metamorfosehair_/',
  instagramHandle: '@metamorfosehair_',
  whatsapp: '5567999999999', // Configuravel facilmente
  linktree: 'https://bit.ly/3ob3jXd',
  hours: [
    { days: 'Terça a Sexta', hours: '08:30 — 19:00' },
    { days: 'Sábado', hours: '08:00 — 19:30' },
    { days: 'Domingo e Segunda', hours: 'Fechado (Atendimento com hora marcada especial)' },
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'sarah-menezes',
    name: 'Sarah Menezes',
    role: 'Especialista em Tranças Afro-Brasileiras',
    badge: 'Embaixadora @hellohairbrasil',
    instagram: 'https://www.instagram.com/sararabraids_/',
    instagramHandle: '@sararabraids_',
    photo: '/images/team/sarah.jpg',
    bio: 'Referência no Mato Grosso do Sul em tranças afro-brasileiras, divisões de extrema precisão, faux locs, twists e ministra cursos profissionais presenciais.',
    specialties: ['Tranças Nagô Artísticas', 'Box Braids & French Curls', 'Twist Marley & Passion Twist', 'Faux Locs & Retwist', 'Cursos de Tranças VIP'],
  },
  {
    id: 'ana-alice',
    name: 'Ana Alice',
    role: 'Barbeira & Hairstylist',
    badge: 'Freestyle Hair Art & Navalhado',
    instagram: 'https://www.instagram.com/anaalicehair_/',
    instagramHandle: '@anaalicehair_',
    photo: '/images/team/ana_alice.jpg',
    bio: 'Especialista em visagismo contemporâneo, fades precisos com lâmina afiada, desenhos geométricos (hair tattoo), cortes unissex texturizados e colorimetria moderna.',
    specialties: ['Degradê / Fade de Alta Definição', 'Hair Tattoo & Arte Navalhada', 'Cortes Modernos Masculinos e Femininos', 'Barboterapia & Alinhamento', 'Cores Fantasia & Descoloração Global'],
  },
  {
    id: 'ilda-rodrigues',
    name: 'Ilda Rodrigues',
    role: 'Cabeleireira & Terapeuta Capilar',
    badge: 'Colorimetria & Loiras Iluminadas',
    instagram: 'https://www.instagram.com/ildarodrigueshair_/',
    instagramHandle: '@ildarodrigueshair_',
    photo: '/images/team/ilda.jpg',
    bio: 'Mais de 15 anos transformando fios com técnicas de mechas loiras e morena iluminada, alinhamento térmico com brilho espelhado, tratamento Gloss Express e recuperação pós-química.',
    specialties: ['Mechas Criativas & Morena Iluminada', 'Gloss Express Brilho Espelhado', 'Definição & Corte de Cachos', 'Realinhamento & Selagem Inteligente', 'Cronograma de Reconstrução Capilar'],
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'trancas-nago',
    title: 'Tranças Nagô & Desenhos Personalizados',
    category: 'trancas',
    duration: '1h30 - 3h',
    description: 'Tranças rasteiras coladas no couro cabeludo com geometria precisa, padrões autorais, baby hair desenhado e finalização de alto padrão.',
    stylist: 'Sarah Menezes',
    recommendedFor: 'Eventos, estilo marcante e proteção dos fios naturais.',
  },
  {
    id: 'box-braids',
    title: 'Box Braids & French Curls',
    category: 'trancas',
    duration: '4h - 6h',
    description: 'Tranças soltas de comprimento médio a extra longo com pontas finas, enroladas ou retas, usando fibra antialérgica de alta qualidade.',
    stylist: 'Sarah Menezes',
    recommendedFor: 'Transição capilar, praticidade e visual imponente.',
  },
  {
    id: 'twist-locs',
    title: 'Twist Marley & Retwist de Locs',
    category: 'trancas',
    duration: '3h - 5h',
    description: 'Manutenção completa de dreads/locs e aplicação de twists leves com acabamento texturizado sofisticado.',
    stylist: 'Sarah Menezes',
    recommendedFor: 'Amantes da estética rasta e textura leve.',
  },
  {
    id: 'fade-freestyle',
    title: 'Fade Navalhado + Hair Tattoo Freestyle',
    category: 'cortes',
    duration: '45min - 1h',
    description: 'Degradê em transição perfeita (low, mid ou high fade) finalizado na navalha com linhas geométricas ou traços artísticos à mão livre.',
    stylist: 'Ana Alice',
    recommendedFor: 'Quem busca exclusividade máxima e precisão impecável.',
  },
  {
    id: 'corte-moderno',
    title: 'Corte Unissex Texturizado & Finalização',
    category: 'cortes',
    duration: '45min',
    description: 'Cortes como mullet moderno, wolf cut, taper fade e moicano afro estilizado sob medida para o formato do rosto.',
    stylist: 'Ana Alice',
    recommendedFor: 'Personalidades autênticas e corte com atitude.',
  },
  {
    id: 'gloss-express',
    title: 'Gloss Express & Banho de Brilho',
    category: 'tratamentos',
    duration: '1h',
    description: 'Tratamento intensivo que sela as cutículas, devolve a massa lipídica e confere um espelhamento luminoso aos fios escuros, grisalhos ou claros.',
    stylist: 'Ilda Rodrigues',
    recommendedFor: 'Cabelos opacos ou que precisam de revitalização imediata.',
  },
  {
    id: 'mechas-loiro',
    title: 'Mechas Morena Iluminada & Loiras de Luxo',
    category: 'tratamentos',
    duration: '3h30 - 5h',
    description: 'Técnicas de mechas preservando a integridade da fibra capilar, esfumado de raiz e matização personalizada.',
    stylist: 'Ilda Rodrigues',
    recommendedFor: 'Transformações de alto impacto e luminosidade elegante.',
  },
  {
    id: 'cachos-nutricao',
    title: 'Definição de Cachos & Terapia de Nutrição',
    category: 'tratamentos',
    duration: '1h30',
    description: 'Higienização profunda, acidificação, fitagem mecha a mecha e finalização com difusor para cachos soltos e com memória.',
    stylist: 'Ilda Rodrigues',
    recommendedFor: 'Cabelos ondulados, cacheados e crespos (2A ao 4C).',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Trança Nagô Artística & Baby Hair Esculpido',
    category: 'trancas',
    image: '/images/gallery/sarah_04.jpg',
    stylist: 'Sarah Menezes',
    stylistHandle: '@sararabraids_',
    tag: 'Nagô Autoral',
  },
  {
    id: 'gal-02',
    title: 'Hair Tattoo Geométrico & Fade na Navalha',
    category: 'cortes',
    image: '/images/gallery/meta_09.jpg',
    stylist: 'Ana Alice',
    stylistHandle: '@anaalicehair_',
    tag: 'Arte Navalhada',
  },
  {
    id: 'gal-03',
    title: 'Gloss Express & Grisalho Luminoso',
    category: 'tratamentos',
    image: '/images/gallery/meta_04.jpg',
    stylist: 'Ilda Rodrigues',
    stylistHandle: '@ildarodrigueshair_',
    tag: 'Brilho Espelhado',
  },
  {
    id: 'gal-04',
    title: 'Divisão de Alta Precisão & Linhas Perfeitas',
    category: 'trancas',
    image: '/images/gallery/sarah_02.jpg',
    stylist: 'Sarah Menezes',
    stylistHandle: '@sararabraids_',
    tag: 'Técnica VIP',
  },
  {
    id: 'gal-05',
    title: 'Corte Moicano Afro & Desenho Tribal',
    category: 'cortes',
    image: '/images/gallery/ana_04.jpg',
    stylist: 'Ana Alice',
    stylistHandle: '@anaalicehair_',
    tag: 'Moicano Freestyle',
  },
  {
    id: 'gal-06',
    title: 'Box Braids Longas com Acabamento Macio',
    category: 'trancas',
    image: '/images/gallery/meta_08.jpg',
    stylist: 'Sarah Menezes',
    stylistHandle: '@sararabraids_',
    tag: 'Box Braids',
  },
  {
    id: 'gal-07',
    title: 'Ruivo Cobre Espelhado em Bob Médio',
    category: 'tratamentos',
    image: '/images/gallery/meta_03.jpg',
    stylist: 'Ilda Rodrigues',
    stylistHandle: '@ildarodrigueshair_',
    tag: 'Colorimetria',
  },
  {
    id: 'gal-08',
    title: 'Tranças Nagô Vinho Bordô com Joias',
    category: 'trancas',
    image: '/images/gallery/sarah_03.jpg',
    stylist: 'Sarah Menezes',
    stylistHandle: '@sararabraids_',
    tag: 'Penteado Afro',
  },
  {
    id: 'gal-09',
    title: 'Fade Masculino com Tranças Nagô Superiores',
    category: 'cortes',
    image: '/images/gallery/ana_08.jpg',
    stylist: 'Ana Alice & Sarah',
    stylistHandle: '@metamorfosehair_',
    tag: 'Fade & Nagô',
  },
  {
    id: 'gal-10',
    title: 'Goddess Braids com Pontas Soltas Espessas',
    category: 'trancas',
    image: '/images/gallery/meta_10.jpg',
    stylist: 'Sarah Menezes',
    stylistHandle: '@sararabraids_',
    tag: 'Goddess Braids',
  },
  {
    id: 'gal-11',
    title: 'Cachos Definidos com Iluminação Caramelo',
    category: 'tratamentos',
    image: '/images/gallery/meta_02.jpg',
    stylist: 'Ilda Rodrigues',
    stylistHandle: '@ildarodrigueshair_',
    tag: 'Cachos & Iluminado',
  },
  {
    id: 'gal-12',
    title: 'Coloração Azul Royal Vibrante',
    category: 'cortes',
    image: '/images/gallery/ana_10.jpg',
    stylist: 'Ana Alice',
    stylistHandle: '@anaalicehair_',
    tag: 'Cor Fantasia',
  },
  {
    id: 'gal-13',
    title: 'Twist Marley Hair Textura Natural',
    category: 'trancas',
    image: '/images/gallery/sarah_06.jpg',
    stylist: 'Sarah Menezes',
    stylistHandle: '@sararabraids_',
    tag: 'Twist Marley',
  },
  {
    id: 'gal-14',
    title: 'Short Pixie Loiro Platinado Moderno',
    category: 'cortes',
    image: '/images/gallery/meta_01.jpg',
    stylist: 'Metamorfose Hair',
    stylistHandle: '@metamorfosehair_',
    tag: 'Pixie Cut',
  },
  {
    id: 'gal-15',
    title: 'Retwist e Alinhamento de Locs / Dreads',
    category: 'trancas',
    image: '/images/gallery/sarah_12.jpg',
    stylist: 'Sarah Menezes',
    stylistHandle: '@sararabraids_',
    tag: 'Locs Retwist',
  },
  {
    id: 'gal-16',
    title: 'Hair Tattoo Padrão Labirinto Navalhado',
    category: 'cortes',
    image: '/images/gallery/ana_11.jpg',
    stylist: 'Ana Alice',
    stylistHandle: '@anaalicehair_',
    tag: 'Hair Tattoo',
  },
];