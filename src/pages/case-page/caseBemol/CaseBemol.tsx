import styles from './casebemol.module.scss';
import '../escopecasepage.scss';
import tools from './tools';
import ToolsIcon from '../components/ToolsIcon/ToolsIcon';
import video21 from '../../../assets/caseBemol/resultadoVideo.mp4';
import personalizacaoIco from '../../../assets/svgs/personalizacao.svg';
import relevanciaIco from '../../../assets/svgs/relevancia.svg';
import funilImg1 from '../../../assets/caseBemol/funilImg1.png';
import funilImg2 from '../../../assets/caseBemol/funilImg2.png';
import funilImg3 from '../../../assets/caseBemol/funilImg3.png';
import funilImg4 from '../../../assets/caseBemol/funilImg4.png';
import funilImg from '../../../assets/caseBemol/funil.png';
import funilEmprestimoImg from '../../../assets/caseBemol/funilemprestimo.png';
import fluxogramaVideo from '../../../assets/caseBemol/FLUXOGRAMAS.mp4';
import npsImg from '../../../assets/caseBemol/nps.png';
import dataImg from '../../../assets/caseBemol/data.png';
import videoAgende from '../../../assets/caseBemol/EscolhaData.mp4';
import arrowUp from '../../../assets/svgs/arrowUp.svg';

function CaseBemol() {
    return (
        <section className='pageContainer'>
            <div className='case-header' id='header-bemol'>
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
                            <p className='case-row'><span>1.1</span> Resgate de cliente pré aprovado via Push</p>
                            <p className='case-row'><span>1.2</span> Fluxogramas completos de Empréstimo Pessoal</p>
                        </div>
                        <div className='case-col'>
                            <p className='case-row'><span>1.3</span> Data-Driven Design</p>
                            <p className='case-row'><span>1.4</span> Escolha da data do vencimento das parcelas </p>
                        </div>
                    </div>
                </section>

                {/* Conteúdo da seção 1.1 */}
                <section className={styles.container11}>
                    <h1 className={'case-title'}>1.1 Resgate de cliente via Push</h1>
                    <p className={styles.paraApoio}><span>Apoio: </span>Equipe de Marketing e equipe de Dados.</p>
                    <p className={styles.paraResultado}>
                        <span className={'dot'}></span>
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
                            <h1 className={styles.resultTitle}><span className={'dot'}></span> Análise e oportunidade</h1>
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

                    <div className={styles.containerWrapper}>
                        <h1 className={styles.resultTitle}><span className={'dot'}></span> Funil de empréstimos</h1>
                        <div className={styles.funilImgWrapper}>
                            <div className={styles.funilImg}>
                                <p>1</p>
                                <img src={funilImg1} alt="foto do case" />
                            </div>
                            <div className={styles.funilImg}>
                                <p>2</p>
                                <img src={funilImg2} alt="foto do case" />
                            </div>
                            <div className={styles.funilImg}>
                                <img src={funilImg} alt="foto do case" />
                            </div>
                            <div className={styles.funilImg}>
                                <p>3</p>
                                <img src={funilImg3} alt="foto do case" />
                            </div>
                            <div className={styles.funilImg}>
                                <p>4</p>
                                <img src={funilImg4} alt="foto do case" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.containerWrapper}>
                        <h1 className={styles.resultTitle}><span className={'dot'}></span> Régua de comunicação segmentada</h1>
                        <img src={funilEmprestimoImg} alt='funil de emprestimo' />
                    </div>

                    <div className={styles.containerRowBetween}>
                        <div className={styles.containerCol}>
                            <h1 className={styles.resultTitle}><span className={'dot'}></span> Métricas e melhorias</h1>
                            <p className='case-para'>Para avaliar o impacto da solução, foram analisadas métricas como o <span>aumento da taxa de retorno</span> ao fluxo de contratação, da <span>taxa de conversão</span> em empréstimos efetivados e da <span>taxa de engajamento</span> com as notificações. </p>
                            <p className='case-para'>Com os primeiros resultados, tive apoio do time de marketing nos ajustes na copy e no <span>timing</span> dos pushs.</p>
                        </div>

                        <div className={styles.containerCol}>
                            <h1 className={styles.resultTitle}><span className={'dot'}></span> Plano de monitoramento</h1>
                            <p className='case-para'>O desempenho da estratégia foi acompanhado por relatórios periódicos, permitindo a identificação de padrões e ajustes contínuos. O plano inclui <span>monitoramento periódico das interações</span> dos usuários com os pushs, o <span>tempo médio para retorno</span> ao fluxo e <span>variações nas taxas de conversão</span>.</p>
                        </div>
                    </div>
                </section>
            </div>
            {/* Conteúdo 1.2*/}
            <section className={styles.container12}>
                <h1 className='case-title'>1.2 Fluxogramas completos do Empréstimo Pessoal</h1>
                <div className={styles.videoContainerWrapper12}>
                    <h2 className={styles.resultTitle}><span className={'dot-black'}></span> Resultado</h2>
                    <div className={styles.videoWrapper12}>
                        <video autoPlay loop src={fluxogramaVideo} className={styles.fluxogramaVideo} />
                    </div>
                </div>

                <div className={styles.containerRowBetween}>
                    <div className={styles.containerCol}>
                        <h2 className={styles.resultTitle}><span className={'dot-black'}></span> Diagnóstico e oportunidade</h2>
                        <p className='case-para'>Diante da <span>complexidade do produto</span> de empréstimo pessoal, tomei a <span>iniciativa</span> de mapear todas as etapas do fluxo — desde a contratação até a repactuação do contrato. </p>
                        <p className='case-para'>
                            O objetivo foi consolidar uma <span>visão completa do processo</span>, a criação de material de <span>referência</span> para <span>otimizar o trabalho</span> de diferentes áreas, além de servir para identificar <span>oportunidades de melhoria</span>.
                        </p>
                    </div>

                    <div className={styles.containerCol}>
                        <h2 className={styles.resultTitle}><span className={'dot-black'}></span> Imprevisto e solução</h2>
                        <p className='case-para'>
                            Durante a documentação, percebi <span>inconsistências nas informações</span> fornecidas sobre o funcionamento real do fluxo. Diferentes áreas possuíam versões divergentes do processo, dificultando a criação de um material confiável.
                        </p>
                        <p className="case-para">
                            Para solucionar esse problema, implementei uma <span>validação estruturada</span>: ao final de cada etapa mapeada, colhi a assinatura do responsável da área correspondente, garantindo alinhamento e precisão nos fluxogramas.
                        </p>
                    </div>
                </div>

                <div className={styles.containerColFull}>
                    <h2 className={styles.resultTitle}><span className={'dot-black'}></span> Entrega de valor</h2>
                    <div className={styles.containerRowEvenly}>
                        <div className={styles.valueItemWrapper}>
                            <h3>Referência oficial</h3>
                            <p>
                                Promove o entendimento do produto, alinha times e serve como base para discussões e planejamento.
                            </p>
                            <p className={styles.valueItemNumber}>1</p>
                        </div>

                        <div className={styles.valueItemWrapper}>
                            <h3>Otimização do trabalho</h3>
                            <p>
                                Reduz dúvidas e facilita a compreensão dos processos por diferentes áreas da empresa.
                            </p>
                            <p className={styles.valueItemNumber}>2</p>
                        </div>

                        <div className={styles.valueItemWrapper}>
                            <h3>Visão estratégica</h3>
                            <p>
                                Oferece uma visão ampla do produto, alinhando expectativas entre stakeholders e orientando decisões mais eficientes.
                            </p>
                            <p className={styles.valueItemNumber}>3</p>
                        </div>

                        <div className={styles.valueItemWrapper}>
                            <h3>Impacto contínuo</h3>
                            <p>
                                Material ainda utilizado como base para aprimoramentos e novas melhorias no produto.
                            </p>
                            <p className={styles.valueItemNumber}>4</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Conteúdo 1.3*/}
            <section className={styles.container13} style={{ background: '#4c31e0' }}>
                <h1>1.3 Data-Driven</h1>
                <p className='case-para'>Propostas guiadas pela abordagem de Data-Driven Design — desde a identificação da dor, validação do problema, até a definição da solução e plano de acompanhamento pós lançamento.</p>
                <div className='content-row__full'>
                    <div className={styles.containerCol}>
                        <p className={styles.subtitle}><span className={'dot'}></span>Cálculo e análise do NPS da Conta Digital 2023.</p>
                        <img src={npsImg} alt='dados do NPS' />
                        <p className={styles.imgObsLegend}>Obs. Dados sensíveis censurados</p>
                    </div>
                    <div className={styles.containerCol}>
                        <p className={styles.subtitle}><span className={'dot'}></span>Apresentações mensais da análise da taxa de cancelamento de contas.</p>
                        <img src={dataImg} alt='Foto contendo graficos' />
                        <p className={styles.imgObsLegend}>Obs. Dados sensíveis censurados</p>
                    </div>
                </div>
            </section>

            {/* Seção 1.4*/}
            <section className={styles.container14}>
                <div className={styles.titleWrapper14}>
                    <h1>1.4 Escolha da data do vencimento das parcelas</h1>
                    <p className='case-para'><span>Exclusivo</span> para apresentação pessoal, entre em contato comigo e agende</p>
                </div>
                <ul>
                    <li>Identificação da dor</li>
                    <li>Pesquisa</li>
                    <li>Coleta e análise de dados</li>
                    <li>Design System <br />(documentação técnica de novo componente)</li>
                    <li>Teste com usuários</li>
                </ul>

                <div className={styles.videoWrapper21}>
                    <video autoPlay loop src={videoAgende} className={styles.video21} />
                </div>
            </section>
            <a href='#header-bemol' className='scrollup-case'>
                <img src={arrowUp} alt='Seta para cima'/>
            </a>
        </section>
    )
}

export default CaseBemol