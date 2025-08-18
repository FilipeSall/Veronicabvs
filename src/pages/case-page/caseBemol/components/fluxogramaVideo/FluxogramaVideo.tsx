import styles from './fluxogramavideo.module.scss';
import video from '../../../../../assets/caseBemol/FLUXOGRAMAS.mp4';
import { useVideoInView } from '../../../../../hooks/useVideoInView';
import { useEffect } from 'react';

/**
 * FluxogramaVideo - Componente para exibir vídeo de fluxogramas do processo
 * 
 * Este componente renderiza um vídeo demonstrativo dos fluxogramas completos
 * do produto, com reprodução automática quando visível e velocidade reduzida
 * para melhor compreensão. Inclui aviso sobre dados sensíveis.
 * 
 * @example
 * ```tsx
 * // Uso simples
 * <FluxogramaVideo />
 * 
 * // Dentro de uma seção
 * <ContentBlock>
 *   <div className="video-section">
 *     <FluxogramaVideo />
 *   </div>
 * </ContentBlock>
 * 
 * // Em conjunto com texto explicativo
 * <ContentBlock>
 *   <ContentSection 
 *     title="FLUXOGRAMAS COMPLETOS"
 *     paragraphs={["Documentação visual do processo..."]}
 *   />
 *   <FluxogramaVideo />
 * </ContentBlock>
 * ```
 * 
 * Funcionalidades:
 * - Auto-play quando visível na tela
 * - Velocidade reduzida (0.5x) para melhor análise
 * - Loop contínuo para revisão
 * - Mudo por padrão para não interferir na navegação
 */
function FluxogramaVideo() {
  const { videoRef } = useVideoInView({
    threshold: 0.3,
    rootMargin: '0px'
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; 
    }
  }, [videoRef]);

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        className={styles.video}
        loop
        muted
        playsInline
        src={video}
      />
      <p>Zoom indisponível por conter dados sensíveis.</p>
    </div>
  );
}

export default FluxogramaVideo;