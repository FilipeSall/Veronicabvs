import { CardsEnumeradosInterface } from '../../../../../interfaces/content';
import styles from './cardsenumerados.module.scss';

type CardsEnumeradosProps = {
    cards: CardsEnumeradosInterface[];
    color: string;
}

/**
 * CardsEnumerados - Componente para exibir lista de cards numerados
 * 
 * Este componente renderiza uma coleção de cards com numeração automática
 * e cor temática. Ideal para listar benefícios, resultados, entregas de valor 
 * ou qualquer conteúdo sequencial. Use dentro de ContentSection para títulos.
 * 
 * @example
 * ```tsx
 * // Uso recomendado com ContentSection
 * <ContentSection title="ENTREGA DE VALOR">
 *   <CardsEnumerados 
 *     color="#4C31E0"
 *     cards={[
 *       {
 *         title: "Referência oficial",
 *         text: "Promove o entendimento do produto e alinha times."
 *       },
 *       {
 *         title: "Otimização do trabalho",
 *         text: "Reduz dúvidas e facilita a compreensão dos processos."
 *       }
 *     ]}
 *   />
 * </ContentSection>
 * 
 * // Exemplo com diferentes cores
 * <ContentSection title="MELHORIAS">
 *   <CardsEnumerados 
 *     color="#FF6B35"
 *     cards={improvements}
 *   />
 * </ContentSection>
 * 
 * // Em ContentBlock estruturado
 * <ContentBlock>
 *   <ContentSection title="IMPACTOS POSITIVOS">
 *     <CardsEnumerados
 *       color="#00C851"
 *       cards={impacts}
 *     />
 *   </ContentSection>
 * </ContentBlock>
 * ```
 * 
 * @param cards - Array de objetos com title e text para cada card
 * @param color - Cor hex para a numeração dos cards
 */
function CardsEnumerados({ cards, color }: CardsEnumeradosProps) {
    return (
        <div className={styles.container}>
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