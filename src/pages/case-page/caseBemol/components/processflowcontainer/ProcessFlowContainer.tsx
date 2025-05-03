import styles from './processflowcontainer.module.scss';
import arrowBlack from '../../../../../assets/caseBemol/Polygonblack.svg'
import arrowWhite from '../../../../../assets/caseBemol/Polygonwhite.svg'

function ProcessFlowContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.columnWrapper}>
                <div className={styles.column}>
                    <img src={arrowBlack} alt="seta" className={styles.arrow} />
                    <p className={styles.blackColor}>Planning</p>
                    <ul className={styles.list}>
                        <li>Análise de dados</li>
                        <li>Identificação do problema</li>
                        <li>Alinhamento inicial</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <img src={arrowWhite} alt="seta" className={styles.arrow} />
                    <p className={styles.whiteColor}>Discovery</p>
                    <ul className={styles.list}>
                        <li>Benchmarking</li>
                        <li>Discussões exploratórias com áreas parceiras</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <img src={arrowWhite} alt="seta" className={`${styles.arrow} ${styles.reverse}`} />
                    <p className={styles.whiteColor}>Define</p>
                    <ul className={styles.list}>
                        <li>Solução</li>
                        <li>Alinhamento com as áreas envolvidas</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <img src={arrowWhite} alt="seta" className={styles.arrow} />
                    <p className={styles.whiteColor}>Develop</p>
                    <ul className={styles.list}>
                        <li>Design System</li>
                        <li>Co-criação (marketing)</li>
                        <li>Prototipação em alta</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <img src={arrowWhite} alt="seta" className={`${styles.arrow} ${styles.reverse}`} />
                    <p className={styles.whiteColor}>Delivery</p>
                    <ul className={styles.list}>
                        <li>Validação e apresentação</li>
                        <li>Documentação</li>
                        <li>Entrega</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <img src={arrowBlack} alt="seta" className={`${styles.arrow} ${styles.reverse}`} />
                    <p className={styles.blackColor}>Follow-up</p>
                    <ul className={styles.list}>
                        <li>Acompanhamento de métricas de conversão</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProcessFlowContainer