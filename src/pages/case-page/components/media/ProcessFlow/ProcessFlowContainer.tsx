import styles from './processflowcontainer.module.scss';
import arrowWhite from '../../../../../assets/caseBemol/Polygonwhite.svg';

type ListInterface = {
    title: string;
    lists: string[];
}

type ProcessFlowContainerProps = {
    arrowColored: string;
    arrowImageAlt?: string;
    color: string;
    lists: ListInterface[];
}

/**
 * ProcessFlowContainer - Componente para exibir fluxos de processo com setas
 * 
 * Este componente renderiza um fluxo horizontal com etapas, setas direcionais
 * e listas de itens para cada etapa. Inclui alternância automática de cores
 * e direção das setas para criar um fluxo visual dinâmico.
 * 
 * @example
 * ```tsx
 * // Exemplo com dados de processo
 * <ProcessFlowContainer
 *   arrowColored="/assets/blue-arrow.svg"
 *   color="#4C31E0"
 *   lists={[
 *     {
 *       title: "ANÁLISE",
 *       lists: ["Identificação do problema", "Coleta de dados"]
 *     },
 *     {
 *       title: "SOLUÇÃO",
 *       lists: ["Design da proposta", "Validação"]
 *     }
 *   ]}
 * />
 * 
 * // Com alt text customizado
 * <ProcessFlowContainer
 *   arrowColored="/assets/arrow.svg"
 *   arrowImageAlt="seta do processo"
 *   color="#FF6B35"
 *   lists={processSteps}
 * />
 * ```
 * 
 * @param arrowColored - URL da imagem da seta colorida
 * @param arrowImageAlt - Texto alternativo para as setas (padrão: "seta")
 * @param color - Cor hex para destacar etapas intermediárias
 * @param lists - Array com dados das etapas (título e lista de itens)
 */
function ProcessFlowContainer({ 
    arrowColored, 
    arrowImageAlt = "seta", 
    color, 
    lists 
}: ProcessFlowContainerProps) {
    return (
        <div className={styles.container}>
            <div className={styles.columnWrapper}>
                {lists.map((item, index) => {
                    // Alterna a direção das setas (índices pares ficam invertidos)
                    const isReversed = index % 2 === 0;
                    
                    // Primeiro e último itens são sempre brancos
                    const isFirstOrLast = index === 0 || index === lists.length - 1;
                    const currentColor = isFirstOrLast ? '#FFFFFF' : color;
                    const currentArrow = isFirstOrLast ? arrowWhite : arrowColored;
                    
                    return (
                        <div key={index} className={styles.column}>
                            <img 
                                src={currentArrow} 
                                alt={arrowImageAlt} 
                                className={`${styles.arrow} ${isReversed ? styles.reverse : ''}`} 
                            />
                            <p 
                                className={styles.title}
                                style={{ color: currentColor }}
                            >
                                {item.title}
                            </p>
                            <ul className={styles.list}>
                                {item.lists.map((listItem, listIndex) => (
                                    <li key={listIndex}>
                                        {listItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProcessFlowContainer;