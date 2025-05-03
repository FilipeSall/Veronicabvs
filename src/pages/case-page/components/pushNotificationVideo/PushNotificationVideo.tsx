import styles from './pushnotificationvideo.module.scss';
import { pushNotificationsInterface } from '../../../../interfaces/case';

function PushNotificationVideo({ video, alt, topImg }: pushNotificationsInterface) {
    return (
        <div className={styles.container}>
            <img alt={alt} src={topImg} className={styles.topImg} />
            <div className={styles.celphoneContainer}>   
            <video
                autoPlay
                src={video}
                muted
                className={styles.video}
                loop
            />
            </div>

        </div>
    )
}

export default PushNotificationVideo