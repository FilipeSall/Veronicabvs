import { SummaryInterface } from '../../../../../interfaces/navigation';
import TimeReading from '../../content/TimeReading/TimeReading';
import styles from './summary.module.scss';
import sucessoIcon from '../../../../../assets/svgs/sucesso.svg';
import { useSmoothScroll } from '../../../../../hooks/useSmoothScrol';
import { hexToRgba } from '../../../../../utils/hexToRgba';

function Summary({ items, bg, color, navegavelColor, totalReading }: SummaryInterface) {
    const scrollToElement = useSmoothScroll();

    const backgroundWithOpacity = hexToRgba(bg, 0.25);

    return (
        <nav className={styles.navContainer} style={{ background: backgroundWithOpacity, color: color }}>
            <div className={styles.navContent}>
                <div className={styles.summaryContentWrapper}>
                    <div className={styles.titleWrapper}>
                        <h1>Sumário <span>(principais entregas) </span></h1>
                        <p>
                            — 💡<span style={{ color: navegavelColor ? navegavelColor : '#F3DA8B' }}> Dica: É navegável!</span>
                        </p>
                    </div>
                    <div className={styles.anchorWrapper}>
                        {items.map((item) => (
                            <div className={styles.anchor} key={item.id}>
                                <a
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToElement(item.href.replace('#', ''));
                                    }}
                                >
                                    <span className={styles.anchorId}>{item.id}</span>
                                    <p>{item.title}</p>
                                    <TimeReading time={item.readingTime} />
                                </a>
                                {item.isSpecial && (
                                    <p className={styles.specialText}>
                                        <img alt='sucesso' src={sucessoIcon} /> - {item.specialNote}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {totalReading != null && totalReading > 0 && (
                    <div className={styles.totalReadingContaine}>
                        <TimeReading time={totalReading} totalReading />
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Summary;