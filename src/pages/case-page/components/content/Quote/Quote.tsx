import { QuoteProps } from "../../../../../interfaces";
import styles from "./quote.module.scss";

function Quote({ text, title }: QuoteProps) {
  return (
    <div className={styles.quoteContainer}>
      <div>
        {title && <h3>{title}</h3>}
        <p>"{text}"</p>
      </div>
    </div>
  );
}

export default Quote;
