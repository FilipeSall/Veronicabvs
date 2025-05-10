import { CasePanelInterface } from '../../interfaces/components';
import { CasesInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import { Link, useLocation } from 'react-router-dom';
import styles from './casepanel.module.scss';
import { useState, useCallback } from 'react';

function CasePanel({ data, nome, projeto, isUnderConstruction = false }: CasePanelInterface) {

    const location = useLocation();
    const currentPath = location.pathname;
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    // Obtém o ID do case atual a partir da URL
    const getCurrentCaseId = useCallback(() => {
        if (currentPath.startsWith('/case/')) {
            const id = currentPath.split('/').pop();
            return id ? Number(id) : null;
        }
        return null;
    }, [currentPath]);

    const currentCaseId = getCurrentCaseId();

    // Previne a navegação quando o painel ou o case específico estiver em construção
    const handleClick = useCallback((e: React.MouseEvent, caseItem: CasesInterface) => {
        if (isUnderConstruction || caseItem.underConstruction) {
            e.preventDefault();
        }
    }, [isUnderConstruction]);

    // Determina o estilo com base no estado do item
    const getItemStyle = useCallback((isActive: boolean, isHovered: boolean, caseItem: CasesInterface) => {
        const itemUnderConstruction = isUnderConstruction || caseItem.underConstruction;

        // Se estiver em construção, apenas altera o cursor para not-allowed
        if (itemUnderConstruction) {
            return { cursor: 'not-allowed' };
        }

        // Se não estiver em construção, o comportamento normal de hover/active se aplica
        if (isActive || isHovered) {
            return { backgroundColor: caseItem.bgColor };
        }

        return {};
    }, [isUnderConstruction]);

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
                    const itemUnderConstruction = isUnderConstruction || caseItem.underConstruction;

                    return (
                        <Link
                            key={i}
                            to={`/case/${caseItem.id}`}
                            className={`${styles.caseNav} ${isActive ? styles.active : ''} ${itemUnderConstruction ? styles.underConstruction : ''}`}
                            style={getItemStyle(isActive, isHovered, caseItem)}
                            onMouseEnter={() => setHoveredId(caseItem.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={(e) => handleClick(e, caseItem)}
                        >
                            {caseItem.id}
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default CasePanel;