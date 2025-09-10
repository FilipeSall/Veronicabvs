import styles from './videolegend.module.scss';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type VideoLegendProps = {
    src: string;
    legend: string;
}

function VideoLegend({ legend, src }: VideoLegendProps) {
    const [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <div className={styles.videoContainer}>
            {!videoLoaded && (
                <Skeleton
                    height="300px"
                    width="100%"
                    className={styles.videoSkeleton}
                    baseColor="#272727"
                    highlightColor="#1d1d1d"
                />
            )}
            <video 
                src={src} 
                muted 
                loop 
                autoPlay
                className={videoLoaded ? styles.videoLoaded : styles.videoHidden}
                onLoadedData={() => setVideoLoaded(true)}
            />
            <p>{legend}</p>
        </div>
    )
}

export default VideoLegend