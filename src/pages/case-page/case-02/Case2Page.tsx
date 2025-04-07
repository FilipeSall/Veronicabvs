import styles from './case2page.module.scss';
import '../escopecasepage.scss';
import tools from './tools';
import ToolsIcon from '../components/ToolsIcon/ToolsIcon';
import video21 from '../../../assets/case02/resultadoVideo.mp4';

function Case2Page() {
    return (
        <section className={styles.pageContainer}>
            <div className='case-header'>
                <p className='header-description'>
                    <span>Contexto:</span> Atuação abrangente em <span>conta digital</span> (Conta Bemol), com responsabilidade direta sobre o produto de empréstimos (Empréstimo Pessoal) — conduzindo <span>todo o ciclo de design</span>, desde pesquisas na etapa de discoberta à entrega e estratégia do acompanhamento de métricas pós lançamento.
                </p>

                <div className='tools-container'>
                    <p className='tools-text'>Ferramentas utilizadas:</p>
                    <div className='tools-wrapper'>
                        {tools.map((tool, i) => (
                            <ToolsIcon key={i} value={tool.value} />
                        ))}
                    </div>
                </div>
            </div>

            <div className='case-content' style={{ background: '#4c31e0' }}>
                {/* Sumário section */}
                <section className='case-summary'>
                    <h1>Sumário</h1>
                    <div className='case-cols'>
                        <div className='case-col'>
                            <p className='case-row'><span>2.1</span> Resgate de cliente pré aprovado via Push</p>
                            <p className='case-row'><span>2.2</span> Fluxogramas completos de Empréstimo Pessoal</p>
                        </div>
                        <div className='case-col'>
                            <p className='case-row'><span>2.3</span> Data-Driven Design</p>
                            <p className='case-row'><span>2.4</span> Escolha da data do vencimento das parcelas </p>
                        </div>
                    </div>
                </section>
                
                {/* Conteúdo da seção 2.1 */}
                <section className={styles.container21}>
                    <h1 className={styles.title21}>2.1 Resgate de cliente via Push</h1>
                    <p className={styles.paraApoio}><span>Apoio: </span>Equipe de Marketing e equipe de Dados.</p>
                    <p className={styles.paraResultado}>
                        <span className={styles.dot}></span>
                        <span className={styles.resultadoBoldTxt}>Resultado</span> - User Flow
                    </p>
                    <div className={styles.videoWrapper21}>
                        <video 
                        src={video21}
                        muted
                        loop
                        className={styles.video21}
                        autoPlay
                        />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Case2Page