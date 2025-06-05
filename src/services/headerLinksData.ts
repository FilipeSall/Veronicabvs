import { ExternalLinkInterface, LinkInterface } from "../interfaces/components";
import mediumIcon from '../assets/svgs/links/medium.svg';
import mediumHoverIcon from '../assets/svgs/links/mediumhover.svg';
import linkedinIcon from '../assets/svgs/links/linkedin.svg';
import linkedinHoverIcon from '../assets/svgs/links/linkedinhover.svg';
import emailIcon from '../assets/svgs/links/email.svg';
import emailHoverIcon from '../assets/svgs/links/emailhover.svg';
import wppIcon from '../assets/svgs/links/wpp.svg';
import wppHoverIcon from '../assets/svgs/links/wppHover.svg';

export const internalLinksHeader: LinkInterface[] = [
    {
        text: 'Página Inicial',
        path: '/'
    },
    {
        text: 'Sobre mim',
        path: '/sobre-mim'
    }
];

export const externalLinksHeader: ExternalLinkInterface[] = [
    {
        text: 'LinkedIn',
        path: 'https://www.linkedin.com/in/veronicabvs/',
        icon: linkedinIcon,
        hoverIcon: linkedinHoverIcon,
    },
    {
        text: 'Medium',
        path: 'https://medium.com/@veronicabvs',
        icon: mediumIcon,
        hoverIcon: mediumHoverIcon,
    },
    {
        text: 'Envie um e-mail',
        path: 'mailto:vebarbosa@hotmail.com',
        icon: emailIcon,
        hoverIcon: emailHoverIcon
    }
];

export const externalLinksFooter: ExternalLinkInterface[] = [
    {
        text: 'LinkedIn',
        path: 'https://www.linkedin.com/in/veronicabvs/',
        icon: linkedinIcon,
        hoverIcon: linkedinHoverIcon,
    },
    {
        text: 'Envie um e-mail',
        path: 'mailto:vebarbosa@hotmail.com',
        icon: emailIcon,
        hoverIcon: emailHoverIcon
    },
    {
        text: 'WhatsApp',
        path: 'https://wa.me/5527998741918',
        icon: wppIcon,
        hoverIcon: wppHoverIcon
    }
];