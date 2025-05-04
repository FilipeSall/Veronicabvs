import styles from './fullscreenImage.module.scss';
import offscreen from '../../../../../assets/caseBemol/ReguaComunicaçaoNotificationOFF.png';
import fullscreen from '../../../../../assets/caseBemol/ReguaComunicaçaoNotification.png';
import newWindowicon from '../../../../../assets/svgs/new-window.svg';

const FullscreenImage = () => {
    const handleOpenNewTab = () => {
        window.open(fullscreen, '_blank');
    };

    return (
        <div className={styles.container} onClick={handleOpenNewTab}>
            <div className={styles.imageContainer}>
                <img src={offscreen} alt='Clique para visualizar a imagem completa' className={styles.offImg} />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.textWrapper}>
                <p>Abrir imagem inteira (nova guia)</p>
                <img alt='Abrir em uma nova janela' src={newWindowicon} />
            </div>
        </div>
    );
};

export default FullscreenImage;
