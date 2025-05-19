import { IconType } from "react-icons"

export interface LinkInterface {
    path: string
    text: string
}

export interface ExternalLinkInterface extends LinkInterface{
    icon:IconType | string
    hoverIcon:IconType | string
}

export interface FerramentaInterface {
    icon: string;    
    alt: string;   
}

export interface CaseNavInterface extends LinkInterface {
    caseValue?: 'sucesso' | 'premiado'
    bgColor: string
    imgHover:string
    projectName:string
    isUnderConstruction?: boolean
    underConstructionImg?:string
    hoverText?:string
}

export interface CasePanelInterface {
    nome: string;
    projeto: string;
    data:string
    bgColor:string
    isUnderConstruction?:boolean
}

export interface ToolsIconInterface{
    value: string
}
