import { ListByTypeProps } from "../../../../../interfaces";
import styles from "./listbytype.module.scss";

interface ListByTypeComponentProps {
  items: ListByTypeProps[];
  type: "day" | "month" | "year";
  color: string;
}

function ListByType({ items, type, color }: ListByTypeComponentProps) {
  const getTypeLabel = (
    type: "day" | "month" | "year" | undefined,
    index: number
  ): string => {
    if (!type) return "";

    const labels = {
      day: "Dia",
      month: "Mês",
      year: "Ano",
    };

    return `${labels[type]} ${index + 1}`;
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.ItemWrapper}>
          <div className={styles.titleContainer}>
            <h3>
              <span
                className={styles.typeLabel}
                style={{ color: color || "#ffffff" }}
              >
                {getTypeLabel(type, index)}
              </span>{" "}
              {item.title}
            </h3>
          </div>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ListByType;
