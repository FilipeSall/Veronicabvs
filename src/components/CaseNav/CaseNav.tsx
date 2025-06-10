import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './casenav.module.scss';
import { CaseNavInterface } from '../../interfaces/components';
import successIcon from '../../assets/svgs/sucesso.svg';
import awardIcon from '../../assets/svgs/Medalha.svg';

function CaseNav({
    caseValue,
    path,
    imgHover,
    CasePreview,
    isUnderConstruction,
}: CaseNavInterface) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={path}
            onClick={(e) => isUnderConstruction && e.preventDefault()}
            className={`${styles.caseNav} ${isUnderConstruction && styles.disabled}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.caseNavHeader}>
                <h3>{CasePreview?.title}</h3>
                <p>{CasePreview?.description}</p>
            </div>

            {/* IMAGEM */}
            <div className={styles.caseImgWrapper}>
                {isUnderConstruction ? 
                (
                    <p className={styles.underConstructionText}>[EM BREVE]</p>
                ) : isHovered ? (
                    <img
                        className={styles.hoverImg}
                        src={imgHover}
                        alt={CasePreview?.title}
                    />
                ) : (
                    <img
                        className={styles.imgPreview}
                        src={CasePreview.img}
                        alt={CasePreview?.title}
                    />
                )}
            </div>

            {/* ICONE ESPECIAL*/}
            {caseValue && (
                <div className={styles.caseIndicator}>
                    <img
                        src={caseValue === 'sucesso' ? awardIcon : successIcon}
                        alt={`Caso ${caseValue}`}
                        className={styles.caseIcon}
                    />
                    {isHovered && (
                        <p className={styles.caseTypeIndicator}>
                            — {caseValue}
                        </p>
                    )}
                </div>
            )}
        </Link>
    );
}

export default CaseNav;