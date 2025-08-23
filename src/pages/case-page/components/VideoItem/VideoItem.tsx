import { VideoItemInterface } from '../../../../interfaces/case';
import { useVideoInView } from '../../../../hooks/useVideoInView';
import styles from './videoitem.module.scss';

/**
 * VideoItem - Componente individual para renderizar um vídeo com imagem opcional
 * 
 * Este componente renderiza um único vídeo que pode ter uma imagem superior opcional.
 * Inclui auto-play quando visível usando intersection observer e layout responsivo.
 * É a unidade básica usada pelo VideoGallery.
 * 
 * @example
 * ```tsx
 * // Com imagem superior (estilo notificação push)
 * <VideoItem 
 *   video="/videos/notification.mp4"
 *   alt="Notificação de educação"
 *   topImg="/images/education-icon.png"
 * />
 * 
 * // Apenas vídeo (sem imagem superior)
 * <VideoItem 
 *   video="/videos/demo.mp4"
 *   alt="Demonstração da funcionalidade"
 * />
 * ```
 * 
 * @param video - URL do arquivo de vídeo
 * @param alt - Texto alternativo para acessibilidade
 * @param topImg - URL da imagem exibida acima do vídeo (opcional)
 */
function VideoItem({ video, alt, topImg }: VideoItemInterface) {
  const { videoRef } = useVideoInView({
    threshold: 0.3,
    rootMargin: '0px'
  });

  return (
    <div className={styles.container}>
      {topImg && (
        <img 
          alt={alt} 
          src={topImg} 
          className={styles.topImg} 
        />
      )}
      <div className={styles.videoContainer}>   
        <video
          ref={videoRef}
          src={video}
          muted
          className={styles.video}
          loop
          playsInline
        />
      </div>
    </div>
  );
}

export default VideoItem;