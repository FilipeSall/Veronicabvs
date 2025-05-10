import { CasesInterface } from "../interfaces/case";
import case1img from '../assets/cases/case1.webp';
import case2img from '../assets/cases/case2.webp';
import case2imgOff from '../assets/cases/case2off.png';
import case3img from '../assets/cases/case3.webp';
import case3imgOff from '../assets/cases/case3off.png';
import case4img from '../assets/cases/case4.webp';
import case4imgOff from '../assets/cases/case4off.png';

export const CasesData:CasesInterface[] = [
    {
        id:1,
        data:'2022-2024',
        nome:`Case 01 - Bemol (Fintech)`,
        projeto:'Conta Digital e Empréstimo Pessoal',
        path:'case-1',
        tipoDeCase:'sucesso',
        bgColor:'#526FDC',
        imgHover: case2img
    },
    {
        id:2,
        data:'2022-2024',
        nome:'Case 02 - Bemol (e-commerce)',
        projeto:'E-commerce App Bemol',
        path:'case-2',
        bgColor:'#F23434',
        imgHover: case3img,
        underConstruction:true,
        underConstructionImg:case2imgOff
    },
    {
        id:3,
        data:'2024/2',
        nome:'Case 03 - Mélliuz',
        projeto:'Doação de Cashback',
        path:'case-3',
        bgColor:'#ED387B',
        imgHover: case1img,
        underConstruction:true,
        underConstructionImg:case3imgOff
    },
    {
        id:4,
        data:'2022/1',
        nome:'Case 04 - Safra (banco)',
        projeto:'Hackathon 2022',
        path:'case-4',
        tipoDeCase:'premiado',
        bgColor:'#386681',
        imgHover: case4img,
        underConstruction:true,
        underConstructionImg:case4imgOff
    },
]

