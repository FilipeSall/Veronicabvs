import { Link } from 'react-router-dom'
import styles from './casenav.module.scss'
import { CaseNavInterface } from '../../interfaces/components'
import successIcon from '../../assets/svgs/sucesso.svg'
import awardIcon from '../../assets/svgs/Medalha.svg'

function CaseNav({ caseValue, path, text }: CaseNavInterface) {
    return (
        <Link to={path} className={styles.caseNav}>
            {text}
            {caseValue && (
                <img 
                    src={caseValue === 'sucesso' ? successIcon : awardIcon} 
                    alt={`Caso ${caseValue}`} 
                    className={styles.caseIcon} 
                />
            )}
        </Link>
    )
}

export default CaseNav