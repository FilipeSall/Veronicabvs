import { SimpleVerticalTimelineProps } from "../../../../../interfaces";
import styles from "./verticaltimeline.module.scss";

function VerticalTimeline({ items }: SimpleVerticalTimelineProps) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.stepWrapper}>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default VerticalTimeline;
