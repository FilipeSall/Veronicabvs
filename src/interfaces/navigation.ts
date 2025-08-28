import { IconType } from "react-icons";
import { CasePreview } from "./case";

export interface LinkInterface {
  /** Caminho/rota do link */
  path: string;
  /** Texto do link */
  text: string;
}

export interface ExternalLinkInterface extends LinkInterface {
  /** Ícone do link */
  icon: IconType | string;
  /** Ícone exibido no hover */
  hoverIcon: IconType | string;
}

export interface CaseNavInterface extends LinkInterface {
  /** Valor do tipo de case */
  caseValue?: 'sucesso' | 'premiado';
  /** Cor de fundo */
  bgColor: string;
  /** Imagem de hover */
  imgHover: string;
  /** Nome do projeto */
  projectName: string;
  /** Se está em construção */
  isUnderConstruction?: boolean;
  /** Imagem exibida em construção */
  underConstructionImg?: string;
  /** Texto exibido no hover */
  hoverText?: string;
  /** Preview do case */
  CasePreview: CasePreview;
}

export interface CasePanelInterface {
  /** Nome do case */
  nome: string;
  /** Nome do projeto */
  projeto: string;
  /** Cor de fundo */
  bgColor: string;
  /** Se está em construção */
  isUnderConstruction?: boolean;
  /** Imagem miniatura */
  miniImg: string;
}

export type SummaryNavInterface =
  | {
      /** Identificador único */
      id: string;
      /** Tempo de leitura em minutos */
      readingTime?: number;
      /** Título do item */
      title: string;
      /** Subtítulo do item */
      subtitle?: string;
      /** Se é um item especial */
      isSpecial: false;
      /** Link de navegação */
      href: string;
    }
  | {
      /** Identificador único */
      id: string;
      /** Tempo de leitura em minutos */
      readingTime?: number;
      /** Link de navegação */
      href: string;
      /** Título do item */
      title: string;
      /** Subtítulo do item */
      subtitle?: string;
      /** Se é um item especial */
      isSpecial: true;
      /** Nota especial do item */
      specialNote: string;
    };

export interface SummaryInterface {
  /** Cor de fundo do sumário */
  bg: string;
  /** Cor do texto */
  color: string;
  /** Lista de itens do sumário */
  items: SummaryNavInterface[];
  /** Cor para elementos navegáveis */
  navegavelColor?: string;
  /** Tempo total de leitura */
  totalReading?: number;
}

