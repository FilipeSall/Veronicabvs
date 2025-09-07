import { SimpleVerticalTimelineProps } from "../../../../../interfaces";
import styles from "./verticaltimeline.module.scss";

function VerticalTimeline({ items }: SimpleVerticalTimelineProps) {
  return (
    <div className={styles.timelineWrapper}>
      {items.map((item, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.dotColumn}>
            <div className={styles.dot} />
            <div className={styles.dashedLine} />
          </div>
          <div className={styles.stepWrapper}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VerticalTimeline;
