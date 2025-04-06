import { CasePanelInterface } from '../../interfaces/components';
import { CasesInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import { Link } from 'react-router-dom';
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
            <div className={styles.navWrapper}>
                {CasesData && CasesData.map((caseItem: CasesInterface, i: number) => (
                    <Link 
                        key={i} 
                        to={`/case/${caseItem.id}`} 
                        className={styles.caseNav}
                    >
                        {caseItem.id}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CasePanel