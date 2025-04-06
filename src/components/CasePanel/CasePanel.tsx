import { CasePanelInterface } from '../../interfaces/components';
import { CasesInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import { Link, useLocation } from 'react-router-dom';
import styles from './casepanel.module.scss';

function CasePanel({ data, nome, projeto }: CasePanelInterface) {

    const location = useLocation();
    const currentPath = location.pathname;

    const getCurrentCaseId = () => {
        if (currentPath.startsWith('/case/')) {
            const id = currentPath.split('/').pop();
            return id ? Number(id) : null;
        }
        return null;
    };
    
    const currentCaseId = getCurrentCaseId();

    return (
        <div className={styles.container}>
            <div className={styles.infoWrapper}>
                <p className={styles.nome}>{nome}</p>

                <div className={styles.projectDataWrapper}>
                    <h1 className={styles.projeto}>{projeto}</h1>
                    <div className={styles.dataDotWrapper}>
                        <span className={styles.dot}></span>
                        <p className={styles.data}>{data}</p>
                    </div>
                </div>
            </div>

            <div className={styles.navWrapper}>
                {CasesData && CasesData.map((caseItem: CasesInterface, i: number) => (
                    <Link
                        key={i}
                        to={`/case/${caseItem.id}`}
                        className={`${styles.caseNav} ${currentCaseId === caseItem.id ? styles.active : ''}`}
                    >
                        {caseItem.id}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CasePanel