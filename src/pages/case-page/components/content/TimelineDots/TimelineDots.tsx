import { TimelineDotsProps } from "../../../../../interfaces";
import styles from "./timelinedots.module.scss";

function TimelineDots({ itemsCount }: TimelineDotsProps) {
  return (
    <div className={styles.dotsContainer}>
      {Array.from({ length: itemsCount }).map((_, index) => (
        <div key={index} className={styles.dotWrapper}>
          <div className={styles.dot} />
          {index < itemsCount - 1 && <div className={styles.dashedLine} />}
        </div>
      ))}
    </div>
  );
}

export default TimelineDots;