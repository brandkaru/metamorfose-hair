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
  fullImage?: string;
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
    "id": "gal-01",
    "title": "Degradê Mid Fade na Navalha",
    "category": "cortes",
    "image": "/images/gallery/work_01.jpg",
    "fullImage": "/images/gallery/full_01.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-02",
    "title": "Hair Tattoo Linhas Geométricas",
    "category": "cortes",
    "image": "/images/gallery/work_02.jpg",
    "fullImage": "/images/gallery/full_02.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-03",
    "title": "Taper Fade com Barba Alinhada",
    "category": "cortes",
    "image": "/images/gallery/work_03.jpg",
    "fullImage": "/images/gallery/full_03.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-04",
    "title": "Trança Nagô Artística com Joias",
    "category": "trancas",
    "image": "/images/gallery/work_04.jpg",
    "fullImage": "/images/gallery/full_04.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-05",
    "title": "Box Braids Longas com Pontas Finas",
    "category": "trancas",
    "image": "/images/gallery/work_05.jpg",
    "fullImage": "/images/gallery/full_05.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-06",
    "title": "Twist Marley Hair Texturizado",
    "category": "trancas",
    "image": "/images/gallery/work_06.jpg",
    "fullImage": "/images/gallery/full_06.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-07",
    "title": "Nagô Geométrica com Divisão Perfeita",
    "category": "trancas",
    "image": "/images/gallery/work_07.jpg",
    "fullImage": "/images/gallery/full_07.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-08",
    "title": "Goddess Braids com Cachos Soltos",
    "category": "trancas",
    "image": "/images/gallery/work_08.jpg",
    "fullImage": "/images/gallery/full_08.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-09",
    "title": "Faux Locs com Acabamento Macio",
    "category": "trancas",
    "image": "/images/gallery/work_09.jpg",
    "fullImage": "/images/gallery/full_09.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-10",
    "title": "Retwist de Locs & Alinhamento",
    "category": "trancas",
    "image": "/images/gallery/work_10.jpg",
    "fullImage": "/images/gallery/full_10.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-11",
    "title": "Gloss Express Brilho Espelhado",
    "category": "tratamentos",
    "image": "/images/gallery/work_11.jpg",
    "fullImage": "/images/gallery/full_11.jpg",
    "stylist": "Ilda Rodrigues",
    "stylistHandle": "@ildarodrigueshair_",
    "tag": "Mechas & Brilho"
  },
  {
    "id": "gal-12",
    "title": "Morena Iluminada em Tons Caramelo",
    "category": "tratamentos",
    "image": "/images/gallery/work_12.jpg",
    "fullImage": "/images/gallery/full_12.jpg",
    "stylist": "Ilda Rodrigues",
    "stylistHandle": "@ildarodrigueshair_",
    "tag": "Mechas & Brilho"
  },
  {
    "id": "gal-13",
    "title": "Loiro Pérola com Raiz Esfumada",
    "category": "tratamentos",
    "image": "/images/gallery/work_13.jpg",
    "fullImage": "/images/gallery/full_13.jpg",
    "stylist": "Ilda Rodrigues",
    "stylistHandle": "@ildarodrigueshair_",
    "tag": "Mechas & Brilho"
  },
  {
    "id": "gal-14",
    "title": "Trança Nagô Top Knot Updo",
    "category": "trancas",
    "image": "/images/gallery/work_14.jpg",
    "fullImage": "/images/gallery/full_14.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-15",
    "title": "French Curl Braids Loiro Mel",
    "category": "trancas",
    "image": "/images/gallery/work_15.jpg",
    "fullImage": "/images/gallery/full_15.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-16",
    "title": "Penteado Afro Sofisticado para Evento",
    "category": "trancas",
    "image": "/images/gallery/work_16.jpg",
    "fullImage": "/images/gallery/full_16.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-17",
    "title": "Nagô Lateral com Baby Hair Desenhado",
    "category": "trancas",
    "image": "/images/gallery/work_17.jpg",
    "fullImage": "/images/gallery/full_17.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-18",
    "title": "Box Braids Vinho Marsala",
    "category": "trancas",
    "image": "/images/gallery/work_18.jpg",
    "fullImage": "/images/gallery/full_18.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-19",
    "title": "Tranças Rasteiras Masculinas",
    "category": "trancas",
    "image": "/images/gallery/work_19.jpg",
    "fullImage": "/images/gallery/full_19.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-20",
    "title": "Knotless Braids Leves e Sem Tensão",
    "category": "trancas",
    "image": "/images/gallery/work_20.jpg",
    "fullImage": "/images/gallery/full_20.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-21",
    "title": "Penteado Trançado Conceitual",
    "category": "trancas",
    "image": "/images/gallery/work_21.jpg",
    "fullImage": "/images/gallery/full_21.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-22",
    "title": "Nagô em Ziguezague de Alta Precisão",
    "category": "trancas",
    "image": "/images/gallery/work_22.jpg",
    "fullImage": "/images/gallery/full_22.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-23",
    "title": "Twist Afro Tradicional",
    "category": "trancas",
    "image": "/images/gallery/work_23.jpg",
    "fullImage": "/images/gallery/full_23.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-24",
    "title": "Trança Fulani com Acessórios Dourados",
    "category": "trancas",
    "image": "/images/gallery/work_24.jpg",
    "fullImage": "/images/gallery/full_24.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-25",
    "title": "Box Braids Tradicionais Extra Longas",
    "category": "trancas",
    "image": "/images/gallery/work_25.jpg",
    "fullImage": "/images/gallery/full_25.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-26",
    "title": "Trança Raiz Desenho Tribal",
    "category": "trancas",
    "image": "/images/gallery/work_26.jpg",
    "fullImage": "/images/gallery/full_26.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-27",
    "title": "Trança Nagô Estilizada",
    "category": "trancas",
    "image": "/images/gallery/work_27.jpg",
    "fullImage": "/images/gallery/full_27.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-28",
    "title": "Locs & Dreadlocks Manutenção",
    "category": "trancas",
    "image": "/images/gallery/work_28.jpg",
    "fullImage": "/images/gallery/full_28.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-29",
    "title": "Twist Passion Hair Leve",
    "category": "trancas",
    "image": "/images/gallery/work_29.jpg",
    "fullImage": "/images/gallery/full_29.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-30",
    "title": "Tranças Rasteiras com Desenho",
    "category": "trancas",
    "image": "/images/gallery/work_30.jpg",
    "fullImage": "/images/gallery/full_30.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-31",
    "title": "Penteado Trança Coroa Afro",
    "category": "trancas",
    "image": "/images/gallery/work_31.jpg",
    "fullImage": "/images/gallery/full_31.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  },
  {
    "id": "gal-32",
    "title": "Definição de Cachos com Difusor",
    "category": "tratamentos",
    "image": "/images/gallery/work_32.jpg",
    "fullImage": "/images/gallery/full_32.jpg",
    "stylist": "Ilda Rodrigues",
    "stylistHandle": "@ildarodrigueshair_",
    "tag": "Mechas & Brilho"
  },
  {
    "id": "gal-33",
    "title": "Recuperação Capilar Pós-Química",
    "category": "tratamentos",
    "image": "/images/gallery/work_33.jpg",
    "fullImage": "/images/gallery/full_33.jpg",
    "stylist": "Ilda Rodrigues",
    "stylistHandle": "@ildarodrigueshair_",
    "tag": "Mechas & Brilho"
  },
  {
    "id": "gal-34",
    "title": "Ruivo Acobreado Luminoso",
    "category": "tratamentos",
    "image": "/images/gallery/work_34.jpg",
    "fullImage": "/images/gallery/full_34.jpg",
    "stylist": "Ilda Rodrigues",
    "stylistHandle": "@ildarodrigueshair_",
    "tag": "Mechas & Brilho"
  },
  {
    "id": "gal-35",
    "title": "Cronograma Capilar com Acidificação",
    "category": "tratamentos",
    "image": "/images/gallery/work_35.jpg",
    "fullImage": "/images/gallery/full_35.jpg",
    "stylist": "Ilda Rodrigues",
    "stylistHandle": "@ildarodrigueshair_",
    "tag": "Mechas & Brilho"
  },
  {
    "id": "gal-36",
    "title": "Mechas Criativas com Proteção Térmica",
    "category": "tratamentos",
    "image": "/images/gallery/work_36.jpg",
    "fullImage": "/images/gallery/full_36.jpg",
    "stylist": "Ilda Rodrigues",
    "stylistHandle": "@ildarodrigueshair_",
    "tag": "Mechas & Brilho"
  },
  {
    "id": "gal-37",
    "title": "Cachos 3B/3C Soltos e Hidratados",
    "category": "tratamentos",
    "image": "/images/gallery/work_37.jpg",
    "fullImage": "/images/gallery/full_37.jpg",
    "stylist": "Ilda Rodrigues",
    "stylistHandle": "@ildarodrigueshair_",
    "tag": "Mechas & Brilho"
  },
  {
    "id": "gal-38",
    "title": "Alinhamento Inteligente com Brilho",
    "category": "tratamentos",
    "image": "/images/gallery/work_38.jpg",
    "fullImage": "/images/gallery/full_38.jpg",
    "stylist": "Ilda Rodrigues",
    "stylistHandle": "@ildarodrigueshair_",
    "tag": "Mechas & Brilho"
  },
  {
    "id": "gal-39",
    "title": "Moicano Afro com Fade Lateral",
    "category": "cortes",
    "image": "/images/gallery/work_39.jpg",
    "fullImage": "/images/gallery/full_39.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-40",
    "title": "Corte Americano com Risco Cirúrgico",
    "category": "cortes",
    "image": "/images/gallery/work_40.jpg",
    "fullImage": "/images/gallery/full_40.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-41",
    "title": "Low Fade Texturizado",
    "category": "cortes",
    "image": "/images/gallery/work_41.jpg",
    "fullImage": "/images/gallery/full_41.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-42",
    "title": "Hair Tattoo Labirinto Freestyle",
    "category": "cortes",
    "image": "/images/gallery/work_42.jpg",
    "fullImage": "/images/gallery/full_42.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-43",
    "title": "Corte Masculino Social Moderno",
    "category": "cortes",
    "image": "/images/gallery/work_43.jpg",
    "fullImage": "/images/gallery/full_43.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-44",
    "title": "Navalhado Espelhado com Pomada Matte",
    "category": "cortes",
    "image": "/images/gallery/work_44.jpg",
    "fullImage": "/images/gallery/full_44.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-45",
    "title": "Mullet Moderno Texturizado",
    "category": "cortes",
    "image": "/images/gallery/work_45.jpg",
    "fullImage": "/images/gallery/full_45.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-46",
    "title": "Corte Unissex Contemporâneo",
    "category": "cortes",
    "image": "/images/gallery/work_46.jpg",
    "fullImage": "/images/gallery/full_46.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-47",
    "title": "Coloração Fantasia & Fade",
    "category": "cortes",
    "image": "/images/gallery/work_47.jpg",
    "fullImage": "/images/gallery/full_47.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-48",
    "title": "Barba Alinhada na Toalha Quente",
    "category": "cortes",
    "image": "/images/gallery/work_48.jpg",
    "fullImage": "/images/gallery/full_48.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-49",
    "title": "Freestyle Tribal na Lâmina",
    "category": "cortes",
    "image": "/images/gallery/work_49.jpg",
    "fullImage": "/images/gallery/full_49.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-50",
    "title": "Corte Buzz Cut com Degradê",
    "category": "cortes",
    "image": "/images/gallery/work_50.jpg",
    "fullImage": "/images/gallery/full_50.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-51",
    "title": "Texturização & Pompadour Fade",
    "category": "cortes",
    "image": "/images/gallery/work_51.jpg",
    "fullImage": "/images/gallery/full_51.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-52",
    "title": "Corte Infantil com Desenho Artístico",
    "category": "cortes",
    "image": "/images/gallery/work_52.jpg",
    "fullImage": "/images/gallery/full_52.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-53",
    "title": "Degradê Limpo com Navalha Afiada",
    "category": "cortes",
    "image": "/images/gallery/work_53.jpg",
    "fullImage": "/images/gallery/full_53.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-54",
    "title": "Fade Navalhado com Linhas Duplas",
    "category": "cortes",
    "image": "/images/gallery/work_54.jpg",
    "fullImage": "/images/gallery/full_54.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-55",
    "title": "High Fade com Risco Lateral",
    "category": "cortes",
    "image": "/images/gallery/work_55.jpg",
    "fullImage": "/images/gallery/full_55.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-56",
    "title": "Corte Navalhado Freestyle",
    "category": "cortes",
    "image": "/images/gallery/work_56.jpg",
    "fullImage": "/images/gallery/full_56.jpg",
    "stylist": "Ana Alice",
    "stylistHandle": "@anaalicehair_",
    "tag": "Corte & Fade"
  },
  {
    "id": "gal-57",
    "title": "Nagô Curvada de Alta Precisão",
    "category": "trancas",
    "image": "/images/gallery/work_57.jpg",
    "fullImage": "/images/gallery/full_57.jpg",
    "stylist": "Sarah Menezes",
    "stylistHandle": "@sararabraids_",
    "tag": "Trança Afro"
  }
];
