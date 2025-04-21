import { ExternalLinkInterface, LinkInterface } from "../interfaces/components";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export const internalLinksHeader: LinkInterface[] = [
    {
        text: 'Pagina Inicial',
        path: '/'
    },
    {
        text: 'Sobre mim',
        path: '/sobre-mim'
    }
];

export const externalLinksHeader: ExternalLinkInterface[] = [
    {
        text:'Medium',
        path:'https://medium.com/@veronicabvs',
        icon: FaMedium 
    },
    {
        text:'LinkedIn',
        path:'https://www.linkedin.com/in/veronicabvs/',
        icon: FaLinkedinIn,
        hoverIcon:FaLinkedin
    },
    {
        text:'Envie um e-mail',
        path:'/',
        icon:MdEmail
    }
]
