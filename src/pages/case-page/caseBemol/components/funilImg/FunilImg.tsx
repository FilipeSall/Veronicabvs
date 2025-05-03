import styles from './funilimg.module.scss';
import funil1img from '../../../../../assets/caseBemol/funil1.png'
import funil2img from '../../../../../assets/caseBemol/funil2.png'
import funil3img from '../../../../../assets/caseBemol/funil3.png'
import funil4img from '../../../../../assets/caseBemol/funil4.png'
import mainFunil from '../../../../../assets/caseBemol/mainFunil.png'

function FunilImg() {
    return (
        <div className={styles.container}>
            <div className={styles.imgWrapper}>
                <p>1</p>
                <img alt='imagem com dinheiro' src={funil1img} />
            </div>

            <div className={styles.imgWrapper}>
                <p>2</p>
                <img alt='imagem com dinheiro' src={funil2img} />
            </div>

            <img src={mainFunil} alt="funil com os resultados" className="funilImg" />

            <div className={styles.imgWrapper}>
                <p>3</p>
                <img alt='imagem com dinheiro' src={funil3img} />
            </div>

            <div className={styles.imgWrapper}>
                <p>4</p>
                <img alt='imagem com dinheiro' src={funil4img} />
            </div>
        </div>
    )
}

export default FunilImg