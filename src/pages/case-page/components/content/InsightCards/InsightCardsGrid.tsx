import { InsightCardsProps } from "../../../../../interfaces";
import { normalizeMeasures } from "../../../../../utils/cssUtils";
import InsightCards from "./InsightCards";
import styles from "./insightcardsgrid.module.scss";

interface InsightCardsGridProps {
  /** Array de itens para criar múltiplos InsightCards */
  items: InsightCardsProps[];
  /** CSS customizado para espaçamento e margem */
  customCss?: {
    itemGap?: string;
    gap?: string;
    marginTop?: string;
    marginBottom?: string;
  };
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
 * @param props.customCss - CSS customizado para espaçamento e margem (itemGap padrão: 26, gap padrão: 26, marginTop padrão: 0, marginBottom padrão: 0)
 *
 * @returns JSX.Element contendo os InsightCards organizados em grid com gap customizável
 */
function InsightCardsGrid({ items, customCss }: InsightCardsGridProps) {
  const defaultCustomCss = {
    itemGap: "26",
    gap: "26",
    marginTop: "0",
    marginBottom: "0",
    ...customCss
  };

  return (
    <div 
      className={styles.container} 
      style={{ 
        gap: normalizeMeasures(defaultCustomCss.itemGap),
        marginTop: normalizeMeasures(defaultCustomCss.marginTop),
        marginBottom: normalizeMeasures(defaultCustomCss.marginBottom)
      }}
    >
      {items.map((item, index) => (
        <InsightCards
          key={index}
          img={item.img}
          text={item.text}
          alt={item.alt}
          title={item.title}
          gap={normalizeMeasures(defaultCustomCss.gap)}
        />
      ))}
    </div>
  );
}

export default InsightCardsGrid;
