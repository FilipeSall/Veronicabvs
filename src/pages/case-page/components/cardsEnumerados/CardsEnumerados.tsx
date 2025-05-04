import { CardsEnumeradosInterface } from '../../../../interfaces/case';
import styles from './cardsenumerados.module.scss';

function CardsEnumerados({ cards }: { cards: CardsEnumeradosInterface[] }) {
    return (
        <div className={styles.container}>
            {cards.map((card, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.numberWrapper}>
                        <span className={styles.number}>{index + 1}</span>
                        <h2 className={styles.title}>{card.title}</h2>
                    </div>
                    <p className={styles.text}>{card.text}</p>
                </div>
            ))}
        </div>
    )
}

export default CardsEnumerados