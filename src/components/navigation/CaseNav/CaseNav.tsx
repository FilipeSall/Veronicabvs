import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './casenav.module.scss';
import { CaseNavInterface } from '../../../interfaces/components';
import sucessoIcon from '../../../assets/svgs/sucesso.svg';
import premiadoIcon from '../../../assets/svgs/Medalha.svg';
import faixaimg from '../../../assets/FAIXA.webp';
import { formatCaseValue } from '../../../utils/formatCaseValue ';

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
            onClick={(e) => {
                if (isUnderConstruction) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }}

            onAuxClick={(e) => {
                if (isUnderConstruction) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }}
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
                {isUnderConstruction ? (
                    <>
                        <p className={styles.underConstructionText}>[EM BREVE]</p>
                        <img
                            src={faixaimg}
                            className={`${styles.faixaImg} ${isHovered ? styles.faixaImgActive : ''}`}
                        />

                    </>
                ) : (
                    <>
                        <img
                            className={styles.imgPreview}
                            src={CasePreview.img}
                            alt={CasePreview?.title}
                        />
                        <img
                            className={`${styles.hoverImg} ${isHovered ? styles.show : styles.hide}`}
                            src={imgHover}
                            alt={CasePreview?.title}
                        />
                    </>
                )}
            </div>

            {/* ICONE ESPECIAL*/}
            {caseValue && (
                <div className={styles.caseIndicator}>
                    <img
                        src={caseValue === 'sucesso' ? sucessoIcon : premiadoIcon}
                        alt={`Caso ${caseValue}`}
                        className={styles.caseIcon}
                    />
                    {isHovered && (
                        <p className={styles.caseTypeIndicator}>
                            {formatCaseValue(caseValue)}
                        </p>
                    )}
                </div>
            )}
        </Link>
    );
}

export default CaseNav;