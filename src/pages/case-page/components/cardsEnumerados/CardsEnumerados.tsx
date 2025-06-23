import { CardsEnumeradosInterface } from '../../../../interfaces/case';
import styles from './cardsenumerados.module.scss';

function CardsEnumerados({ cards }: { cards: CardsEnumeradosInterface[] }) {
    return (
        <div className={styles.container}>
            <h3>ENTREGA DE VALOR</h3>
            <div>
                {cards.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.numberWrapper}>
                            <span className={styles.number}>{index + 1}.</span>
                            <h2 className={styles.title}>{card.title}</h2>
                        </div>
                        <p className={styles.text}>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardsEnumerados