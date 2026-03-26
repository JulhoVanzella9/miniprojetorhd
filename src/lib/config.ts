// ============================================
// CONFIGURAÇÃO CENTRAL DO PRODUTO
// Altere aqui para personalizar rapidamente
// ============================================

export const PRODUCT = {
  name: "Mini Projetor HD",
  headline: "Transforme Qualquer Lugar em Cinema",
  subheadline: "TV Smart Portátil com Netflix, YouTube e Games na tela grande por menos de R$ 150",
  price: {
    original: 297,
    current: 129.9,
    currency: "R$",
  },
  // URL de compra — altere para o link do checkout
  buyUrl: "https://mercadolivre.com.br",
  // URL do vídeo de demonstração (YouTube ou MP4)
  videoUrl: "/demo.mp4",
  // Thumbnail do vídeo
  videoThumbnail: "/projetor-2.jpeg",
  urgency: {
    viewersMin: 47,
    viewersMax: 89,
    stock: "Últimas 15 unidades",
  },
  benefits: [
    {
      icon: "📺",
      title: "Tela de até 120 polegadas",
      description: "Imagem gigante em qualquer parede",
    },
    {
      icon: "📱",
      title: "Conecta no Celular",
      description: "Wi-Fi e USB — sem complicação",
    },
    {
      icon: "🔋",
      title: "Super Portátil",
      description: "Leve pra qualquer lugar",
    },
    {
      icon: "🔊",
      title: "Som Integrado",
      description: "Alto-falante embutido potente",
    },
    {
      icon: "🌙",
      title: "Imagem HD Nítida",
      description: "Resolução nativa 720p, suporta 1080p",
    },
    {
      icon: "⚡",
      title: "Fácil de Usar",
      description: "Liga e projeta em 30 segundos",
    },
  ],
  testimonials: [
    {
      name: "Mariana S.",
      avatar: "MS",
      rating: 5,
      text: "Comprei achando que era brinquedo, mas a qualidade da imagem me surpreendeu DEMAIS! Assisto Netflix toda noite na parede do quarto. Melhor compra do ano!",
    },
    {
      name: "Carlos R.",
      avatar: "CR",
      rating: 5,
      text: "Meus filhos amaram! A gente faz sessão de cinema no quintal todo fim de semana. Imagem nítida mesmo sem apagar todas as luzes.",
    },
    {
      name: "Ana Paula F.",
      avatar: "AF",
      rating: 5,
      text: "Uso pra apresentações no trabalho e pra assistir séries em casa. Muito prático e a qualidade é incrível pelo preço. Já recomendei pra todo mundo!",
    },
    {
      name: "Diego M.",
      avatar: "DM",
      rating: 5,
      text: "Joguei FIFA na parede do quarto com a imagem gigante. Experiência INSANA. Entrega chegou antes do prazo pelo Mercado Livre.",
    },
  ],
  faq: [
    {
      question: "Precisa de internet para funcionar?",
      answer: "O projetor em si não precisa de internet. Basta conectar seu celular via cabo USB ou Wi-Fi para espelhar a tela. Se seu celular tiver internet, você assiste Netflix, YouTube e tudo mais na telona!",
    },
    {
      question: "Funciona durante o dia ou só no escuro?",
      answer: "A melhor experiência é em ambiente com pouca luz, como à noite ou com cortinas fechadas. Mas em ambientes com luz moderada, a imagem ainda fica boa e visível.",
    },
    {
      question: "Qual o tamanho máximo da imagem?",
      answer: "A imagem pode chegar até 120 polegadas dependendo da distância da parede. O ideal para melhor nitidez é entre 60 a 80 polegadas (1,5m a 2,5m de distância).",
    },
    {
      question: "A entrega é segura?",
      answer: "Sim! A entrega é feita diretamente pelo Mercado Livre com rastreamento completo. Frete grátis para todo o Brasil e entrega em até 7 dias úteis.",
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Garantia de 30 dias pelo Mercado Livre. Se não gostar ou tiver qualquer problema, devolvemos seu dinheiro sem burocracia.",
    },
  ],
  guarantees: [
    { icon: "🚚", title: "Frete Grátis", subtitle: "Para todo Brasil" },
    { icon: "📦", title: "Entrega em 7 dias", subtitle: "Pelo Mercado Livre" },
    { icon: "🔒", title: "Compra Segura", subtitle: "Mercado Pago" },
    { icon: "↩️", title: "30 dias garantia", subtitle: "Devolução grátis" },
  ],
} as const;
