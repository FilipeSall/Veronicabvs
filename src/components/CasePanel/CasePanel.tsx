import { CasePanelInterface } from '../../interfaces/components';
import styles from './casepanel.module.scss';

function CasePanel({data, nome, projeto}: CasePanelInterface) {
    return (
        <div className={styles.container}>
            <p>{nome}</p>
            <h1>{projeto}</h1>
        </div>
    )
}

export default CasePanel