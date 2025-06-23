import { useRef, useEffect } from 'react';
import styles from './CaseTitle.module.scss';

type CaseTitleProps = {
    title: string;
    subTitle?: string;
};

function CaseTitle({ title, subTitle}: CaseTitleProps) {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (titleRef.current && wrapperRef.current) {
            const titleWidth = titleRef.current.offsetWidth;
            wrapperRef.current.style.setProperty('--title-width', `${titleWidth}px`);
        }
    }, [title]);

    return (
        <div className={styles.caseTitleWrapper} ref={wrapperRef}>
            <h2 className={styles.caseTitle} ref={titleRef}>
                {title}
            </h2>
            {subTitle && <p className={styles.caseSubtitle}>{subTitle}</p>}
        </div>
    );
}

export default CaseTitle;
