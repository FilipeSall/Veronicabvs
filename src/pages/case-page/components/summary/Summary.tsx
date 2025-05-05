import { SummaryInterface } from '../../../../interfaces/case';
import TimeReading from '../timeReading/TimeReading';
import styles from './summary.module.scss';
import sucessoIcon from '../../../../assets/svgs/sucesso.svg';
import { useSmoothScroll } from '../../../../hooks/useSmoothScrol';

function Summary({ items, bg, color }: SummaryInterface) {
    const scrollToElement = useSmoothScroll();

    return (
        <nav className={styles.navContainer} style={{ background: bg, color: color }}>
            <div className={styles.titleWrapper}>
                <h1>Sumário (principais entregas)</h1>
                <p>- 💡 Dica: É navegável!</p>
            </div>
            <div className={styles.anchorWrapper}>
                {items.map((item) => (
                    <div
                        className={styles.anchor}
                        key={item.id}
                    >
                        <a 
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToElement(item.href.replace('#', ''));
                            }}
                        >
                            <span className={styles.anchorId}>{item.id}</span> {item.title}
                        </a>
                        {item.isSpecial && <p className={styles.specialText}> - {item.specialNote} <img alt='sucesso' src={sucessoIcon} /></p>}
                        <TimeReading time={item.readingTime} />
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Summary