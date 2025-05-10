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

    // Controla o estado de hover do componente
    const [isHovered, setIsHovered] = useState(false);

    // Define o estilo de fundo baseado no hover e se está em construção
    const backgroundStyle = useMemo(() => {
        if (!isHovered) return {};
        return {
            backgroundColor: isUnderConstruction ? '#FFFFFF' : bgColor,
            cursor: isUnderConstruction ? 'not-allowed' : 'pointer'
        };
    }, [isHovered, bgColor, isUnderConstruction]);

    // Define o alinhamento do conteúdo baseado no hover
    const contentStyle = useMemo(() => {
        return {
            justifyContent: isHovered ? 'space-between' : 'center'
        };
    }, [isHovered]);

    // Determina qual texto exibir baseado no estado de hover e construção
    const displayText = useMemo(() => {
        // Lógica normal para quando não está em construção
        if (!isUnderConstruction) {
            return isHovered ? projectName : text;
        }
        // Para items em construção: texto normal quando não está em hover
        return isHovered ? null : text;
    }, [isHovered, projectName, text, isUnderConstruction]);

    // Seleciona a imagem a ser exibida (padrão ou em construção)
    const getImageSource = useMemo(() => {
        if (isUnderConstruction && underConstructionImg) {
            return underConstructionImg;
        }
        return imgHover;
    }, [imgHover, isUnderConstruction, underConstructionImg]);

    // Define o texto do tipo de case (sucesso ou premiado)
    const caseTypeText = useMemo(() => {
        return caseValue === 'sucesso' ? 'Case de Sucesso' : 'Case Premiado';
    }, [caseValue]);

    // Define qual ícone usar baseado no tipo de case
    const caseIconSrc = useMemo(() => {
        return caseValue === 'sucesso' ? successIcon : awardIcon;
    }, [caseValue]);

    // Função para ativar o estado de hover
    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    
    // Função para desativar o estado de hover
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    // Previne a navegação quando o item estiver em construção
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