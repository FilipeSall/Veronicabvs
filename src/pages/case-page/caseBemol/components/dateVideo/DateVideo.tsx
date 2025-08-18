import styles from './datevideo.module.scss';
import { useVideoInView } from '../../../../../hooks/useVideoInView';
import video from '../../../../../assets/caseBemol/EscolhaData.mp4'
import icon from '../../../../../assets/svgs/sucesso.svg'

/**
 * DateVideo - Componente para exibir vídeo da funcionalidade de escolha de data
 * 
 * Este componente renderiza um vídeo demonstrativo da funcionalidade de
 * escolha da data de vencimento das parcelas, com ícone de sucesso
 * sobreposto para indicar a conclusão da feature.
 * 
 * @example
 * ```tsx
 * // Uso simples
 * <DateVideo />
 * 
 * // Dentro de um ContentBlock
 * <ContentBlock>
 *   <DateVideo />
 * </ContentBlock>
 * 
 * // Em seção de prévia
 * <ContentBlock>
 *   <h3>Funcionalidade Exclusiva</h3>
 *   <p>Demonstração da escolha de data...</p>
 *   <DateVideo />
 * </ContentBlock>
 * ```
 * 
 * Características:
 * - Vídeo com auto-play quando visível
 * - Ícone de sucesso sobreposto
 * - Loop contínuo para demonstração
 * - Otimizado para apresentações
 */
function DateVideo() {

    const { videoRef } = useVideoInView({
        threshold: 0.3,
        rootMargin: '0px'
    });

    return (
        <div className={styles.container}>
            <img alt='icone de sucesso' src={icon} className={styles.sucessIcon} />
            <video
                ref={videoRef}
                className={styles.video}
                loop
                muted
                playsInline
                src={video}
            />
        </div>
    )
}

export default DateVideo