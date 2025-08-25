import styles from './expandableimage.module.scss';
import newWindowIcon from '../../../../../assets/svgs/new-window.svg';

type ExpandableImageProps = {
    thumbnailSrc: string;
    fullSrc: string;
    alt?: string;
    clickText?: string;
    newTabText?: string;
    className?: string;
    onClick?: () => void;
}

/**
 * ExpandableImage - Componente genérico para imagens com visualização expandida
 * 
 * Este componente renderiza uma imagem miniatura clicável que pode abrir
 * a versão completa em nova aba ou executar ação customizada. Útil para
 * notificações, screenshots, diagramas ou qualquer imagem que precise
 * de visualização ampliada.
 * 
 * @example
 * ```tsx
 * // Uso básico (como FullscreenImage original)
 * <ExpandableImage 
 *   thumbnailSrc="/images/notification-off.png"
 *   fullSrc="/images/notification-full.png" 
 *   alt="Prévia da notificação"
 * />
 * 
 * // Com textos customizados
 * <ExpandableImage 
 *   thumbnailSrc="/images/diagram-small.png"
 *   fullSrc="/images/diagram-large.png"
 *   alt="Diagrama do sistema"
 *   clickText="Ver diagrama completo"
 *   newTabText="Abrir diagrama (nova aba)"
 * />
 * 
 * // Com ação customizada em vez de nova aba
 * <ExpandableImage 
 *   thumbnailSrc="/images/preview.png"
 *   fullSrc="/images/full.png"
 *   alt="Prévia da funcionalidade"
 *   onClick={() => openModal(imageData)}
 *   clickText="Clique para ampliar"
 * />
 * 
 * // Dentro de ContentBlock
 * <ContentBlock>
 *   <TextContent title="RESULTADO" paragraphs={["Visualização final..."]} />
 *   <ExpandableImage 
 *     thumbnailSrc="/images/result-thumb.png"
 *     fullSrc="/images/result-full.png"
 *     alt="Resultado da implementação"
 *     className="result-image"
 *   />
 * </ContentBlock>
 * ```
 * 
 * @param thumbnailSrc - URL da imagem miniatura/prévia
 * @param fullSrc - URL da imagem completa (para nova aba)
 * @param alt - Texto alternativo para acessibilidade  
 * @param clickText - Texto do botão/instrução de clique
 * @param newTabText - Texto indicando abertura em nova aba
 * @param className - Classe CSS adicional
 * @param onClick - Ação customizada (substitui abertura em nova aba)
 */
function ExpandableImage({ 
    thumbnailSrc, 
    fullSrc, 
    alt = "Clique para visualizar a imagem completa",
    clickText = "Abrir imagem inteira (nova guia)",
    newTabText = "Abrir em uma nova janela",
    className,
    onClick
}: ExpandableImageProps) {
    
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            window.open(fullSrc, '_blank');
        }
    };

    return (
        <div className={`${styles.container} ${className || ''}`} onClick={handleClick}>
            <div className={styles.imageContainer}>
                <img src={thumbnailSrc} alt={alt} className={styles.offImg} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.textWrapper}>
                <p>{clickText}</p>
                <img alt={newTabText} src={newWindowIcon} />
            </div>
        </div>
    );
}

export default ExpandableImage;