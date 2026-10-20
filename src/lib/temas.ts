// Os 4 temas prontos. A aluna escolhe um pelo campo `tema` em src/data/creator.ts
// e pode trocar fundo, texto e destaque pelo campo `cores`.
// Para criar um tema novo: copie um bloco de TEMAS, mude o nome e as cores, e adicione
// as fontes em FONTES (o pacote @fontsource precisa estar instalado).

export const FONTES = {
  fraunces: { nome: 'Fraunces', pesos: [400, 600], italico: true, generica: 'serif' },
  instrumentSerif: { nome: 'Instrument Serif', pesos: [400], italico: true, generica: 'serif' },
  youngSerif: { nome: 'Young Serif', pesos: [400], italico: false, generica: 'serif' },
  bricolage: { nome: 'Bricolage Grotesque', pesos: [700], italico: false, generica: 'sans-serif' },
  instrumentSans: { nome: 'Instrument Sans', pesos: [400, 600], italico: false, generica: 'sans-serif' },
  inter: { nome: 'Inter', pesos: [400, 600], italico: false, generica: 'sans-serif' },
  figtree: { nome: 'Figtree', pesos: [400, 600], italico: false, generica: 'sans-serif' },
  dmSans: { nome: 'DM Sans', pesos: [400, 600], italico: false, generica: 'sans-serif' },
} as const;

export type ChaveFonte = keyof typeof FONTES;

// peso/caixa/espacamento: como os títulos aparecem. raio: arredondamento dos cantos.
// escala: tamanho dos títulos (fontes largas pedem menos de 1, fontes estreitas mais).
// letra: largura média de uma letra do título (em "em"), usada para o nome nunca sair da tela.
export const TEMAS = {
  // Papel creme, tinta preta e vermelho-tomate. Revista de beleza impressa.
  revista: {
    fundo: '#F3EEE6', texto: '#191714', destaque: '#C2361B', titulo: 'fraunces', corpo: 'instrumentSans',
    peso: 400, caixa: 'none', espacamento: '-0.02em', raio: '2px', escala: 1, letra: 0.6,
  },
  // Escuro, com verde-limão. Bom para tech, games, fitness.
  noite: {
    fundo: '#121114', texto: '#F2EFEA', destaque: '#C8F542', titulo: 'bricolage', corpo: 'inter',
    peso: 700, caixa: 'uppercase', espacamento: '-0.03em', raio: '0px', escala: 0.8, letra: 0.76,
  },
  // Rosa-chiclete, ameixa e azul-cobalto. Divertido, para moda, maquiagem, infantil.
  rosa: {
    fundo: '#FBE4EA', texto: '#3A1430', destaque: '#2B45D8', titulo: 'youngSerif', corpo: 'figtree',
    peso: 400, caixa: 'none', espacamento: '-0.02em', raio: '20px', escala: 0.86, letra: 0.66,
  },
  // Verde-sálvia, verde-floresta e terracota. Casa, bem-estar, comida, natureza.
  terra: {
    fundo: '#E5E8DC', texto: '#1E2B22', destaque: '#A64B2A', titulo: 'instrumentSerif', corpo: 'dmSans',
    peso: 400, caixa: 'none', espacamento: '-0.01em', raio: '8px', escala: 1.12, letra: 0.46,
  },
} as const satisfies Record<
  string,
  {
    fundo: string; texto: string; destaque: string; titulo: ChaveFonte; corpo: ChaveFonte;
    peso: number; caixa: 'none' | 'uppercase'; espacamento: string; raio: string; escala: number; letra: number;
  }
>;

export type NomeTema = keyof typeof TEMAS;

export const variavelDaFonte = (chave: ChaveFonte) => `--fonte-${chave}` as const;
