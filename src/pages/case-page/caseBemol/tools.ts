import { ToolsIconInterface } from "../../../interfaces/components";
import { CardsEnumeradosInterface, pushNotificationsInterface, SummaryInterface } from "../../../interfaces/case";
import educationVideo from "../../../assets/caseBemol/Estudos.mp4";
import topImgEducation from "../../../assets/caseBemol/educacaoImg.png";
import viagemVideo from "../../../assets/caseBemol/Viagens.mp4";
import topImgViagem from "../../../assets/caseBemol/viagemImg.png";
import comprasVideo from "../../../assets/caseBemol/Compras.mp4";
import topImgCompras from "../../../assets/caseBemol/comprasImg.png";

export const tools: ToolsIconInterface[] = [
    {
        value: 'figma',
    },
    {
        value: 'asana'
    },
    {
        value: 'ux'
    },
    {
        value: 'adobe'
    },
    {
        value: 'db'
    }
]

export const pushNotifications: pushNotificationsInterface[] = [
    {
        alt: 'educação',
        topImg: topImgEducation,
        video: educationVideo
    },
    {
        alt: 'viagem',
        topImg: topImgViagem,
        video: viagemVideo
    },
    {
        alt: 'compras',
        topImg: topImgCompras,
        video: comprasVideo
    }
]

export const Values: CardsEnumeradosInterface[] = [
    {
        title: 'Referência oficial',
        text: 'Promove o entendimento do produto, alinha times e serve como base para discussões e planejamento.'
    },
    {
        title: 'Otimização do trabalho',
        text: 'Reduz dúvidas e facilita a compreensão dos processos por diferentes áreas da empresa.'
    },
    {
        title: 'Visão estratégica',
        text: 'Oferece uma visão ampla do produto, alinhando expectativas entre stakeholders e orientando decisões mais eficientes.'
    },
    {
        title: 'Impacto contínuo',
        text: 'Material ainda utilizado como base para aprimoramentos e novas melhorias no produto.'
    }
]


export const summary: SummaryInterface = {
    bg:'#4c31e0',
    color:'#FFFFFF',
    items: [
        {
            id: '1.1',
            href: '#chapter-1-1',
            isSpecial: false,
            readingTime: 3,
            title: '1.1 Resgatando clientes no fluxo de empréstimo por notificações segmentadas',
            subtitle:'Apoio: Equipe de Marketing e equipe de Dados.'
        },
        {
            id:'1.2 e 1.3',
            href:'#chapter-1-2',
            isSpecial: false,
            readingTime: 1,
            title:'1.2 Outras entregas',
        },
        {
            id:'1.4',
            href:'#chapter-1-4',
            isSpecial:true,
            readingTime:0.5,
            title:'Escolha da data do vencimento das parcelas de empréstimo (prévia)',
            specialNote:'Case exclusivo para apresentação pessoal)'
        }
    ],
}