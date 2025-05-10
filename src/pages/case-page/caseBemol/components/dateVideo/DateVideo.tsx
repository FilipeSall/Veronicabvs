import styles from './datevideo.module.scss';
import { useVideoInView } from '../../../../../hooks/useVideoInView';
import video from '../../../../../assets/caseBemol/EscolhaData.mp4'
import icon from '../../../../../assets/svgs/sucesso.svg'

function DateVideo() {

    const { videoRef } = useVideoInView({
        threshold: 0.3,
        rootMargin: '0px'
    });

    return (
        <div className={styles.container}>
            <img alt='icone de sucesso' src={icon} className={styles.sucessIcon} />
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