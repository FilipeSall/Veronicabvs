import { Link } from 'react-router-dom';
import { LinkInterface } from '../../interfaces/components';
import styles from './internallink.module.scss';

function InternalLink({ path, text }: LinkInterface) {
    return (
        <Link to={path} className={styles.link}>{text}</Link>
    )
}

export default InternalLink