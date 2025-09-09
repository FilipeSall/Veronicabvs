import { InsightCardsProps } from "../../../../../interfaces";
import { normalizeMeasures } from "../../../../../utils/cssUtils";
import styles from "./insightcards.module.scss";

/**
 * Componente para exibir um card de insight com imagem e texto
 *
 * @description
 * Este componente renderiza um card contendo uma imagem e um texto descritivo,
 * ideal para apresentar insights, descobertas ou evidências em estudos de caso.
 *
 * @example
 * ```tsx
 * <InsightCards
 *   img="/path/to/image.jpg"
 *   text="Este é um insight importante sobre o comportamento do usuário"
 *   alt="Descrição da imagem para acessibilidade"
 * />
 * ```
 *
 * @param props - Propriedades do componente
 * @param props.img - URL da imagem a ser exibida no card
 * @param props.text - Texto do insight a ser apresentado
 * @param props.alt - Texto alternativo para a imagem (opcional, para acessibilidade)
 * @param props.title - Título opcional do card
 * @param props.gap - Gap entre imagem e texto
 *
 * @returns JSX.Element contendo o card com imagem e texto
 */
function InsightCards({ img, text, alt, title, gap }: InsightCardsProps) {
  return (
    <div
      className={styles.container}
      style={{
        gap: gap ? normalizeMeasures(gap) : normalizeMeasures("26"),
      }}
    >
      <img src={img} alt={alt ?? ""} className={styles.img} />
      <div className={styles.textWrapper}>
        {title && (
          <div className={styles.titleWrapper}>
            <div>
              <div className={styles.bullet}></div>
              <h3>{title}</h3>
            </div>
          </div>
        )}
        <p>{text}</p>
      </div>
    </div>
  );
}

export default InsightCards;
