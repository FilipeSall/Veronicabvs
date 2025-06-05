import { CasePanelInterface } from '../../interfaces/components';
import { CasesInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import { Link, useLocation } from 'react-router-dom';
import styles from './casepanel.module.scss';
import { useState, useCallback } from 'react';
import engrenagemIcon from '../../assets/svgs/engrenagem.svg';

function CasePanel({ nome, projeto, miniImg, isUnderConstruction = false }: CasePanelInterface) {

    const location = useLocation();
    const currentPath = location.pathname;
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const getCurrentCaseId = useCallback(() => {
        if (currentPath.startsWith('/case/')) {
            const id = currentPath.split('/').pop();
            return id ? Number(id) : null;
        }
        return null;
    }, [currentPath]);

    const currentCaseId = getCurrentCaseId();

    const handleClick = useCallback((e: React.MouseEvent, caseItem: CasesInterface) => {
        if (isUnderConstruction || caseItem.underConstruction) {
            e.preventDefault();
        }
    }, [isUnderConstruction]);

    const getItemStyle = useCallback((isActive: boolean, isHovered: boolean, caseItem: CasesInterface) => {
        const itemUnderConstruction = isUnderConstruction || caseItem.underConstruction;

        if (itemUnderConstruction) {
            return { cursor: 'not-allowed' };
        }

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
                </div>
            </div>

            <div className={styles.casePanelShowcase }>
                <img
                    src={miniImg}
                    alt="Preview do case"
                    className={styles.casePanelThumbnail}
                />

                <div className={styles.textNavWrapper}>
                    <p>💡Explore os cases:</p>
                    <div className={styles.navWrapper}>
                        {CasesData && CasesData.map((caseItem: CasesInterface, i: number) => {
                            const isActive = currentCaseId === caseItem.id;
                            const isHovered = hoveredId === caseItem.id;
                            const itemUnderConstruction = isUnderConstruction || caseItem.underConstruction;
                            const showIcon = itemUnderConstruction && isHovered;
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
                                    <div className={styles.contentWrapper}>
                                        {!showIcon && (
                                            <span className={styles.caseId}>{caseItem.id}</span>
                                        )}
                                        {showIcon && (
                                            <img src={engrenagemIcon} className={styles.constructionIcon} alt="Em construção" />
                                        )}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CasePanel;