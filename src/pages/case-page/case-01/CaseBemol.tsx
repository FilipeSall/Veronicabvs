import styles from './case2page.module.scss';
import '../escopecasepage.scss';
import tools from './tools';
import ToolsIcon from '../components/ToolsIcon/ToolsIcon';
import video21 from '../../../assets/case02/resultadoVideo.mp4';
import personalizacaoIco from '../../../assets/svgs/personalizacao.svg';
import relevanciaIco from '../../../assets/svgs/relevancia.svg';

function CaseBemol() {
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
                    <div className={styles.resultWrapper}>
                        <div className={styles.resultCol}>
                            <h1 className={styles.resultTitle}><span className={styles.dot}></span> Análise e oportunidade</h1>
                            <p className={styles.resultPara}>Com o apoio da equipe de dados, identificamos uma <span>alta taxa de abandono</span> no <span>fluxo de contratação</span> de empréstimos pessoais, mesmo entre clientes com crédito pré-aprovado.</p>
                            <p className={styles.resultPara}>Para aprofundar a análise, realizei um <span>benchmarking</span> com outras contas digitais, investigando como lidam com a recuperação de usuários nesse mesmo contexto.</p>
                            <p className={styles.resultPara}>Ao final do Discovery, identifiquei a <span>oportunidade de recuperar</span> esses usuários por meio de uma comunicação mais <span>personalizada e direcionada</span>, incentivando a retomada do processo de contratação.</p>
                        </div>

                        <div className={styles.resultCol}>
                            <h1 className={styles.resultTitle}><span className={styles.dot}></span>Entrega de valor</h1>
                            <p className={styles.resultPara}>Jornada personalizada e relevante.</p>
                            <div className={styles.resultImgPara}>
                                <img src={personalizacaoIco} alt='icone com um grupo de pessoas.' />
                                <div className={styles.titleParaWrapper}>
                                    <h2>Personalização</h2>
                                    <p className={styles.resultPara}> Ao receber notificações (push’s) alinhadas ao seu objetivo financeiro, incentivando o usuário a retomar a contratação do empréstimo, ao tornar a mensagem mais próxima do seu real contexto.</p>
                                </div>
                            </div>

                            <div className={styles.resultImgPara}>
                                <img src={relevanciaIco} alt='Um arco e flecha.' />
                                <div className={styles.titleParaWrapper}>
                                    <h2>relevancia</h2>
                                    <p className={styles.resultPara}>A relevância da mensagem foi garantida ao considerar o momento e a intenção do usuário. Em vez de um push genérico sobre crédito disponível, as notificações reforçavam o propósito financeiro do cliente, resgatando sua motivação original para contratar o empréstimo. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.resultWrapper}>
                        <h1 className={styles.resultTitle}><span className={styles.dot}></span> Funil de empréstimos</h1>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default CaseBemol