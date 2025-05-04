import styles from './datevideo.module.scss';
import { useVideoInView } from '../../../../../hooks/useVideoInView';
import video from '../../../../../assets/caseBemol/EscolhaData.mp4'

function DateVideo() {

    const { videoRef } = useVideoInView({
        threshold: 0.3,
        rootMargin: '0px'
    });

    return (
        <div className={styles.container}>
            <video
                ref={videoRef}
                className={styles.video}
                loop
                muted
                playsInline
                src={video}
            />
        </div>
    )
}

export default DateVideo