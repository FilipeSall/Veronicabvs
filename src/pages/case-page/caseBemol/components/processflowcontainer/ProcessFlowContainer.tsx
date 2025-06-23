import styles from './processflowcontainer.module.scss';
import arrowWhite from '../../../../../assets/caseBemol/Polygonwhite.svg';
import arrowBlue from '../../../../../assets/svgs/blueArrow.svg';

function ProcessFlowContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.columnWrapper}>
                {/* Planning - branco */}
                <div className={styles.column}>
                    <img src={arrowWhite} alt="seta" className={`${styles.arrow} ${styles.reverse}`} />
                    <p className={styles.whiteColor}>Planning</p>
                    <ul className={styles.list}>
                        <li>Análise de dados</li>
                        <li>Identificação do problema</li>
                        <li>Alinhamento inicial</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <img src={arrowBlue} alt="seta" className={styles.arrow} />
                    <p className={styles.coloredText} >Discovery</p>
                    <ul className={styles.list}>
                        <li>Benchmarking</li>
                        <li>Discussões exploratórias com áreas parceiras</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <img src={arrowBlue} alt="seta" className={`${styles.arrow} ${styles.reverse}`} />
                    <p className={styles.coloredText}>Define</p>
                    <ul className={styles.list}>
                        <li>Solução</li>
                        <li>Alinhamento com as áreas envolvidas</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <img src={arrowBlue} alt="seta" className={styles.arrow} />
                    <p className={styles.coloredText}>Develop</p>
                    <ul className={styles.list}>
                        <li>Design System</li>
                        <li>Co-criação (marketing)</li>
                        <li>Prototipação em alta</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <img src={arrowBlue} alt="seta" className={`${styles.arrow} ${styles.reverse}`} />
                    <p className={styles.coloredText}>Delivery</p>
                    <ul className={styles.list}>
                        <li>Validação e apresentação</li>
                        <li>Documentação</li>
                        <li>Entrega</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <img src={arrowWhite} alt="seta" className={`${styles.arrow}`} />
                    <p className={styles.whiteColor}>Follow-up</p>
                    <ul className={styles.list}>
                        <li>Acompanhamento de métricas de conversão</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProcessFlowContainer;
