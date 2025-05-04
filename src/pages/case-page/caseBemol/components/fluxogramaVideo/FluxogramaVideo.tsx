import styles from './fluxogramavideo.module.scss';
import video from '../../../../../assets/caseBemol/FLUXOGRAMAS.mp4';
import { useVideoInView } from '../../../../../hooks/useVideoInView';

function FluxogramaVideo() {
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
      <p>Zoom indisponível por conter dados sensíveis.</p>
    </div>
  );
}

export default FluxogramaVideo;