import { ReactNode } from "react";

export interface TextContentProps {
  /** Título do conteúdo */
  title?: string | ReactNode;
  /** Array de parágrafos do conteúdo */
  paragraphs: (string | ReactNode)[];
  /** Número de quebras de linha */
  lineBreaks?: number;
  /** CSS customizado para margin e padding */
  customCss?: {
    marginTop?: string;
    marginBottom?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paragraphWidth?: string;
    titleGap?: string;
  };
}

export interface ContentSectionProps {
  /** Título da seção */
  title?: string;
  /** Subtítulo da seção */
  subtitle?: string;
  /** Conteúdo da seção */
  children: ReactNode;
  /** CSS customizado para margin */
  customCss?: {
    marginTop?: string;
    marginBottom?: string;
    /** Posição do título: 'left' (padrão), 'center' ou 'right' */
    titlePosition?: "left" | "center" | "right";
  };
}

export interface ChapterProps {
  /** Identificador único do capítulo */
  id: string;
  /** Título do capítulo */
  title?: string;
  /** Subtítulo do capítulo */
  subtitle?: string;
  /** Conteúdo do capítulo */
  children: React.ReactNode;
  /** Classes CSS personalizadas */
  className?: string;
  /** CSS customizado para margin */
  customCss?: {
    marginTop?: string;
    marginBottom?: string;
    paddingTop?: string;
    paddingLeft?: string;
  };
  /** Força uma cor de fundo específica, sobrescrevendo a alternância automática */
  forceBackgroundColor?: string;
}

export interface ContentBlockProps {
  /** Conteúdo do bloco */
  children: React.ReactNode;
  /** Classes CSS personalizadas */
  className?: string;
  /** CSS customizado para margin e gap */
  customCss?: {
    marginTop?: string;
    marginBottom?: string;
    gap?: string;
  };
  /** Se deve ocupar toda a largura */
  fullWidth?: boolean;
}

export interface CaseTitleHeaderProps {
  /** Identificador único do cabeçalho */
  id: string;
  /** Título do cabeçalho */
  title: string;
  /** Subtítulo do cabeçalho */
  subtitle?: string | ReactNode;
  /** Variante do subtítulo */
  subtitleVariant?: "default" | "paragraph";
  /** Se o subtítulo deve ser branco */
  subtitleWhite?: boolean;
  /** Classes CSS personalizadas */
  className?: string;
  /** CSS customizado para margin e padding */
  customCss?: {
    marginTop?: string;
    marginBottom?: string;
    paddingTop?: string;
    paddingBottom?: string;
  };
}

export interface CardsEnumeradosInterface {
  /** Título do card */
  title: string;
  /** Texto do card */
  text: string;
}

export interface InsightCardsProps {
  /** Imagem do card */
  img: string;
  /** Texto do insight */
  text: string;
  /** Texto da imagm */
  alt?: string;
  /** Título opcional do card */
  title?: string;
  /** Gap entre imagem e texto */
  gap?: string;
}

export interface SimpleVerticalTimelineItem {
  /** Titulo do step da timeline */
  title: string;
  /** Texto da descrição que fica debaixo do title da timeline */
  description: string;
}

export interface SimpleVerticalTimelineProps {
  /** Array de items da timeline */
  items: SimpleVerticalTimelineItem[];
  /** Cor dos dots e traços (padrão: #BBBBBB) */
  dotColor?: string;
}

export interface TimelineDotsProps {
  /** Número de itens para criar os pontos */
  itemsCount: number;
}

export interface ProcessStep {
  title: string;
  lists: string[];
}

export type ProcessDataApp = ProcessStep[];

export type ListByTypeProps = {
  title: string;
  description: string;
};

export type QuoteProps = {
  text: string;
  title?: string;
};
