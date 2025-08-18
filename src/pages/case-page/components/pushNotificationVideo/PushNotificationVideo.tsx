import styles from './pushnotificationvideo.module.scss';
import { pushNotificationsInterface } from '../../../../interfaces/case';
import { useVideoInView } from '../../../../hooks/useVideoInView'; 

/**
 * PushNotificationVideo - Componente para exibir vídeos de notificações push
 * 
 * Este componente renderiza um vídeo com imagem superior, simulando uma
 * notificação push em dispositivos móveis. Inclui auto-play quando visível
 * e layout responsivo para diferentes contextos de uso.
 * 
 * @example
 * ```tsx
 * // Exemplo básico
 * <PushNotificationVideo 
 *   video="/videos/education-notification.mp4"
 *   alt="Notificação de educação"
 *   topImg="/images/education-icon.png"
 * />
 * 
 * // Em um grupo de notificações
 * {pushNotifications.map((notification, index) => (
 *   <PushNotificationVideo
 *     key={index}
 *     video={notification.video}
 *     alt={notification.alt}
 *     topImg={notification.topImg}
 *   />
 * ))}
 * ```
 * 
 * @param video - URL do arquivo de vídeo da notificação
 * @param alt - Texto alternativo para acessibilidade
 * @param topImg - URL da imagem exibida acima do vídeo
 */
function PushNotificationVideo({ video, alt, topImg }: pushNotificationsInterface) {
    const { videoRef } = useVideoInView({
        threshold: 0.3,
        rootMargin: '0px'
    });

    return (
        <div className={styles.container}>
            <img alt={alt} src={topImg} className={styles.topImg} />
            <div className={styles.celphoneContainer}>   
                <video
                    ref={videoRef}
                    src={video}
                    muted
                    className={styles.video}
                    loop
                    playsInline
                />
            </div>
        </div>
    )
}

export default PushNotificationVideo