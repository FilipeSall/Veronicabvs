import { useEffect, useRef, useState } from 'react';
import styles from './processflowcontainer.module.scss';
import arrowWhite from '../../../../../assets/caseBemol/Polygonwhite.svg';
import touchIcon from '../../../../../assets/svgs/touch.svg';

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
    const [isTouch, setIsTouch] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement | null>(null);
    const draggingTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const hasTouch =
            typeof window !== 'undefined' &&
            (navigator.maxTouchPoints > 0 ||
                'ontouchstart' in window ||
                window.matchMedia('(pointer: coarse)').matches);
        setIsTouch(hasTouch);
    }, []);

    useEffect(() => {
        const scrollArea = scrollAreaRef.current;
        if (!scrollArea) return;

        const handleScroll = () => {
            setIsDragging(true);
            if (draggingTimeoutRef.current) {
                window.clearTimeout(draggingTimeoutRef.current);
            }
            draggingTimeoutRef.current = window.setTimeout(() => {
                setIsDragging(false);
            }, 300);
        };

        scrollArea.addEventListener('scroll', handleScroll, { passive: true });
        scrollArea.addEventListener('touchstart', handleScroll, { passive: true });
        scrollArea.addEventListener('touchend', handleScroll, { passive: true });

        return () => {
            scrollArea.removeEventListener('scroll', handleScroll);
            scrollArea.removeEventListener('touchstart', handleScroll);
            scrollArea.removeEventListener('touchend', handleScroll);
            if (draggingTimeoutRef.current) {
                window.clearTimeout(draggingTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className={`${styles.container} ${isTouch ? styles.isTouch : ''}`}>
            <div className={styles.scrollArea} ref={scrollAreaRef}>
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
            <div
                className={`${styles.dragHint} ${isDragging ? styles.dragHintHidden : ''}`}
                aria-hidden="true"
            >

                <span>Arraste e veja mais</span>
                <img src={touchIcon} alt="" />
            </div>
        </div>
    );
}

export default ProcessFlowContainer;
