import { ReactNode } from "react";
import { ToolsIconInterface } from "./components";

export type CasePreview = {
  title: string;
  description: string;
  img: string;
};

export interface CaseInterface {
  id: number;
  nome: string;
  projeto: string;
  tipoDeCase?: "sucesso" | "premiado";
  path: string;
  bgColor: string;
  imgHover: string;
  underConstruction?: boolean;
  underConstructionImg?: string;
  miniImg: string;
  CasePreview: CasePreview;
  contextTxt?: string | ReactNode;
  summary: {
    color: string;
    navegavelColor?: string;
    totalReading?: number;
    items: SummaryNavInterface[];
  };
  tools: ToolsIconInterface[];
}

export interface pushNotificationsInterface {
  alt: string;
  video: string;
  topImg: string;
}

export interface VideoItemInterface {
  alt: string;
  video: string;
  topImg?: string;
}

export interface VideoGalleryInterface {
  videos: VideoItemInterface[];
  className?: string;
}

export interface CardsEnumeradosInterface {
  title: string;
  text: string;
}

export interface InfoImgInterface {
  img: string;
  info: string;
}

export type SummaryNavInterface =
  | {
      id: string;
      readingTime: number;
      title: string;
      subtitle?: string;
      isSpecial: false;
      href: string;
    }
  | {
      id: string;
      readingTime: number;
      href: string;
      title: string;
      subtitle?: string;
      isSpecial: true;
      specialNote: string;
    };

export interface SummaryInterface {
  bg: string;
  color: string;
  items: SummaryNavInterface[];
  navegavelColor?: string;
  totalReading?: number;
}
