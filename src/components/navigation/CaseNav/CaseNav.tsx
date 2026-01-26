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
    bgColor,
    CasePreview,
    isUnderConstruction,
    isActive,
    onSelect,
}: CaseNavInterface) {
    const [isHovered, setIsHovered] = useState(false);
    const caseNavStyle = {
        '--case-bg-color': bgColor,
        '--case-mobile-bg': isActive ? bgColor : '#272727',
    } as React.CSSProperties;

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (isUnderConstruction) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        const isMobile = window.matchMedia('(max-width: 678px)').matches;
        if (isMobile && !isActive) {
            event.preventDefault();
            event.stopPropagation();
            onSelect?.();
        }
    };

    return (
        <Link
            to={path}
            onClick={handleClick}
            onAuxClick={handleClick}
            className={`${styles.caseNav} ${isUnderConstruction && styles.disabled}`}
            style={caseNavStyle}
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
