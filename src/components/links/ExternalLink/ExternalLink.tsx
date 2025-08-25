import { useState } from 'react';
import { ExternalLinkInterface } from '../../../interfaces/components';
import styles from './externallink.module.scss';

function ExternalLink({ icon: Icon, path, text, hoverIcon: HoverIcon }: ExternalLinkInterface) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={path}
            className={styles.link}
            target='_blank'
            rel='noopener noreferrer' 
            aria-label={text}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.iconWrapper}>
                <div className={`${styles.iconContainer} ${isHovered ? styles.hidden : ''}`}>
                    {typeof Icon === 'string' ? (
                        <img src={Icon} alt={text} className={styles.icon} />
                    ) : (
                        <Icon />
                    )}
                </div>
                
                {HoverIcon && (
                    <div className={`${styles.iconContainer} ${styles.hoverIcon} ${isHovered ? styles.visible : ''}`}>
                        {typeof HoverIcon === 'string' ? (
                            <img src={HoverIcon} alt={text} className={styles.icon} />
                        ) : (
                            <HoverIcon />
                        )}
                    </div>
                )}
            </div>
            {text}
        </a>
    );
}

export default ExternalLink;