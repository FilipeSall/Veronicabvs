import { CardsEnumeradosInterface } from '../../../../interfaces/case';
import styles from './cardsenumerados.module.scss';

type CardsEnumeradosProps = {
    cards: CardsEnumeradosInterface[];
    title: string;
    color: string;
}

function CardsEnumerados({ cards, color, title }: CardsEnumeradosProps) {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
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