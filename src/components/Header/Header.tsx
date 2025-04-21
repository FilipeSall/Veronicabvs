import { externalLinksHeader, internalLinksHeader } from '../../services/headerLinksData';
import ExternalLink from '../ExternalLink/ExternalLink';
import InternalLink from '../internalLink/InternalLink';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.linkWrapper}>
        {internalLinksHeader && internalLinksHeader.map((link, i) => (
          <InternalLink
            path={link.path}
            text={link.text}
            key={i}
          />
        ))}
      </div>

      <div className={styles.linkWrapper}>
        {externalLinksHeader && externalLinksHeader.map((link, i) => (
          <ExternalLink
            key={i}
            icon={link.icon}
            path={link.path}
            text={link.text}
            hoverIcon={link.hoverIcon}
          />
        ))}
      </div>
    </header>
  )
}

export default Header