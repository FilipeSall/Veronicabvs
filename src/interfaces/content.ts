import { ReactNode } from "react";

export interface TextContentProps {
  /** Título do conteúdo */
  title?: string;
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
  };
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
  subtitleVariant?: 'default' | 'paragraph';
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