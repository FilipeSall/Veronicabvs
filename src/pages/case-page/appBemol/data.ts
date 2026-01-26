import { CaseInterface } from "../../../interfaces/case";
import case3img from "../../../assets/cases/case3.webp";
import case2imgOff from "../../../assets/cases/case2off.png";
import bemolBSAMiniImg from "../../../assets/cases/bemolBSAMiniImg.webp";
import appBemolPreviewImg from "../../../assets/cases/preview/appBemolPreview.webp";

export const appBemolData: CaseInterface = {
  id: 2,
  nome: "Case 02 - App Bemol (e-commerce)",
  projeto: "Bemol BSA (Varejo)",
  path: "case-2",
  bgColor: "#3C1616",
  imgHover: case3img,
  underConstruction: false,
  underConstructionImg: case2imgOff,
  miniImg: bemolBSAMiniImg,
  CasePreview: {
    title: "2. App Bemol",
    description: "e-commerce",
    img: appBemolPreviewImg,
  },
  contextTxt: "Atuação aplicativo de e-commerce (App Bemol), do mesmo ecossistema da empresa da BSF, que também abrangendo alguns dos serviços financeiros da empresa.",
  summary: {
    color: "#FFFFFF",
    items: [
      {
        id: "2.1",
        href: "#chapter-2-1",
        isSpecial: false,
        readingTime: 3,
        title: "Autocomplete para reconhecimento clientes com Conta Bemol",
      },
      {
        id: "2.2",
        href: "#chapter-2-2",
        readingTime: 1,
        title: "Redesign das telas de contratação de empréstimos via aplicativo e-commerce",
        isSpecial: false,
      },
    ],
  },
  tools: [
    {
      value: "asana",
    },
    {
      value: "figma",
    },
    {
      value: "office",
    },
  ],
};