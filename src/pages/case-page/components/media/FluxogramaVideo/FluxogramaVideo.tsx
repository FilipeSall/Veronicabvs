import styles from './fluxogramavideo.module.scss';
import defaultVideo from '../../../../../assets/caseBemol/FLUXOGRAMAS.mp4';
import { useVideoInView } from '../../../../../hooks/useVideoInView';
import { useEffect } from 'react';

type FluxogramaVideoProps = {
    videoSrc?: string;
    alt?: string;
    playbackRate?: number;
    showSensitiveDataWarning?: boolean;
    warningText?: string;
    loop?: boolean;
    muted?: boolean;
    threshold?: number;
    className?: string;
}

/**
 * FluxogramaVideo - Componente para exibir vídeos de fluxogramas com controle de velocidade
 * 
 * Este componente renderiza vídeos demonstrativos de fluxogramas com reprodução
 * automática quando visível e velocidade customizável para melhor análise.
 * Por padrão, usa o vídeo de fluxogramas do Case Bemol com velocidade reduzida.
 * 
 * @example
 * ```tsx
 * // Uso padrão (Case Bemol - fluxogramas com velocidade 0.5x)
 * <FluxogramaVideo />
 * 
 * // Com vídeo customizado
 * <FluxogramaVideo 
 *   videoSrc="/videos/my-flowchart.mp4"
 *   playbackRate={0.75}
 *   alt="Fluxograma do novo processo"
 * />
 * 
 * // Sem aviso de dados sensíveis
 * <FluxogramaVideo 
 *   videoSrc="/videos/public-process.mp4"
 *   showSensitiveDataWarning={false}
 * />
 * 
 * // Com texto de aviso customizado
 * <FluxogramaVideo 
 *   warningText="Detalhes disponíveis apenas para equipe interna."
 * />
 * 
 * // Dentro de um ContentBlock
 * <ContentBlock>
 *   <TextContent 
 *     title="FLUXOGRAMAS COMPLETOS"
 *     paragraphs={["Documentação visual do processo..."]}
 *   />
 *   <FluxogramaVideo playbackRate={0.25} />
 * </ContentBlock>
 * ```
 * 
 * @param videoSrc - URL do vídeo (padrão: fluxogramas Case Bemol)
 * @param alt - Texto alternativo para acessibilidade
 * @param playbackRate - Velocidade de reprodução (padrão: 0.5x)
 * @param showSensitiveDataWarning - Se deve mostrar aviso de dados sensíveis
 * @param warningText - Texto do aviso customizado
 * @param loop - Loop contínuo (padrão: true)
 * @param muted - Sem áudio (padrão: true)
 * @param threshold - Limiar para auto-play (padrão: 0.3)
 * @param className - Classe CSS adicional
 */
function FluxogramaVideo({
    videoSrc = defaultVideo,
    alt = "Vídeo demonstrativo de fluxogramas",
    playbackRate = 0.5,
    showSensitiveDataWarning = true,
    warningText = "Zoom indisponível por conter dados sensíveis.",
    loop = true,
    muted = true,
    threshold = 0.3,
    className
}: FluxogramaVideoProps) {
    const { videoRef } = useVideoInView({
        threshold,
        rootMargin: '0px'
    });

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = playbackRate;
        }
    }, [videoRef, playbackRate]);

    return (
        <div className={`${styles.container} ${className || ''}`}>
            <video
                ref={videoRef}
                className={styles.video}
                loop={loop}
                muted={muted}
                playsInline
                src={videoSrc}
                aria-label={alt}
            />
            {showSensitiveDataWarning && <p>{warningText}</p>}
        </div>
    );
}

export default FluxogramaVideo;