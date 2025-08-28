import { ReactNode } from "react";
import { ToolsIconInterface } from "./tools";
import { SummaryNavInterface } from "./navigation";

export type CasePreview = {
  /** Título do preview */
  title: string;
  /** Descrição do preview */
  description: string;
  /** Imagem do preview */
  img: string;
};

export interface CaseInterface {
  /** Identificador único do case */
  id: number;
  /** Nome principal do projeto */
  nome: string;
  /** Descrição do projeto */
  projeto: string;
  /** Tipo de case - indica se é um caso de sucesso ou premiado */
  tipoDeCase?: "sucesso" | "premiado";
  /** Caminho/rota para acessar o case */
  path: string;
  /** Cor de fundo do case */
  bgColor: string;
  /** Imagem de hover para o nav */
  imgHover: string;
  /** Indica se o case está em construção */
  underConstruction?: boolean;
  /** Imagem exibida quando o case está em construção */
  underConstructionImg?: string;
  /** Imagem miniatura do case */
  miniImg: string;
  /** Preview do case com informações básicas */
  CasePreview: CasePreview;
  /** Texto contextual adicional sobre o case */
  contextTxt?: string | ReactNode;
  /** Configurações do sumário de navegação */
  summary: {
    /** Cor do sumário */
    color: string;
    /** Cor para elementos navegáveis */
    navegavelColor?: string;
    /** Tempo total de leitura em minutos */
    totalReading?: number;
    /** Lista de itens do sumário */
    items: SummaryNavInterface[];
  };
  /** Ferramentas utilizadas no projeto */
  tools: ToolsIconInterface[];
}

