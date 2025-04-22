import { Link } from 'react-router-dom';
import styles from './casenav.module.scss';
import { CaseNavInterface } from '../../interfaces/components';
import successIcon from '../../assets/svgs/sucesso.svg';
import awardIcon from '../../assets/svgs/Medalha.svg';
import { useState } from 'react';

function CaseNav({ caseValue, path, text, bgColor, imgHover, projectName }: CaseNavInterface) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={path}
            className={styles.caseNav}
            style={isHovered ? { backgroundColor: bgColor } : {}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={styles.caseContent}
                style={{ justifyContent: isHovered ? 'space-between' : 'center' }}
            >
                <p className={isHovered ? styles.textHover : styles.textNormal}>
                    {isHovered ? projectName : text}
                </p>

                {isHovered && imgHover && (
                    <div className={styles.imageWrapper}>
                        <img
                            src={imgHover}
                            alt={caseValue || 'projeto'}
                            className={styles.hoverImg}
                        />
                    </div>
                )}
            </div>

            {caseValue && (
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img
                        src={caseValue === 'sucesso' ? successIcon : awardIcon}
                        alt={`Caso ${caseValue}`}
                        className={styles.caseIcon}
                    />
                    {caseValue && isHovered && (
                        <p className={styles.caseTypeIndicator}>
                            {caseValue === 'sucesso' ? 'Case de Sucesso' : 'Case Premiado'}
                        </p>
                    )}
                </div>
            )}
        </Link>
    );
}

export default CaseNav;