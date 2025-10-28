import { CaseInterface } from "../../../interfaces/case";
import case4img from "../../../assets/cases/case4.webp";
import case4imgOff from "../../../assets/cases/case4off.png";
import safraMiniImg from "../../../assets/cases/safraMiniImg.webp";
import safraPreview from "../../../assets/cases/preview/safraPreview.png";

export const safraData: CaseInterface = {
  id: 4,
  nome: "Case 04 - Hackathon 2022",
  projeto: "Banco Safra",
  path: "case-4",
  tipoDeCase: "premiado",
  bgColor: "#386681",
  imgHover: case4img,
  underConstruction: true,
  underConstructionImg: case4imgOff,
  miniImg: safraMiniImg,
  CasePreview: {
    title: "4. Safra",
    description: "Hackathon 2022",
    img: safraPreview,
  },
  contextTxt:
    "Projeto vencedor da penúltima etapa do processo de trainee do banco Safra.\nDuração: 3 dias.\nResponsabilidade: UX Designer do projeto.",
  summary: {
    color: "#FFFFFF",
    items: [
      {
        id: "4.1",
        href: "#chapter-4-1",
        isSpecial: false,
        title: "Resultado",
      },
      {
        id: "4.2",
        href: "#chapter-4-2",
        isSpecial: false,
        title: "Desafio",
      },
      {
        id: "4.3",
        href: "#chapter-4-3",
        isSpecial: false,
        title: "Processo",
      },
      {
        id: "4.4",
        href: "#chapter-4-4",
        isSpecial: false,
        title: "Descoberta e evidências",
      },
      {
        id: "4.5",
        href: "#chapter-4-5",
        isSpecial: false,
        title: "Evolução da interface",
      },
      {
        id: "4.6",
        href: "#chapter-4-6",
        isSpecial: false,
        title: "Análise Heurística e User Test",
      },
      {
        id: "4.7",
        href: "#chapter-4-7",
        isSpecial: false,
        title: "Reconhecimento e premiação",
      },
      {
        id: "4.8",
        href: "#chapter-4-8",
        isSpecial: false,
        title: "Equipe",
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
    {
      value: "miro",
    },
    {
      value: "notion",
    },
  ],
};
