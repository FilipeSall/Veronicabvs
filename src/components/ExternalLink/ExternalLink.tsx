import { ExternalLinkInterface } from '../../interfaces/components';
import styles from './externallink.module.scss';

function ExternalLink({ icon: Icon, path, text }: ExternalLinkInterface) {
    return (
        <a href={path} className={styles.link} target='_blank'>
            <Icon />
            {text}
        </a>
    )
}

export default ExternalLink