import { CasesInterface } from "../interfaces/case";
import case1img from '../assets/cases/case1.webp';
import case2img from '../assets/cases/case2.webp';
import case3img from '../assets/cases/case3.webp';
import case4img from '../assets/cases/case4.webp';

export const CasesData:CasesInterface[] = [
    {
        id:2,
        data:'2024/2',
        nome:'Case 01 - Mélliuz',
        projeto:'Doação de Cashback',
        path:'case-1',
        bgColor:'#ED387B',
        imgHover: case1img
    },
    {
        id:1,
        data:'2022-2024',
        nome:'Case 02 - Bemol (Fintech)',
        projeto:'Conta Digital e Empréstimo Pessoal',
        path:'case-2',
        tipoDeCase:'sucesso',
        bgColor:'#526FDC',
        imgHover: case2img
    },
    {
        id:3,
        data:'2022-2024',
        nome:'Case 03 - Bemol (e-commerce)',
        projeto:'E-commerce App Bemol',
        path:'case-3',
        bgColor:'#F23434',
        imgHover: case3img
    },
    {
        id:4,
        data:'2022/1',
        nome:'Case 04 - Safra (banco)',
        projeto:'Hackathon 2022',
        path:'case-4',
        tipoDeCase:'premiado',
        bgColor:'#386681',
        imgHover: case4img
    },

]

