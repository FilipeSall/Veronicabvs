import React from 'react';
import { ContentSectionProps } from '../../../../interfaces/components';
import styles from './contentsection.module.scss';

function ContentSection({ paragraphs, title, lineBreaks = 2 }: ContentSectionProps) {
    const parseText = (text: string) => {
        // Substitui **texto** por <span>texto</span>
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, index) =>
            index % 2 === 1 ? <span key={index}>{part}</span> : part
        );
    };

    const renderLineBreaks = () => {
        return Array.from({ length: lineBreaks }, (_, i) => <br key={i} />);
    };

    return (
        <div className={styles.contentContainer}>
            <div>
                <h3 className={styles.contentTitle}>{title}</h3>
                <p className={styles.contentText}>
                    {paragraphs.map((paragraph, index) => (
                        <React.Fragment key={index}>
                            {parseText(paragraph)}
                            {index < paragraphs.length - 1 && renderLineBreaks()}
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default ContentSection