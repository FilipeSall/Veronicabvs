import styles from './secaocontatos.module.scss'
import ExternalLink from '../ExternalLink/ExternalLink'
import { FaLinkedinIn } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

function SecaoContatos() {
    return (
        <section className={styles.contatoWrapper}>
            <ExternalLink
                path='/'
                text='LinkedIn'
                icon={FaLinkedinIn}
            />

            <ExternalLink
                path='/'
                text="Envie um e-mail"
                icon={MdEmail}
            />
        </section>
    )
}

export default SecaoContatos