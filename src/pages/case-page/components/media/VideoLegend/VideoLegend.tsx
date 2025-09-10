import styles from './videolegend.module.scss';

type VideoLegendProps = {
    src: string;
    legend: string;
}

function VideoLegend({ legend, src }: VideoLegendProps) {
    return (
        <div className={styles.videoContainer}>
            <video src={src} muted loop autoPlay/>
            <p>{legend}</p>
        </div>
    )
}

export default VideoLegend