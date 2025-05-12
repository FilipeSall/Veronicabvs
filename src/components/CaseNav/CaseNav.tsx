import { Link } from 'react-router-dom';
import { useMemo, useState, useCallback } from 'react';
import styles from './casenav.module.scss';
import { CaseNavInterface } from '../../interfaces/components';
import successIcon from '../../assets/svgs/sucesso.svg';
import awardIcon from '../../assets/svgs/Medalha.svg';

function CaseNav({
    caseValue,
    path,
    text,
    bgColor,
    imgHover,
    projectName,
    isUnderConstruction = false,
    underConstructionImg
}: CaseNavInterface) {

    const [isHovered, setIsHovered] = useState(false);

    const backgroundStyle = useMemo(() => {
        if (!isHovered) return {};
        return {
            backgroundColor: isUnderConstruction ? '#FFFFFF' : bgColor,
            cursor: isUnderConstruction ? 'not-allowed' : 'pointer'
        };
    }, [isHovered, bgColor, isUnderConstruction]);

    const contentStyle = useMemo(() => {
        return {
            justifyContent: isHovered ? 'space-between' : 'center'
        };
    }, [isHovered]);

    const displayText = useMemo(() => {
        if (!isUnderConstruction) {
            return isHovered ? projectName : text;
        }

        return isHovered ? null : text;
    }, [isHovered, projectName, text, isUnderConstruction]);

    const getImageSource = useMemo(() => {
        if (isUnderConstruction && underConstructionImg) {
            return underConstructionImg;
        }
        return imgHover;
    }, [imgHover, isUnderConstruction, underConstructionImg]);

    const caseTypeText = useMemo(() => {
        return caseValue === 'sucesso' ? 'Case de Sucesso' : 'Case Premiado';
    }, [caseValue]);

    const caseIconSrc = useMemo(() => {
        return caseValue === 'sucesso' ? successIcon : awardIcon;
    }, [caseValue]);

    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    const handleClick = useCallback((e: React.MouseEvent) => {
        if (isUnderConstruction) {
            e.preventDefault();
        }
    }, [isUnderConstruction]);

    return (
        <Link
            to={path}
            className={styles.caseNav}
            style={backgroundStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div
                className={styles.caseContent}
                style={contentStyle}
            >
                {isUnderConstruction && isHovered ? (
                    <div className={styles.underConstructionText}>
                        <strong>Em breve</strong>
                        <span>(em desenvolvimento)</span>
                    </div>
                ) : (
                    <p className={isHovered ? styles.textHover : styles.textNormal}>
                        {displayText}
                    </p>
                )}

                {isHovered && imgHover && (
                    <div className={styles.imageWrapper}>
                        <img
                            src={getImageSource}
                            alt={caseValue || 'projeto'}
                            className={styles.hoverImg}
                        />
                    </div>
                )}
            </div>

            {caseValue && (
                <div className={styles.caseIndicator}>
                    <img
                        src={caseIconSrc}
                        alt={`Caso ${caseValue}`}
                        className={styles.caseIcon}
                    />
                    {isHovered && (
                        <p className={styles.caseTypeIndicator}>
                            {caseTypeText}
                        </p>
                    )}
                </div>
            )}
        </Link>
    );
}

export default CaseNav;