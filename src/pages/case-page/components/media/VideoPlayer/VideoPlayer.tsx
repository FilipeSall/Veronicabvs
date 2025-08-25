import styles from './videoplayer.module.scss';
import { useVideoInView } from '../../../../../hooks/useVideoInView';
import sucessIcon from '../../../../../assets/svgs/sucesso.svg';

type VideoPlayerProps = {
    src: string;
    alt?: string;
    showSuccessIcon?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
    className?: string;
    threshold?: number;
    rootMargin?: string;
}

/**
 * VideoPlayer - Componente genérico para exibir vídeos com opções customizáveis
 * 
 * Este componente renderiza um vídeo com diversas opções de configuração,
 * incluindo ícone de sucesso sobreposto opcional e controles de reprodução.
 * 
 * @example
 * ```tsx
 * // Uso básico
 * <VideoPlayer src="/videos/demo.mp4" />
 * 
 * // Com ícone de sucesso (como no DateVideo original)
 * <VideoPlayer 
 *   src="/videos/escolha-data.mp4"
 *   showSuccessIcon={true}
 *   autoPlay={true}
 *   loop={true}
 * />
 * 
 * // Configuração personalizada
 * <VideoPlayer 
 *   src="/videos/tutorial.mp4"
 *   alt="Tutorial do sistema"
 *   autoPlay={false}
 *   muted={false}
 *   threshold={0.5}
 *   className="custom-video"
 * />
 * 
 * // Dentro de um ContentBlock
 * <ContentBlock>
 *   <h3>Demonstração</h3>
 *   <VideoPlayer 
 *     src="/videos/feature.mp4"
 *     showSuccessIcon={true}
 *     loop={true}
 *   />
 * </ContentBlock>
 * ```
 * 
 * @param src - URL do arquivo de vídeo
 * @param alt - Texto alternativo para acessibilidade
 * @param showSuccessIcon - Se deve mostrar ícone de sucesso sobreposto
 * @param autoPlay - Se deve reproduzir automaticamente quando visível
 * @param loop - Se deve repetir o vídeo em loop
 * @param muted - Se deve iniciar sem som
 * @param playsInline - Para reprodução inline em dispositivos móveis
 * @param className - Classe CSS adicional
 * @param threshold - Limiar de visibilidade para iniciar reprodução (0-1)
 * @param rootMargin - Margem do root para IntersectionObserver
 */
function VideoPlayer({ 
    src, 
    alt = "Vídeo demonstrativo",
    showSuccessIcon = false,
    autoPlay = true,
    loop = true,
    muted = true,
    playsInline = true,
    className,
    threshold = 0.3,
    rootMargin = '0px'
}: VideoPlayerProps) {

    const { videoRef } = useVideoInView({
        threshold,
        rootMargin
    });

    return (
        <div className={`${styles.container} ${className || ''}`}>
            {showSuccessIcon && (
                <img 
                    alt='ícone de sucesso' 
                    src={sucessIcon} 
                    className={styles.sucessIcon} 
                />
            )}
            <video
                ref={videoRef}
                className={styles.video}
                loop={loop}
                muted={muted}
                playsInline={playsInline}
                autoPlay={autoPlay}
                src={src}
                aria-label={alt}
            />
        </div>
    )
}

export default VideoPlayer;