import { NavLink } from 'react-router-dom';
import { LinkInterface } from '../../interfaces/components';
import styles from './internallink.module.scss';

function InternalLink({ path, text }: LinkInterface) {
    return (
        <NavLink 
            to={path} 
            className={({ isActive }) => 
                isActive ? `${styles.link} ${styles.active}` : styles.link
            }
        >
            {text}
        </NavLink>
    )
}

export default InternalLink