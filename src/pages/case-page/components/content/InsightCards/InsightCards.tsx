import { InsightCardsProps } from "../../../../../interfaces";
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
 * 
 * @returns JSX.Element contendo o card com imagem e texto
 */
function InsightCards({ img, text, alt }: InsightCardsProps) {
  return (
    <div className={styles.container}>
      <img src={img} alt={alt ?? ""} />
      <p>{text}</p>
    </div>
  );
}

export default InsightCards;
