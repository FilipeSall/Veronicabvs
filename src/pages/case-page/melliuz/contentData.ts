import {
  CardsEnumeradosInterface,
  ProcessDataApp,
} from "../../../interfaces/content";
import ifood from "../../../assets/melliuz/ifood.webp";
import next from "../../../assets/melliuz/next.webp";
import {
  InsightCardsProps,
  SimpleVerticalTimelineItem,
} from "../../../interfaces";
import phone1 from "../../../assets/melliuz/phone1.webp";
import phone2 from "../../../assets/melliuz/phone2.webp";

import svg1 from "../../../assets/melliuz/engajamento.svg";
import svg2 from "../../../assets/melliuz/organico.svg";
import svg3 from "../../../assets/melliuz/acessibilidade.svg";
import svg4 from "../../../assets/melliuz/gamificacao.svg";

export const processDataApp: ProcessDataApp = [
  {
    title: "Planning",
    lists: ["Questionamentos", "Alinhamento", "Plano de pesquisa"],
  },
  {
    title: "Discovery",
    lists: [
      "Imersão",
      "Pesquisa exploratória",
      "Benchmarking",
      "Pontos de dor",
      "Análises",
    ],
  },
  {
    title: "Define",
    lists: [
      "Síntese dos insights",
      "Perfil do usuário",
      "Definição da solução",
    ],
  },
  {
    title: "Develop",
    lists: ["Ideação", "Fluxograma", "Prototipação (Wireframes)"],
  },
  {
    title: "Delivery",
    lists: ["Apresentação (defesa)", "Documentação técnica"],
  },
  {
    title: "Follow-up",
    lists: ["(Próximos passos)"],
  },
];

export const insightsCardsValue: InsightCardsProps[] = [
  {
    img: next,
    text: "Dentre as empresas analisadas, apenas o banco Next oferece a opção de doação sem custos adicionais",
  },
  {
    img: ifood,
    text: "Dentre as empresas analisadas, apenas o banco iFood oferece o compartilhamento da ação",
  },
];

export const evidenciasTimelineData: SimpleVerticalTimelineItem[] = [
  {
    title: "Baby Boomers",
    description:
      "35% Já participaram de campanhas  de crowdfunding; 72% Fazem doações anuais; 21% Já utilizaram ferramentas online para doar (Meta).",
  },
  {
    title: "Geração X",
    description:
      "45% Já participaram de campanhas  de crowdfunding; 31% São inspirados a doar por e mail;19% Já utilizaram ferramentas online para doar (Meta).",
  },
  {
    title: "Millenials",
    description:
      "46% Já participaram de campanhas  de crowdfunding; 47% Já doaram pelo site de uma organização; 31% Já utilizaram ferramentas online para doar (Meta).",
  },
];

export const entryPoint1Data = [
  {
    description: "Na tela de Extrato, acessa ícone de doação na parte superior",
    image: phone1,
  },
  {
    description: "Opta pelo botão sugestivo para doar 100 reais",
    image: phone2,
  },
];

export const entregaValorData = [
  {
    img: svg1,
    title: "ENGAJAMENTO E PROVA SOCIAL",
    text: "O compartilhamento incentiva seguidores a fazerem o mesmo, e a prova social aumenta a confiança e o desejo de pertencimento.",
  },
  {
    img: svg2,
    title: "ALCANCE ORGÂNICO",
    text: "Cada compartilhamento atua como marketing gratuito, ampliando a visibilidade da funcionalidade sem custo adicional.",
  },
  {
    img: svg3,
    title: "FACILIDADE E ACESSIBILIDADE",
    text: "O story já pronto reduz fricção, permitindo que o usuário compartilhe sua doação de forma rápida e sem esforço.",
  },
  {
    img: svg4,
    title: "GAMIFICAÇÃO E SENTIMENTO DE RECOMPENSA",
    text: "Conquistas ou mensagens de agradecimento no story reforça a sensação de impacto positivo, e incentiva novas doações.",
  },
];

export const potencialImpacto: CardsEnumeradosInterface[] = [
  {
    title: "Compartilhamento",
    text: "O story pré-pronto incentiva o compartilhamento social, funcionando como marketing orgânico sem custos adicionais.",
  },
  {
    title: "2 Entry Points",
    text: "A presença de 2 Entry Points estratégicos facilita a descoberta da funcionalidade, incentivando a interação dos usuários.",
  },
  {
    title: "Impacto ampliado",
    text: "O compartilhamento via stories amplia o impacto da funcionalidade, alcançando novos usuários sem necessidade de investimento em mídia paga.",
  },
  {
    title: "Redução de barreiras",
    text: "A nova jornada de doação reduz barreiras, tornando o processo mais simples e fluido.",
  },
  {
    title: "Engajamento e recorrência",
    text: "A nova jornada de doação reduz barreiras, tornando o processo mais simples e fluido.",
  },
];
