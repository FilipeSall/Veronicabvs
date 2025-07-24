import { IconType } from "react-icons"
import { CasePreview } from "./case"

export interface LinkInterface {
    path: string
    text: string
}

export interface ExternalLinkInterface extends LinkInterface {
    icon: IconType | string
    hoverIcon: IconType | string
}

export interface FerramentaInterface {
    icon: string;
    alt: string;
}

export interface CaseNavInterface extends LinkInterface {
    caseValue?: 'sucesso' | 'premiado'
    bgColor: string
    imgHover: string
    projectName: string
    isUnderConstruction?: boolean
    underConstructionImg?: string
    hoverText?: string,
    CasePreview: CasePreview
}

export interface CasePanelInterface {
    nome: string;
    projeto: string;
    data: string
    bgColor: string
    isUnderConstruction?: boolean
    miniImg: string
}

export interface ToolsIconInterface {
    value: string
}

export interface ContentSectionProps {
    title: string;
    paragraphs: string[];
    lineBreaks?: number;
}