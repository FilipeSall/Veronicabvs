import styles from './openscreenimg.module.scss'
import img from '../../../../../assets/caseBemol/fullscreemimg.webp'
import newBtn from '../../../../../assets/svgs/new-window-orange.svg'
import fullscreen from '../../../../../assets/caseBemol/ReguaComunicaçaoNotification.png';

/**
 * OpenScreenImg - Componente para exibir imagem com opção de tela cheia
 * 
 * Este componente renderiza uma imagem com botão para abrir em nova guia
 * em resolução completa. Ideal para diagramas, fluxogramas e imagens
 * detalhadas que precisam ser visualizadas em tamanho maior.
 * 
 * @example
 * ```tsx
 * // Uso simples
 * <OpenScreenImg />
 * 
 * // Após explicação textual
 * <ContentBlock>
 *   <ContentSection 
 *     title="RÉGUA DE COMUNICAÇÃO"
 *     paragraphs={["Estrutura completa da régua..."]}
 *   />
 *   <OpenScreenImg />
 * </ContentBlock>
 * 
 * // Em seção de processo
 * <ContentBlock>
 *   <h3>Visualização do Processo</h3>
 *   <p>Clique na imagem para ver detalhes:</p>
 *   <OpenScreenImg />
 * </ContentBlock>
 * ```
 * 
 * Funcionalidades:
 * - Imagem de prévia otimizada (WebP)
 * - Botão para abrir em nova guia
 * - Imagem em alta resolução na nova guia
 * - Interface intuitiva com ícone explicativo
 */
function OpenScreenImg() {

    const handleOpenNewTab = () => {
        window.open(fullscreen, '_blank');
    };

    return (
        <div className={styles.container}>
            <img src={img} alt='imagem com o funil' />
            <div className={styles.btnWrapper}>
                <p>💡 Clique para abrir imagem inteira:</p>
                <button className={styles.btn}  onClick={handleOpenNewTab} >
                    (nova guia)
                    <img src={newBtn} />
                </button>
            </div>

        </div>
    )
}

export default OpenScreenImg