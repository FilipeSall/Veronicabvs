import { CaseInterface } from "../interfaces/case";
import case4img from "../assets/cases/case4.webp";
import case4imgOff from "../assets/cases/case4off.png";
import safraMiniImg from "../assets/cases/safraMiniImg.webp";
import safraPreview from "../assets/cases/preview/safraPreview.png";
import { caseBemolData } from "../pages/case-page/caseBemol/data";
import { appBemolData } from "../pages/case-page/appBemol/data";
import { melliuzData } from "../pages/case-page/melliuz/data";

// Export casos usando CaseInterface
export const CasesData: CaseInterface[] = [
  caseBemolData,
  appBemolData,
  melliuzData,
  {
    id: 4,
    nome: "Case 04 - Hackathon 2022",
    projeto: "Banco Safra",
    path: "case-4",
    data: "2022/1",
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
    summary: {
      color: "#FFFFFF",
      items: [],
    },
    tools: [],
  },
];

