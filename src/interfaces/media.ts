export interface pushNotificationsInterface {
  /** Texto alternativo para acessibilidade */
  alt: string;
  /** URL ou caminho do vídeo */
  video: string;
  /** Imagem de thumbnail do vídeo */
  topImg: string;
}

export interface VideoItemInterface {
  /** Texto alternativo para acessibilidade */
  alt: string;
  /** URL ou caminho do vídeo */
  video: string;
  /** Imagem de thumbnail do vídeo */
  topImg?: string;
}

export interface VideoGalleryInterface {
  /** Lista de vídeos da galeria */
  videos: VideoItemInterface[];
  /** Classes CSS personalizadas */
  className?: string;
}

export interface InfoImgInterface {
  /** URL ou caminho da imagem */
  img: string;
  /** Informação associada à imagem */
  info: string;
}

export type StepsFlowProps = {
  img: string;
  description: string;
  alt?: string;
};

export interface StepsImgFlowProps {
  steps: StepsFlowProps[];
  color: string;
}
