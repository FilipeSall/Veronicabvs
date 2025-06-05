import { CasesInterface } from "../interfaces/case";
import case1img from '../assets/cases/case1.webp';
import case2img from '../assets/cases/case2.webp';
import case2imgOff from '../assets/cases/case2off.png';
import case3img from '../assets/cases/case3.webp';
import case3imgOff from '../assets/cases/case3off.png';
import case4img from '../assets/cases/case4.webp';
import case4imgOff from '../assets/cases/case4off.png';
import bemolBSAMiniImg from '../assets/cases/bemolBsaMiniImg.webp';
import bemolBSFMiniImg from '../assets/cases/bemolBsfMiniImg.webp';
import melliuzMiniImg from '../assets/cases/melliuuzMiniImg.webp';
import safraMiniImg from '../assets/cases/safraMiniImg.webp';

export const CasesData: CasesInterface[] = [
    {
        id: 1,
        data: '2022-2024',
        nome: `Case 01 - Conta Digital e Empréstimo Pessoal`,
        projeto: 'Bemol BSF (Bemol Serviços Financeiros)',
        path: 'case-1',
        tipoDeCase: 'sucesso',
        bgColor: '#526FDC',
        imgHover: case2img,
        hoverText: 'Conta Digital e Empréstimo Pessoal',
        miniImg: bemolBSFMiniImg
    },
    {
        id: 2,
        data: '2022-2024',
        nome: 'Case 02 - App Bemol (e-commerce)',
        projeto: 'Bemol BSA (Varejo)',
        path: 'case-2',
        bgColor: '#F23434',
        imgHover: case3img,
        underConstruction: true,
        underConstructionImg: case2imgOff,
        hoverText: 'App Bemol (e-commerce)',
        miniImg: bemolBSAMiniImg
    },
    {
        id: 3,
        data: '2024/2',
        nome: 'Case 03 - Doação de Cashback',
        projeto: 'Méliuz',
        path: 'case-3',
        bgColor: '#ED387B',
        imgHover: case1img,
        underConstruction: true,
        underConstructionImg: case3imgOff,
        hoverText: 'Doação de Cashback',
        miniImg: melliuzMiniImg
    },
    {
        id: 4,
        data: '2022/1',
        nome: 'Case 04 - Hackathon 2022',
        projeto: 'Banco Safra',
        path: 'case-4',
        tipoDeCase: 'premiado',
        bgColor: '#386681',
        hoverText: 'Hackathon 2022',
        imgHover: case4img,
        underConstruction: true,
        underConstructionImg: case4imgOff,
        miniImg: safraMiniImg
    },
]

