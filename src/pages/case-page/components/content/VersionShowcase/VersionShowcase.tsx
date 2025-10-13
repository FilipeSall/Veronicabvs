import styles from './versionshowcase.module.scss';
import { VersionShowcaseProps } from '../../../../../interfaces';

function VersionShowcase({ description, imgs, title, date }: VersionShowcaseProps) {
    return (
        <div className={styles.showCaseContainer}>

            <div className={styles.showCaseHeader}>
                <div>
                    <h3>{title}</h3>
                    <p>{date}</p>
                </div>
                <p>{description}</p>
            </div>

            <div className={styles.showCaseContent}>
                {imgs && imgs.map((img, i) => (
                    <img src={img.src} alt={img.alt} key={i} />
                ))}
            </div>
        </div>
    )
}

export default VersionShowcase
