import { ProcessDataApp } from "../../../types/processData";
import ifood from "../../../assets/melliuz/ifood.webp";
import next from "../../../assets/melliuz/next.webp";
import { InsightCardsProps } from "../../../interfaces";

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
