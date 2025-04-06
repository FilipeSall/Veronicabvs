import { IconType } from "react-icons"

export interface LinkInterface {
    path: string
    text: string
}

export interface ExternalLinkInterface extends LinkInterface{
    icon:IconType  
}

export interface FerramentaInterface {
    icon: string;    
    alt: string;   
}

export interface CaseNavInterface extends LinkInterface {
    caseValue?: 'sucesso' | 'premiado'
    bgColor: string
}

export interface CasePanelInterface {
    nome: string;
    projeto: string;
    data:string
}