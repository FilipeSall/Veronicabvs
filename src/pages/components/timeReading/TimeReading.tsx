import styles from './timereading.module.scss';
import clockIcon from '../../../assets/svgs/clock.svg';

type TimeReadingProps = {
    time: number
}

function TimeReading({ time }: TimeReadingProps) {
    return (
        <span className={styles.timeReadingSpan}>
            <img alt='relogio' src={clockIcon} className={styles.icon} />
            <p>{time < 1 ? '<1' : String(time)} min</p>
        </span>
    )
}

export default TimeReading