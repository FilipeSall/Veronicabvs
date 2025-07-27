import React from 'react';
import { useSmoothScroll } from '../../../hooks/useSmoothScrol';
import arrowUpBlue from '../../../assets/svgs/scrolTopBlue.svg';
import arrowUpRed from '../../../assets/svgs/scrollToTopRed.svg';
import styles from './ScrollToTop.module.scss';

type ArrowColor = 'azul' | 'vermelha';

interface ScrollToTopProps {
    targetId: string;
    arrowColor?: ArrowColor;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
    targetId,
    arrowColor = 'azul'
}) => {
    const scrollToElement = useSmoothScroll();

    const arrowImages: Record<ArrowColor, string> = {
        azul: arrowUpBlue,
        vermelha: arrowUpRed
    };

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        scrollToElement(targetId);
    };

    console.log(targetId)

    return (
        <a
            href={`#${targetId}`}
            className={styles.scrollupCase}
            onClick={handleClick}
        >
            <img
                src={arrowImages[arrowColor]}
                alt="Voltar ao topo"
            />
        </a>
    );
};

export default ScrollToTop;