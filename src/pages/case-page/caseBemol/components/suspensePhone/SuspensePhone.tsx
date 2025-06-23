import styles from './suspensephone.module.scss';
import suspensePhoneImg from '../../../../../assets/caseBemol/suspense-phone.png';

function SuspensePhone() {
    return (
        <div className={styles.suspensePhoneContainer}>
            <img
                src={suspensePhoneImg}
                className={styles.suspensePhoneImg}
                alt='telefone'
            />
            <p className={styles.suspenseTxt}>Funil de contratação: Step 2</p>
        </div>
    )
}

export default SuspensePhone