import styles from './suspensephone.module.scss';
import suspensePhoneImg from '../../../../../assets/caseBemol/suspense-phone.png';

/**
 * SuspensePhone - Componente para exibir contexto do dispositivo móvel
 * 
 * Este componente renderiza uma imagem de smartphone com texto explicativo
 * para contextualizar demonstrações de funcionalidades mobile. Usado como
 * elemento de apoio visual em apresentações de UX/UI.
 * 
 * @example
 * ```tsx
 * // Uso simples
 * <SuspensePhone />
 * 
 * // Em conjunto com vídeos de notificações
 * <div className="mobile-demo">
 *   <SuspensePhone />
 *   <div className="notifications">
 *     <PushNotificationVideo video={video1} />
 *     <PushNotificationVideo video={video2} />
 *   </div>
 * </div>
 * 
 * // Em ContentBlock
 * <ContentBlock>
 *   <div className="demo-wrapper">
 *     <SuspensePhone />
 *     <NotificationVideos />
 *   </div>
 * </ContentBlock>
 * ```
 * 
 * Funcionalidade:
 * - Imagem estática de smartphone
 * - Texto contextual "Funil de contratação: Step 2"
 * - Layout responsivo para diferentes telas
 */
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