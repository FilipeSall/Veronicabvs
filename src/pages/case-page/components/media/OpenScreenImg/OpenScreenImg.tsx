import { useEffect, useRef, useState } from 'react';
import styles from './openscreenimg.module.scss';
import defaultPreviewImg from '../../../../../assets/caseBemol/fullscreemimg.webp';
import defaultNewBtn from '../../../../../assets/svgs/new-window-orange.svg';
import defaultFullscreen from '../../../../../assets/caseBemol/ReguaComunicaçaoNotification.png';
import touchIcon from '../../../../../assets/svgs/touch.svg';

type OpenScreenImgProps = {
    previewImg?: string;
    fullscreenImg?: string;
    alt?: string;
    instructionText?: string;
    buttonText?: string;
    buttonIcon?: string;
    onClick?: () => void;
    className?: string;
}

/**
 * OpenScreenImg - Componente para exibir imagem com opção de tela cheia
 * 
 * Este componente renderiza uma imagem com botão estilizado para abrir
 * uma versão completa em nova guia. Layout específico com texto instructivo
 * e botão posicionado abaixo da imagem. Por padrão, usa as imagens da
 * régua de comunicação do Case Bemol.
 * 
 * @example
 * ```tsx
 * // Uso padrão (Case Bemol - régua de comunicação)
 * <OpenScreenImg />
 * 
 * // Com imagens customizadas
 * <OpenScreenImg 
 *   previewImg="/images/diagram-preview.webp"
 *   fullscreenImg="/images/diagram-full.png"
 *   alt="Diagrama do processo"
 *   instructionText="💡 Visualize o diagrama completo:"
 *   buttonText="(abrir diagrama)"
 * />
 * 
 * // Com ação customizada
 * <OpenScreenImg 
 *   previewImg="/images/chart.png"
 *   onClick={() => openModal(chartData)}
 *   buttonText="(ampliar gráfico)"
 * />
 * 
 * // Dentro de um ContentBlock
 * <ContentBlock>
 *   <TextContent 
 *     title="VISUALIZAÇÃO COMPLETA"
 *     paragraphs={["Para ver todos os detalhes..."]}
 *   />
 *   <OpenScreenImg 
 *     previewImg="/images/process.webp"
 *     fullscreenImg="/images/process-hd.png"
 *   />
 * </ContentBlock>
 * ```
 * 
 * @param previewImg - URL da imagem de prévia (padrão: régua comunicação preview)
 * @param fullscreenImg - URL da imagem completa para nova guia (padrão: régua comunicação full)
 * @param alt - Texto alternativo da imagem
 * @param instructionText - Texto instrutivo acima do botão
 * @param buttonText - Texto do botão
 * @param buttonIcon - Ícone do botão
 * @param onClick - Ação customizada (substitui abertura em nova aba)
 * @param className - Classe CSS adicional
 */
function OpenScreenImg({
    previewImg = defaultPreviewImg,
    fullscreenImg = defaultFullscreen,
    alt = 'imagem com o funil',
    instructionText = '',
    buttonText = 'Ampliar',
    buttonIcon = defaultNewBtn,
    onClick,
    className
}: OpenScreenImgProps) {
    const [isTouch, setIsTouch] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement | null>(null);
    const draggingTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
        const hasTouch =
            typeof window !== 'undefined' &&
            (navigator.maxTouchPoints > 0 ||
                'ontouchstart' in window ||
                window.matchMedia('(pointer: coarse)').matches);
        setIsTouch(hasTouch);
    }, []);

    useEffect(() => {
        const scrollArea = scrollAreaRef.current;
        if (!scrollArea) return;

        const handleScroll = () => {
            setIsDragging(true);
            if (draggingTimeoutRef.current) {
                window.clearTimeout(draggingTimeoutRef.current);
            }
            draggingTimeoutRef.current = window.setTimeout(() => {
                setIsDragging(false);
            }, 300);
        };

        scrollArea.addEventListener('scroll', handleScroll, { passive: true });
        scrollArea.addEventListener('touchstart', handleScroll, { passive: true });
        scrollArea.addEventListener('touchend', handleScroll, { passive: true });

        return () => {
            scrollArea.removeEventListener('scroll', handleScroll);
            scrollArea.removeEventListener('touchstart', handleScroll);
            scrollArea.removeEventListener('touchend', handleScroll);
            if (draggingTimeoutRef.current) {
                window.clearTimeout(draggingTimeoutRef.current);
            }
        };
    }, []);

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            window.open(fullscreenImg, '_blank');
        }
    };

    return (
        <div className={`${styles.container} ${isTouch ? styles.isTouch : ''} ${className || ''}`}>
            <div className={styles.scrollArea} ref={scrollAreaRef}>
                <img src={previewImg} alt={alt} />
            </div>
            <div
                className={`${styles.dragHint} ${isDragging ? styles.dragHintHidden : ''}`}
                aria-hidden="true"
            >

                <span>Arraste e veja mais</span>
                <img src={touchIcon} alt="" />
            </div>
            <div className={styles.btnWrapper}>
                <p>{instructionText}</p>
                <button className={styles.btn} onClick={handleClick}>
                    {buttonText}
                    <img src={buttonIcon} alt="Abrir em nova janela" />
                </button>
            </div>
        </div>
    );
}

export default OpenScreenImg
