# Metamorfose Hair — Studio de Beleza & Arte Capilar

Website institucional de alta performance desenvolvido para o estúdio **Metamorfose Hair** (Campo Grande - MS). Inspirado na estética minimalista e editorial de moda ("prmpt" style), com transições scroll-driven, hero com vídeo interativo, galeria dinâmica espalhada (scattered grid) e agendamento direto via WhatsApp.

---

## 🌟 Principais Funcionalidades

- **Design Editorial & Luxuoso**: Paleta em preto profundo acetinado, ouro/amber metálico (`#f59e0b`), tipografia Inter Tight e Syne com modo `mix-blend-mode: exclusion`.
- **Hero Interativo (100vh)**:
  - No Desktop: controle de scrubbing do vídeo de cuidados e arte capilar através da posição do cursor com zona morta central suave.
  - No Mobile: reprodução alternada fluida e responsiva com economia de bateria.
  - Cursor customizado magnético com glifo tribal da borboleta oficial.
- **Galeria Scattered Scroll-Driven**:
  - Grid espalhado com cálculo dinâmico de escala por frame (`requestAnimationFrame`) que reduz e expande os cards conforme entram e saem do viewport.
  - 36 fotos reais extraídas dos perfis oficiais das profissionais.
  - Filtros por categoria: *Tranças & Locs*, *Cortes & Fade*, *Cachos & Mechas*.
  - Modal interativo com zoom, técnica e botão direto para agendar o estilo no WhatsApp.
- **Equipe em Destaque**:
  - **Sarah Menezes (@sararabraids_)**: Especialista em tranças afro-brasileiras, nagô artística e embaixadora @hellohairbrasil.
  - **Ana Alice (@anaalicehair_)**: Barbeira & Hairstylist, degradê na lâmina, freestyle hair tattoo e cortes modernos.
  - **Ilda Rodrigues (@ildarodrigueshair_)**: Cabeleireira especialista em mechas, loiras iluminadas, gloss express e cachos.
- **Localização & Acesso**:
  - Endereço oficial: *R. Hugo Pereira do Vale, 791 - Mata do Jacinto, Campo Grande - MS*.
  - Integração com Google Maps interativo, Waze e horários de funcionamento.
- **Conversão Direta no WhatsApp**:
  - Botão pill flutuante com animação de escala conforme o scroll.
  - Modal de agendamento que monta uma mensagem personalizada com nome, serviço, profissional e período de preferência.

---

## 🛠️ Stack Tecnológica

- **React 19** + **TypeScript**
- **Vite 6** com `@vitejs/plugin-react`
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **Framer Motion 13**
- **GSAP 3.15** + `@gsap/react`
- **Lucide React** + Ícones SVG customizados
- **Google Fonts**: Inter Tight & Syne

---

## 🚀 Como Rodar Localmente

```bash
# Entrar na pasta do projeto
cd "E:\PROJETOS ANTIGRAVITY\metamorfose-hair"

# Instalar dependências (caso não tenha instalado)
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Abra `http://localhost:5173` no navegador.

Para gerar o build de produção:
```bash
npm run build
```

---

## 📦 Como Subir para o GitHub (brandkaru@gmail.com)

1. Crie um novo repositório no seu GitHub (exemplo: `metamorfose-hair`).
2. No terminal, dentro da pasta `metamorfose-hair`, vincule o repositório remoto e envie o código:

```bash
# Vincular ao seu repositório no GitHub
git remote add origin https://github.com/SEU_USUARIO_GITHUB/metamorfose-hair.git

# Enviar o código para a branch main
git branch -M main
git push -u origin main
```

---

## ⚡ Como Publicar na Vercel

### Opção 1: Via Painel Web da Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub (`brandkaru@gmail.com`).
2. Clique em **"Add New..."** -> **"Project"**.
3. Selecione o repositório `metamorfose-hair`.
4. A Vercel detectará automaticamente as configurações através do `vercel.json` e `vite`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Clique em **"Deploy"**. Em menos de 1 minuto seu site estará no ar com HTTPS gratuito!

### Opção 2: Via Vercel CLI no Terminal
```bash
# Instalar ou rodar a CLI da Vercel
npx vercel

# Para publicar direto em produção:
npx vercel --prod
```

---

## 📍 Configuração de Dados e Contatos

Todas as informações de WhatsApp, endereço, horário e redes sociais estão centralizadas em um único arquivo:
`src/config/salon.ts`

Para alterar o número de WhatsApp que recebe os agendamentos, basta editar o campo `whatsapp` em `src/config/salon.ts`.
