import { CaseInterface } from "../../../interfaces/case";
import case1img from "../../../assets/cases/case1.webp";
import case3imgOff from "../../../assets/cases/case3off.png";
import melliuzMiniImg from "../../../assets/cases/melliuuzMiniImg.webp";
import melliuzPreview from "../../../assets/cases/preview/melliuzPreview.webp";

export const melliuzData: CaseInterface = {
  id: 3,
  nome: "Case 03 - Doação de Cashback",
  projeto: "Méliuz",
  path: "case-3",
  bgColor: "#ED387B",
  imgHover: case1img,
  underConstruction: false,
  underConstructionImg: case3imgOff,
  miniImg: melliuzMiniImg,
  CasePreview: {
    title: "3. Méliuz",
    description: "Solução para Cashback",
    img: melliuzPreview,
  },
  contextTxt:
    "Etapa final do processo seletivo Méliuz para vaga Product Designer Pleno.\nDuração: 5 dias.\nResponsabilidade: Integral (candidata).",
  summary: {
    color: "#FFFFFF",
    items: [
      {
        id: "3.1",
        href: "#chapter-3-1",
        isSpecial: false,
        title: "Resultado — Doação de Cashback",
      },
      {
        id: "3.2",
        href: "#chapter-3-2",
        isSpecial: false,
        title: "Resultado — Doação de Cashback",
      },
      {
        id: "3.3",
        href: "#chapter-3-3",
        isSpecial: false,
        title: "Processo",
      },
      {
        id: "3.4",
        href: "#chapter-3-4",
        isSpecial: false,
        title: "Descobertas e evidências",
      },
      {
        id: "3.6",
        href: "#chapter-3-6",
        isSpecial: false,
        title: "Entrega de Valor",
      },
      {
        id: "3.7",
        href: "#chapter-3-7",
        isSpecial: false,
        title: "Potenciais de impacto",
      },
      {
        id: "3.8",
        href: "#chapter-3-8",
        isSpecial: false,
        title: "Próximos passos",
      },
    ],
  },
  tools: [
    {
      value: "figma",
    },
    {
      value: "adobe",
    },
  ],
};
