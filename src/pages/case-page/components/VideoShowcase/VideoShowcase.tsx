import { VideoItemInterface } from "../../../../interfaces/case";
import VideoGallery from "../VideoGallery/VideoGallery";
import SuspenseImg from "../../caseBemol/components/suspenseImg/SuspenseImg";
import styles from "./videoshowcase.module.scss";

export interface VideoShowcaseProps {
  videos: VideoItemInterface[];
  suspenseImg?: {
    src: string;
    alt?: string;
    text?: string;
  };
  className?: string;
}

/**
 * VideoShowcase - Componente que exibe imagem contextual com galeria de vídeos
 * 
 * Combina SuspenseImg (opcional) com VideoGallery mantendo exatamente o mesmo
 * comportamento CSS do código original. Layout responsivo space-between.
 * 
 * @example
 * ```tsx
 * // Com imagem suspense (comportamento original)
 * <VideoShowcase 
 *   videos={pushNotifications}
 *   suspenseImg={{
 *     src: phoneImg,
 *     alt: "telefone",
 *     text: "Funil de contratação: Step 2"
 *   }}
 * />
 * 
 * // Apenas vídeos (sem imagem suspense)
 * <VideoShowcase videos={demoVideos} />
 * 
 * // Com classe customizada
 * <VideoShowcase 
 *   videos={notifications}
 *   suspenseImg={{ src: tabletImg, text: "Interface tablet" }}
 *   className="custom-spacing"
 * />
 * 
 * // Dentro de ContentBlock
 * <ContentBlock>
 *   <VideoShowcase 
 *     videos={pushNotifications}
 *     suspenseImg={{
 *       src: phoneImg,
 *       alt: "dispositivo móvel",
 *       text: "Demonstração mobile"
 *     }}
 *   />
 * </ContentBlock>
 * ```
 * 
 * @param videos - Array de vídeos para exibir na galeria
 * @param suspenseImg - Configuração opcional da imagem contextual
 * @param className - Classe CSS adicional para customização
 */
function VideoShowcase({ videos, suspenseImg, className }: VideoShowcaseProps) {
  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
      {suspenseImg && (
        <SuspenseImg 
          src={suspenseImg.src}
          alt={suspenseImg.alt}
          text={suspenseImg.text}
        />
      )}
      <VideoGallery videos={videos} />
    </div>
  );
}

export default VideoShowcase;