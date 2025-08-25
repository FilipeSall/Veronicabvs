import VideoPlayer from '../VideoPlayer/VideoPlayer';
import videoEscolhaData from '../../../../../assets/caseBemol/EscolhaData.mp4';

type DateVideoProps = {
    videoSrc?: string;
    alt?: string;
    showSuccessIcon?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    className?: string;
}

/**
 * DateVideo - Componente para exibir vídeo de funcionalidades com ícone de sucesso
 * 
 * Este componente usa o VideoPlayer genérico para renderizar vídeos demonstrativos
 * com ícone de sucesso sobreposto. Por padrão, mostra o vídeo de escolha de data
 * do Case Bemol, mas aceita props para customização.
 * 
 * @example
 * ```tsx
 * // Uso padrão (Case Bemol - escolha de data)
 * <DateVideo />
 * 
 * // Com vídeo customizado 
 * <DateVideo 
 *   videoSrc="/videos/custom-feature.mp4"
 *   alt="Nova funcionalidade" 
 * />
 * 
 * // Sem ícone de sucesso
 * <DateVideo 
 *   videoSrc="/videos/demo.mp4"
 *   showSuccessIcon={false}
 * />
 * 
 * // Dentro de um ContentBlock
 * <ContentBlock>
 *   <h3>Funcionalidade Exclusiva</h3>
 *   <DateVideo videoSrc="/videos/my-feature.mp4" />
 * </ContentBlock>
 * ```
 * 
 * @param videoSrc - URL do vídeo (padrão: vídeo de escolha de data)
 * @param alt - Texto alternativo para acessibilidade
 * @param showSuccessIcon - Se deve mostrar ícone de sucesso (padrão: true)
 * @param autoPlay - Auto-play quando visível (padrão: true)
 * @param loop - Loop contínuo (padrão: true)
 * @param className - Classe CSS adicional
 */
function DateVideo({ 
    videoSrc = videoEscolhaData,
    alt = "Vídeo demonstrativo da funcionalidade",
    showSuccessIcon = true,
    autoPlay = true,
    loop = true,
    className
}: DateVideoProps) {
    return (
        <VideoPlayer
            src={videoSrc}
            alt={alt}
            showSuccessIcon={showSuccessIcon}
            autoPlay={autoPlay}
            loop={loop}
            className={className}
        />
    );
}

export default DateVideo