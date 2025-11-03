import styles from './openscreenimg.module.scss';
import defaultPreviewImg from '../../../../../assets/caseBemol/fullscreemimg.webp';
import defaultNewBtn from '../../../../../assets/svgs/new-window-orange.svg';
import defaultFullscreen from '../../../../../assets/caseBemol/ReguaComunicaçaoNotification.png';

type OpenScreenImgProps = {
    previewImg?: string;
    fullscreenImg?: string;
    alt?: string;
    instructionText?: string;
    buttonText?: string;
    buttonIcon?: string;
    onClick?: () => void;
    className?: string;
}

/**
 * OpenScreenImg - Componente para exibir imagem com opção de tela cheia
 * 
 * Este componente renderiza uma imagem com botão estilizado para abrir
 * uma versão completa em nova guia. Layout específico com texto instructivo
 * e botão posicionado abaixo da imagem. Por padrão, usa as imagens da
 * régua de comunicação do Case Bemol.
 * 
 * @example
 * ```tsx
 * // Uso padrão (Case Bemol - régua de comunicação)
 * <OpenScreenImg />
 * 
 * // Com imagens customizadas
 * <OpenScreenImg 
 *   previewImg="/images/diagram-preview.webp"
 *   fullscreenImg="/images/diagram-full.png"
 *   alt="Diagrama do processo"
 *   instructionText="💡 Visualize o diagrama completo:"
 *   buttonText="(abrir diagrama)"
 * />
 * 
 * // Com ação customizada
 * <OpenScreenImg 
 *   previewImg="/images/chart.png"
 *   onClick={() => openModal(chartData)}
 *   buttonText="(ampliar gráfico)"
 * />
 * 
 * // Dentro de um ContentBlock
 * <ContentBlock>
 *   <TextContent 
 *     title="VISUALIZAÇÃO COMPLETA"
 *     paragraphs={["Para ver todos os detalhes..."]}
 *   />
 *   <OpenScreenImg 
 *     previewImg="/images/process.webp"
 *     fullscreenImg="/images/process-hd.png"
 *   />
 * </ContentBlock>
 * ```
 * 
 * @param previewImg - URL da imagem de prévia (padrão: régua comunicação preview)
 * @param fullscreenImg - URL da imagem completa para nova guia (padrão: régua comunicação full)
 * @param alt - Texto alternativo da imagem
 * @param instructionText - Texto instrutivo acima do botão
 * @param buttonText - Texto do botão
 * @param buttonIcon - Ícone do botão
 * @param onClick - Ação customizada (substitui abertura em nova aba)
 * @param className - Classe CSS adicional
 */
function OpenScreenImg({
    previewImg = defaultPreviewImg,
    fullscreenImg = defaultFullscreen,
    alt = 'imagem com o funil',
    instructionText = '',
    buttonText = 'Ampliar',
    buttonIcon = defaultNewBtn,
    onClick,
    className
}: OpenScreenImgProps) {

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            window.open(fullscreenImg, '_blank');
        }
    };

    return (
        <div className={`${styles.container} ${className || ''}`}>
            <img src={previewImg} alt={alt} />
            <div className={styles.btnWrapper}>
                <p>{instructionText}</p>
                <button className={styles.btn} onClick={handleClick}>
                    {buttonText}
                    <img src={buttonIcon} alt="Abrir em nova janela" />
                </button>
            </div>
        </div>
    );
}

export default OpenScreenImg