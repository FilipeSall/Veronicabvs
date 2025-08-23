import { VideoGalleryInterface } from '../../../../interfaces/case';
import VideoItem from '../VideoItem/VideoItem';
import styles from './videogallery.module.scss';

/**
 * VideoGallery - Componente genérico para exibir uma galeria de vídeos
 * 
 * Este componente renderiza uma lista de vídeos em formato de galeria,
 * onde cada vídeo pode ter uma imagem superior opcional. É reutilizável
 * para diferentes contextos como notificações push, demonstrações, etc.
 * 
 * @example
 * ```tsx
 * // Exemplo com notificações push (com imagens)
 * <VideoGallery 
 *   videos={[
 *     {
 *       video: "/videos/notification1.mp4",
 *       alt: "Notificação de educação",
 *       topImg: "/images/education-icon.png"
 *     },
 *     {
 *       video: "/videos/notification2.mp4", 
 *       alt: "Notificação de promoção",
 *       topImg: "/images/promo-icon.png"
 *     }
 *   ]}
 * />
 * 
 * // Exemplo com vídeos simples (sem imagens)
 * <VideoGallery 
 *   videos={[
 *     {
 *       video: "/videos/demo1.mp4",
 *       alt: "Demonstração da funcionalidade"
 *     },
 *     {
 *       video: "/videos/demo2.mp4",
 *       alt: "Fluxo completo"
 *     }
 *   ]}
 *   className="simple-gallery"
 * />
 * 
 * // Exemplo com mix de vídeos com e sem imagens
 * <VideoGallery 
 *   videos={[
 *     {
 *       video: "/videos/with-img.mp4",
 *       alt: "Com imagem",
 *       topImg: "/images/icon.png"
 *     },
 *     {
 *       video: "/videos/without-img.mp4",
 *       alt: "Sem imagem"
 *     }
 *   ]}
 * />
 * ```
 * 
 * @param videos - Array de objetos de vídeo com propriedades video, alt e topImg opcional
 * @param className - Classe CSS adicional para customização do container
 */
function VideoGallery({ videos, className }: VideoGalleryInterface) {
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className={`${styles.galleryContainer} ${className || ''}`}>
      {videos.map((videoData, index) => (
        <VideoItem
          key={index}
          video={videoData.video}
          alt={videoData.alt}
          topImg={videoData.topImg}
        />
      ))}
    </div>
  );
}

export default VideoGallery;