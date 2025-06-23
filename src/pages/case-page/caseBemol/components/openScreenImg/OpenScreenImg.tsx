import styles from './openscreenimg.module.scss'
import img from '../../../../../assets/caseBemol/fullscreemimg.webp'
import newBtn from '../../../../../assets/svgs/new-window-orange.svg'
import fullscreen from '../../../../../assets/caseBemol/ReguaComunicaçaoNotification.png';

function OpenScreenImg() {

    const handleOpenNewTab = () => {
        window.open(fullscreen, '_blank');
    };

    return (
        <div className={styles.container}>
            <img src={img} alt='imagem com o funil' />
            <div className={styles.btnWrapper}>
                <p>💡 Clique para abrir imagem inteira:</p>
                <button className={styles.btn}  onClick={handleOpenNewTab} >
                    (nova guia)
                    <img src={newBtn} />
                </button>
            </div>

        </div>
    )
}

export default OpenScreenImg