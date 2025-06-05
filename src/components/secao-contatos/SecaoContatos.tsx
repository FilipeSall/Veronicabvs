import styles from './secaocontatos.module.scss'
import ExternalLink from '../ExternalLink/ExternalLink'
import { externalLinksFooter } from '../../services/headerLinksData'

function SecaoContatos() {
    return (
        <section className={styles.contatoWrapper}>
            {externalLinksFooter.map((link, index) => (
                <ExternalLink
                    key={index}
                    path={link.path}
                    hoverIcon={link.hoverIcon}
                    text={link.text}
                    icon={link.icon}
                />
            ))}
        </section>
    )
}

export default SecaoContatos