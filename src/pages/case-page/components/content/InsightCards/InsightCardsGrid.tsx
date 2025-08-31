import { InsightCardsProps } from "../../../../../interfaces";
import InsightCards from "./InsightCards";
import styles from "./insightcardsgrid.module.scss";

interface InsightCardsGridProps {
  /** Array de itens para criar múltiplos InsightCards */
  items: InsightCardsProps[];
}

/**
 * Grid que renderiza múltiplos componentes InsightCards de forma organizada
 * 
 * @description
 * Este componente recebe um array de itens e renderiza múltiplos InsightCards
 * organizados em uma grid vertical com gap de 24px entre os componentes.
 * Ideal para exibir listas de insights, descobertas ou evidências.
 * 
 * @example
 * ```tsx
 * const insightItems = [
 *   {
 *     img: "/path/to/image1.jpg",
 *     text: "Primeiro insight importante sobre o produto",
 *     alt: "Descrição da primeira imagem"
 *   },
 *   {
 *     img: "/path/to/image2.jpg", 
 *     text: "Segundo insight relevante para o usuário",
 *     alt: "Descrição da segunda imagem"
 *   }
 * ];
 * 
 * <InsightCardsGrid items={insightItems} />
 * ```
 * 
 * @param props - Propriedades do componente
 * @param props.items - Array de objetos InsightCardsProps contendo img, text e alt
 * 
 * @returns JSX.Element contendo os InsightCards organizados em grid com gap de 24px
 */
function InsightCardsGrid({ items }: InsightCardsGridProps) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <InsightCards
          key={index}
          img={item.img}
          text={item.text}
          alt={item.alt}
        />
      ))}
    </div>
  );
}

export default InsightCardsGrid;