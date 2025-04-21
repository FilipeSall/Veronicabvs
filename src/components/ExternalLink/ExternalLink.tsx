import { useState } from 'react';
import { ExternalLinkInterface } from '../../interfaces/components';
import styles from './externallink.module.scss';

function ExternalLink({ icon: Icon, path, text, hoverIcon: HoverIcon }: ExternalLinkInterface) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={path}
            className={styles.link}
            target='_blank'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && HoverIcon ? <HoverIcon /> : <Icon />}
            {text}
        </a>
    )
}

export default ExternalLink