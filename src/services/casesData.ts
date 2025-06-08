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
import caseBemolPreviewImg from '../assets/cases/preview/contaBemolPreview.webp';
import appBemolPreviewImg from '../assets/cases/preview/appBemolPreview.webp';
import melliuzPreview from '../assets/cases/preview/melliuzPreview.webp';
import safraPreview from '../assets/cases/preview/safraPreview.png';

export const CasesData: CasesInterface[] = [
    {
        id: 1,
        nome: `Case 01 - Conta Digital e Empréstimo Pessoal`,
        projeto: 'Bemol BSF (Bemol Serviços Financeiros)',
        data: '2022-2024',
        path: 'case-1',
        tipoDeCase: 'sucesso',
        bgColor: '#526FDC',
        imgHover: case2img,
        miniImg: bemolBSFMiniImg,
        CasePreview: {
            title: '1. Conta Bemol',
            description: 'Serviços Financeiros',
            img: caseBemolPreviewImg
        }
    },
    {
        id: 2,
        nome: 'Case 02 - App Bemol (e-commerce)',
        projeto: 'Bemol BSA (Varejo)',
        data: '2022-2024',
        path: 'case-2',
        bgColor: '#F23434',
        imgHover: case3img,
        underConstruction: true,
        underConstructionImg: case2imgOff,
        miniImg: bemolBSAMiniImg,
        CasePreview: {
            title: '2. App Bemol',
            description: 'e-commerce',
            img: appBemolPreviewImg
        }
    },
    {
        id: 3,
        nome: 'Case 03 - Doação de Cashback',
        projeto: 'Méliuz',
        data: '2024/2',
        path: 'case-3',
        bgColor: '#ED387B',
        imgHover: case1img,
        underConstruction: true,
        underConstructionImg: case3imgOff,
        miniImg: melliuzMiniImg,
        CasePreview: { 
            title: '3. Méliuz',
            description: 'Solução para Cashback',
            img: melliuzPreview
        }
    },
    {
        id: 4,
        nome: 'Case 04 - Hackathon 2022',
        projeto: 'Banco Safra',
        path: 'case-4',
        data: '2022/1',
        tipoDeCase: 'premiado',
        bgColor: '#386681',
        imgHover: case4img,
        underConstruction: true,
        underConstructionImg: case4imgOff,
        miniImg: safraMiniImg,
        CasePreview: {
            title: '4. Safra',
            description: 'Hackathon 2022',
            img: safraPreview
        }
    },
]

