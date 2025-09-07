import { ProcessDataApp } from "../../../interfaces/content";
import ifood from "../../../assets/melliuz/ifood.webp";
import next from "../../../assets/melliuz/next.webp";
import {
  InsightCardsProps,
  SimpleVerticalTimelineItem,
} from "../../../interfaces";

export const processDataApp: ProcessDataApp = [
  {
    title: "Planning",
    lists: ["Questionamentos;", "Alinhamento", "Plano de pesquisa."],
  },
  {
    title: "Discovery",
    lists: [
      "Imersão;",
      "Pesquisa exploratória;",
      "Benchmarking.",
      "Pontos de dor;",
      "Análises.",
    ],
  },
  {
    title: "Define",
    lists: [
      "Síntese dos insights;",
      "Perfil do usuário;",
      "Definição da solução.",
    ],
  },
  {
    title: "Develop",
    lists: ["deação;", "luxograma", "rototipação (Wireframes)."],
  },
  {
    title: "Delivery",
    lists: ["Apresentação (defesa);", "Documentação técnica."],
  },
  {
    title: "Follow-up",
    lists: ["(Próximos passos)."],
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
