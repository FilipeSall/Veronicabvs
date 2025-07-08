import styles from './negocioexperiencia.module.scss';
import b1img from '../../../../../assets/appBemol/B1.png';
import b2img from '../../../../../assets/appBemol/B2.png';

function NegocioExperiencia() {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.textWrapper}>
                    <h4><span>1.</span> Business First</h4>
                    <p>Mensagem direta e objetiva;
                        Menor carga cognitiva;
                        Redução de fricção no fluxo;
                        Foco em conversão rápida.</p>
                </div>
                <img src={b1img} alt='Celular com notificação' />
            </div>
            <div className={styles.contentWrapper}>
                <img src={b2img} alt='Celular com notificação' />
                <div className={styles.textWrapper}>
                    <h4><span>2.</span> Experience First</h4>
                    <p>Comunicação mais explicativa;
                        Interface mais amigável (com ícones);
                        Fortalecimento da confiança;
                        Maior percepção de valor para o usuário.</p>
                </div>
            </div>
        </div>
    )
}

export default NegocioExperiencia