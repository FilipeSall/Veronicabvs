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
  contextTxt: "Etapa final do processo seletivo Méliuz para vaga Product Designer Pleno.\nDuração: 5 dias.\nResponsabilidade: Integral (candidata).",
  summary: {
    color: "#FFFFFF",
    items: [],
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