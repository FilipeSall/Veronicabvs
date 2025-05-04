import styles from './pushnotificationvideo.module.scss';
import { pushNotificationsInterface } from '../../../../interfaces/case';
import { useVideoInView } from '../../../../hooks/useVideoInView'; 

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