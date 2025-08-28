import styles from './timereading.module.scss';
import clockIcon from '../../../../../assets/svgs/clock.svg';

type TimeReadingProps = {
    time?: number,
    totalReading?: boolean
}

function TimeReading({ time, totalReading = false }: TimeReadingProps) {
    if (time == null) {
        return null;
    }

    const min = Math.max(0, Math.floor(time - 1));
    const max = Math.ceil(time + 1);

    return (
        <span className={styles.timeReadingSpan}>
            <img alt='relogio' src={clockIcon} className={totalReading ? styles.iconTotalReading : styles.icon} />
            {totalReading ? (
                <p className={styles.txtTotalReading}>{min} - {max} minutos</p>
            ) : <p >{time < 1 ? '<1' : String(time)} min</p>}
        </span>
    );
}

export default TimeReading;
