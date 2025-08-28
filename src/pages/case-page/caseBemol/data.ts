import { CaseInterface } from "../../../interfaces/case";
import case2img from "../../../assets/cases/case2.webp";
import bemolBSFMiniImg from "../../../assets/cases/bemolBSFMiniImg.webp";
import caseBemolPreviewImg from "../../../assets/cases/preview/contaBemolPreview.webp";

export const caseBemolData: CaseInterface = {
  id: 1,
  nome: "Case 01 - Conta Digital e Empréstimo Pessoal",
  projeto: "Bemol BSF (Bemol Serviços Financeiros)",
  data: "2022-2024",
  path: "case-1",
  tipoDeCase: "sucesso",
  bgColor: "#526FDC",
  imgHover: case2img,
  miniImg: bemolBSFMiniImg,
  CasePreview: {
    title: "1. Conta Bemol",
    description: "Serviços Financeiros",
    img: caseBemolPreviewImg,
  },
  contextTxt: "Atuação abrangente em conta digital (Conta Bemol), com responsabilidade direta sobre o produto de empréstimos (Empréstimo Pessoal) — conduzindo todo o ciclo de design, desde pesquisas (etapa de Descoberta) à entrega e estratégia do acompanhamento de métricas pós lançamento.",
  summary: {
    color: "#FFFFFF",
    items: [
      {
        id: "1.1",
        href: "#chapter-1-1",
        isSpecial: false,
        readingTime: 3,
        title: "Resgatando clientes no fluxo de empréstimo por notificações segmentadas",
        subtitle: "Apoio: Equipe de Marketing e equipe de Dados.",
      },
      {
        id: "1.2 e 1.3",
        href: "#chapter-1-2",
        isSpecial: false,
        readingTime: 1,
        title: "Outras entregas",
      },
      {
        id: "1.4",
        href: "#chapter-1-4",
        isSpecial: true,
        readingTime: 0.5,
        title: "Escolha da data do vencimento das parcelas de empréstimo (prévia)",
        specialNote: "Case exclusivo para apresentação pessoal)",
      },
    ],
  },
  tools: [
    {
      value: "figma",
    },
    {
      value: "asana",
    },
    {
      value: "ux",
    },
    {
      value: "adobe",
    },
    {
      value: "db",
    },
  ],
};