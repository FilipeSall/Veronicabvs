import { CardsEnumeradosInterface, pushNotificationsInterface } from "../../../interfaces/case";
import educationVideo from "../../../assets/caseBemol/Estudos.mp4";
import topImgEducation from "../../../assets/caseBemol/educacaoImg.png";
import viagemVideo from "../../../assets/caseBemol/Viagens.mp4";
import topImgViagem from "../../../assets/caseBemol/viagemImg.png";
import comprasVideo from "../../../assets/caseBemol/Compras.mp4";
import topImgCompras from "../../../assets/caseBemol/comprasImg.png";

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

export const processDataApp = [
    {
        title: "Planning",
        lists: [
            "Análise de dados",
            "Identificação do problema",
            "Alinhamento inicial"
        ]
    },
    {
        title: "Discovery",
        lists: [
            "Benchmarking",
            "Discussões exploratórias com áreas parceiras"
        ]
    },
    {
        title: "Define",
        lists: [
            "Solução",
            "Alinhamento com as áreas envolvidas"
        ]
    },
    {
        title: "Develop",
        lists: [
            "Design System",
            "Co-criação (marketing)",
            "Prototipação em alta"
        ]
    },
    {
        title: "Delivery",
        lists: [
            "Validação e apresentação",
            "Documentação",
            "Entrega"
        ]
    },
    {
        title: "Follow-up",
        lists: [
            "Acompanhamento de métricas de conversão"
        ]
    }
]