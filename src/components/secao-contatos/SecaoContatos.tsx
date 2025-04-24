import styles from './secaocontatos.module.scss'
import ExternalLink from '../ExternalLink/ExternalLink'
import linkedinicon from '../../assets/svgs/links/linkedin.svg';
import linkedhovericon from '../../assets/svgs/links/linkedinhover.svg';
import emailIcon from '../../assets/svgs/links/email.svg';
import emailhovericon from '../../assets/svgs/links/emailhover.svg';

function SecaoContatos() {
    return (
        <section className={styles.contatoWrapper}>
            <ExternalLink
                path='https://www.linkedin.com/in/veronicabvs/'
                hoverIcon={linkedhovericon}
                text='LinkedIn'
                icon={linkedinicon}
            />

            <ExternalLink
                path='mailto:vebarbosa@hotmail.com'
                text="Envie um e-mail"
                icon={emailIcon}
                hoverIcon={emailhovericon}
            />
        </section>
    )
}

export default SecaoContatos