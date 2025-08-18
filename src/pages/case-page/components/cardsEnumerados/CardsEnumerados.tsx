import { CardsEnumeradosInterface } from '../../../../interfaces/case';
import styles from './cardsenumerados.module.scss';

type CardsEnumeradosProps = {
    cards: CardsEnumeradosInterface[];
    title: string;
    color: string;
}

/**
 * CardsEnumerados - Componente para exibir lista de cards numerados
 * 
 * Este componente renderiza uma coleção de cards com numeração automática,
 * título personalizável e cor temática. Ideal para listar benefícios,
 * resultados, entregas de valor ou qualquer conteúdo sequencial.
 * 
 * @example
 * ```tsx
 * // Exemplo com entregas de valor
 * <CardsEnumerados 
 *   title="ENTREGA DE VALOR"
 *   color="#4C31E0"
 *   cards={[
 *     {
 *       title: "Referência oficial",
 *       text: "Promove o entendimento do produto e alinha times."
 *     },
 *     {
 *       title: "Otimização do trabalho",
 *       text: "Reduz dúvidas e facilita a compreensão dos processos."
 *     }
 *   ]}
 * />
 * 
 * // Com cor temática diferente
 * <CardsEnumerados 
 *   title="RESULTADOS ALCANÇADOS"
 *   color="#FF6B35"
 *   cards={achievements}
 * />
 * 
 * // Em ContentBlock
 * <ContentBlock>
 *   <CardsEnumerados
 *     title="IMPACTOS POSITIVOS"
 *     color="#00C851"
 *     cards={impacts}
 *   />
 * </ContentBlock>
 * ```
 * 
 * @param cards - Array de objetos com title e text para cada card
 * @param title - Título da seção em maiúsculas
 * @param color - Cor hex para a numeração dos cards
 */
function CardsEnumerados({ cards, color, title }: CardsEnumeradosProps) {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <div className={styles.cardsWrapper}>
                {cards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.numberWrapper}>
                            <span 
                                className={styles.number} 
                                style={{ color }}
                            >
                                {index + 1}.
                            </span>
                            <h2 className={styles.title}>{card.title}</h2>
                        </div>
                        <p className={styles.text}>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsEnumerados;