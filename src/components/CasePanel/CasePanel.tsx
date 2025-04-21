import { CasePanelInterface } from '../../interfaces/components';
import { CasesInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import { Link, useLocation } from 'react-router-dom';
import styles from './casepanel.module.scss';
import { useState } from 'react';

function CasePanel({ data, nome, projeto }: CasePanelInterface) {

    const location = useLocation();
    const currentPath = location.pathname;
    const [hoveredId, setHoveredId] = useState<number | null>(null);

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
                {CasesData && CasesData.map((caseItem: CasesInterface, i: number) => {
                    const isActive = currentCaseId === caseItem.id;
                    const isHovered = hoveredId === caseItem.id;

                    return (
                        <Link
                            key={i}
                            to={`/case/${caseItem.id}`}
                            className={`${styles.caseNav} ${isActive ? styles.active : ''}`}
                            style={isActive || isHovered ? { backgroundColor: caseItem.bgColor } : {}}
                            onMouseEnter={() => setHoveredId(caseItem.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {caseItem.id}
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default CasePanel