import { ExternalLinkInterface } from '../../interfaces/components';
import styles from './externallink.module.scss';

function ExternalLink({ icon: Icon, path, text }: ExternalLinkInterface) {
    return (
        <a href={path} className={styles.link}>
            <Icon />
            {text}
        </a>
    )
}

export default ExternalLink