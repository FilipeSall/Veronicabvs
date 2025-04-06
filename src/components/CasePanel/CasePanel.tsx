import { CasePanelInterface } from '../../interfaces/components';
import styles from './casepanel.module.scss';

function CasePanel({ data, nome, projeto }: CasePanelInterface) {
    return (
        <div className={styles.container}>
            <div className={styles.infoWrapper}>
                <p>{nome}</p>
                <div className={styles.projectDataWrapper}>
                    <h1>{projeto}</h1>
                    <p>{data}</p>
                </div>
            </div>
        </div>
    )
}

export default CasePanel