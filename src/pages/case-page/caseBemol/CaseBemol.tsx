import '../escopecasepage.scss';
import { tools, pushNotifications, Values, entregas, summary } from './tools';
import styles from './casebemol.module.scss';
import arrowUp from '../../../assets/svgs/arrowUp.svg';
import TwoColumnGrid from '../components/TwoColumnGrid/TwoColumnGrid';
import suspensePhoneImg from '../../../assets/caseBemol/suspense-phone.png';
import PushNotificationVideo from '../components/pushNotificationVideo/PushNotificationVideo';
import FunilImg from './components/funilImg/FunilImg';
import ProcessFlowContainer from './components/processflowcontainer/ProcessFlowContainer';
import FullscreenImage from './components/fullscreenimg/FullscreenImage';
import FluxogramaVideo from './components/fluxogramaVideo/FluxogramaVideo';
import CardsEnumerados from '../components/cardsEnumerados/CardsEnumerados';
import InfoImg from '../components/InfoImg/InfoImg';
import DateVideo from './components/dateVideo/DateVideo';
import Summary from '../../components/summary/Summary';
import { useSmoothScroll } from '../../../hooks/useSmoothScrol';
import PageHeader from '../../components/page-header/PageHeader';

function CaseBemol() {

    const scrollToElement = useSmoothScroll();
    const totalReading = summary.items.reduce((acc, item) => acc + item.readingTime, 0);

    return (
        <section className='page-container'>
            <PageHeader 
                bgColor={summary.bg}
                contextTxt='Atuação abrangente em conta digital (Conta Bemol), com responsabilidade direta sobre o produto de empréstimos (Empréstimo Pessoal) — conduzindo todo o ciclo de design, desde pesquisas (etapa de Descoberta) à entrega e estratégia do acompanhamento de métricas pós lançamento.'
                headerId='header-bemol'
                tools={tools}
            />

            <Summary items={summary.items} bg={summary.bg} color={summary.color} totalReading={totalReading} />

            {/*1.1 Resgatando clientes no fluxo de empréstimo por notificações segmentadas*/}
            <section className='chapter' id='chapter-1-1'>
                <div className='case-title__wrapper'>
                    <h2 className='case-title'>1.1 Resgatando clientes no fluxo de empréstimo por notificações segmentadas</h2>
                    <p className='case-subtitle'><span>Apoio:</span> Equipe de Marketing e equipe de Dados.</p>
                </div>
                <div className='subsection'>
                    <h3 className="bullet-white">Resultado</h3>
                    <div className={`subsection-content ${styles.wrapper}`}>
                        <img
                            src={suspensePhoneImg}
                            className={styles.suspensePhoneImg}
                            alt='telefone'
                        />
                        <p className={styles.suspenseTxt}>Step 2</p>
                        {pushNotifications && pushNotifications.map((cel, i) => (
                            <PushNotificationVideo
                                alt={cel.alt}
                                topImg={cel.topImg}
                                video={cel.video}
                                key={i}
                            />
                        ))}
                    </div>
                </div>

                <div className="subsection noGap">
                    <h3 className="bullet-white">Desafio e oportunidade</h3>
                    <TwoColumnGrid
                        leftContent={
                            <>
                                <div className={`coluna ${styles.colResults}`}>
                                    <p className={`case-paragrafo`}>Com o apoio da equipe de dados, identificamos que cerca de <span>68% dos clientes</span> com crédito pré-aprovado abandonavam o fluxo de contratação de empréstimo pessoal antes da finalização.
                                    </p>
                                    <p className={`case-paragrafo`}>
                                        Esse comportamento indicava uma <span>oportunidade estratégica</span>: mesmo com uma oferta pronta para ser ativada, a experiência atual não estava sendo eficiente em converter esse público.
                                    </p>
                                </div>
                            </>
                        }
                        rightContent={
                            <div className={`coluna ${styles.colResults}`}>
                                <p className={`case-paragrafo`}>Ao analisar a jornada, constatei a <span>ausência de qualquer estratégia</span> de reengajamento após o abandono do fluxo.
                                </p>
                                <p className={`case-paragrafo`}>
                                    A partir dessa constatação, propus uma iniciativa focada em desenvolver uma <span>régua de comunicação segmentada</span>, com o objetivo de resgatar clientes com crédito pré-aprovado e aumentar a <span>taxa de conversão</span> do funil.
                                </p>
                            </div>
                        }
                    />
                    <FunilImg />
                </div>

                <div className="subsection noGap">
                    <h3 className="bullet-white">Processo</h3>
                    <TwoColumnGrid
                        leftContent={
                            <>
                                <div className={`coluna ${styles.colResults}`}>
                                    <p className={`case-paragrafo`}>Com o apoio da equipe de dados, identificamos que cerca de <span>68% dos clientes</span> com crédito pré-aprovado abandonavam o fluxo de contratação de empréstimo pessoal antes da finalização.
                                    </p>
                                    <p className={`case-paragrafo`}>
                                        A partir disso, identifiquei a <span>oportunidade</span> de implementar uma régua de comunicação segmentada via push.
                                    </p>
                                </div>
                            </>
                        }
                        rightContent={
                            <div className={`coluna ${styles.colResults}`}>
                                <p className={`case-paragrafo`}>
                                    <span>"Alinhei a proposta com stakeholders</span> e, em parceria com a equipe de <span>marketing</span>, definimos os conteúdos e gatilhos da régua. A partir disso, personalizei o componente de push existente no <span>design system</span>, adaptando seu comportamento, visual e conteúdo ao contexto da <span>jornada</span>.
                                </p>
                                <p className={`case-paragrafo`}>
                                    Apresentei a solução aos stakeholders, <span>validei a solução</span> e finalizei a entrega.
                                </p>
                            </div>
                        }
                    />
                    <ProcessFlowContainer />
                </div>

                <div className="subsection noGap">
                    <h3 className="bullet-white">Solução: Régua de comunicação segmentada</h3>
                    <TwoColumnGrid
                        leftContent={
                            <>
                                <div className={`coluna ${styles.colResults}`}>
                                    <p className={`case-paragrafo`}>Para <span>aumentar a conversão</span> de clientes com crédito pré-aprovado, desenvolvi uma <span>régua de comunicação segmentada via push</span>, considerando o momento de abandono no fluxo e o perfil do usuário.
                                    </p>
                                </div>
                            </>
                        }
                        rightContent={
                            <div className={`coluna ${styles.colResults}`}>
                                <p className={`case-paragrafo`}>
                                    O conteúdo e o timing das mensagens foram definidos com apoio do time de <span>marketing e alinhados</span> com o <span>design system</span> da empresa.
                                </p>
                            </div>
                        }
                    />

                    <FullscreenImage />
                </div>

                <div className="subsection">
                    <TwoColumnGrid
                        leftContent={
                            <>
                                <div className={`coluna ${styles.colResults}`}>
                                    <h3 className="bullet-white">Métricas e melhorias</h3>
                                    <p className={`case-paragrafo`}>Para avaliar o impacto da solução, foram analisadas métricas estratégicas nos primeiros 30 dias após o lançamento:
                                    </p>
                                    <div>
                                        <p className={`case-paragrafo`}><span>Taxa de retorno</span> ao fluxo de contratação (aumento de 12% para 28%)</p>
                                        <p className={`case-paragrafo`}><span>Taxa de conversão</span> em empréstimos efetivados (aumento de 4% para 7%);</p>
                                        <p className={`case-paragrafo`}><span>Taxa de engajamento</span> com as notificações (taxa de cliques em torno de 18%).</p>
                                    </div>
                                    <p className="case-paragrafo">Além disso, tive apoio do time de marketing nos ajustes na <span>copy</span> e no <span>timing</span> das notificações.</p>
                                </div>
                            </>
                        }
                        rightContent={
                            <div className={`coluna ${styles.colResults}`}>
                                <h3 className="bullet-white">Plano de monitoramento</h3>
                                <p className={`case-paragrafo`}>
                                    O desempenho da estratégia foi acompanhado por relatórios periódicos, com foco na <span>identificação de padrões e ajustes contínuos</span>.
                                </p>
                                <p className={`case-paragrafo`}>
                                    O <span>monitoramento incluiu métricas</span> como interações com os pushes, tempo médio de retorno ao fluxo e variações nas taxas de conversão, de forma a <span>garantir a evolução da estratégia</span>, de acordo com o comportamento dos usuários e as metas do negócio.
                                </p>
                            </div>
                        }
                    />
                </div>
            </section>

            {/*1.2 Outras entregas*/}
            <section className='chapter' id='chapter-1-2'>
                <div className='case-title__wrapper'>
                    <h2 className='case-title'>1.2 Outras entregas</h2>
                </div>

                <div className='subsection gap24'>
                    <h3 className="bullet-black">Fluxogramas completos do produto Empréstimo Pessoal</h3>
                    <div className='subsection-content'>
                        <FluxogramaVideo />
                    </div>
                </div>

                <div className='subsection'>
                    <TwoColumnGrid
                        leftContent={
                            <>
                                <div className={`coluna noGap${styles.colResults}`}>
                                    <h3 className={`bullet-black ${styles.titleCol}`}>Diagnóstico e oportunidade</h3>
                                    <p className={`case-paragrafo mb30`}>Diante da <span>complexidade do produto</span> de empréstimo pessoal, tomei a <span>iniciativa</span> de mapear todas as etapas do fluxo — desde a contratação até a repactuação do contrato.
                                    </p>
                                    <p className={`case-paragrafo`}>
                                        O objetivo foi consolidar uma <span>visão completa do processo</span>, a criação de material de <span>referência</span> <span>para otimizar o trabalho</span> de diferentes áreas, além de servir para identificar <span>oportunidades de melhoria</span>.
                                    </p>
                                </div>
                            </>
                        }
                        rightContent={
                            <div className={`coluna noGap ${styles.colResults}`}>
                                <h3 className={`bullet-black ${styles.titleCol}`}>Imprevisto e solução</h3>
                                <p className={`case-paragrafo mb30`}>Ao analisar a jornada, constatei a <span>ausência de qualquer estratégia</span> de reengajamento após o abandono do fluxo.
                                </p>
                                <p className={`case-paragrafo`}>
                                    A partir dessa constatação, propus uma iniciativa focada em desenvolver uma <span>régua de comunicação segmentada</span>, com o objetivo de resgatar clientes com crédito pré-aprovado e aumentar a <span>taxa de conversão</span> do funil.
                                </p>
                            </div>
                        }
                    />
                </div>

                <div className='subsection'>
                    <h3 className="bullet-black">Entrega de valor</h3>
                    <div className='subsection-content'>
                        {Values && (
                            <CardsEnumerados cards={Values} />
                        )}
                    </div>
                </div>

            </section>

            {/*1.3 Outras entregas*/}
            <section className='chapter' id='chapter-1-3'>

                <div className='case-title__wrapper mb24'>
                    <h2 className='case-title'>1.3 Outras entregas</h2>
                </div>

                <div className="subsection noGap">
                    <p className='subsection-description'>
                        Propostas guiadas pela abordagem de <span>Data-Driven Design</span>
                        — desde a identificação da dor, validação do problema, até a definição
                        da solução e plano de acompanhamento pós lançamento.
                    </p>
                    <TwoColumnGrid
                        leftContent={
                            <>
                                <div className={`${styles.imgEntregaContainer} mr40`}>
                                    <h3 className="bullet-white mb16">Cálculo e análise do NPS da Conta Digital do ano de 2023.</h3>
                                    <InfoImg
                                        img={entregas[0].img}
                                        info={entregas[0].info}
                                    />
                                </div>
                            </>
                        }
                        rightContent={
                            <div className={`${styles.imgEntregaContainer} ml40`}>
                                <h3 className="bullet-white mb16">Apresentações mensais da análise da taxa de cancelamento de contas.</h3>
                                <InfoImg
                                    img={entregas[1].img}
                                    info={entregas[1].info}
                                />
                            </div>
                        }
                    />
                </div>

            </section>

            {/*1.4 Escolha da data do vencimento das parcelas de empréstimo (prévia) */}
            <section className='chapter noMb noPb' id='chapter-1-4' >
                <div className='case-title__wrapper'>
                    <h2 className='case-title'>1.4 Escolha da data do vencimento das parcelas de empréstimo (prévia)</h2>
                    <p className='case-subtitle'><span>Exclusivo</span> para apresentação pessoal, entre em contato comigo e agende um horário.</p>
                    <ul className='list-wrapper' style={{ color: '#7F7F7F' }}>
                        <li>Identificação da dor</li>
                        <li>Meu processo de design</li>
                        <li>Pesquisa e Benchmarking</li>
                        <li>Coleta e análise de dados</li>
                        <li>Design System <span>(documentação técnica de novo componente)</span></li>
                        <li>Teste com usuários</li>
                        <li>Aprendizados</li>
                    </ul>

                    <div className='subsection'>
                        <div className='subsection-content'>
                            <DateVideo />
                        </div>
                    </div>
                </div>
            </section>

            {/*FOOTER*/}
            <p className='footer-text'>
                💡Entre em contato e agende uma apresentação por algum dos botões abaixo! :)
            </p>
            <a
                href="#header-bemol"
                className="scrollup-case"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToElement('header-bemol');
                }}
            >
                <img src={arrowUp} alt="Seta para cima" />
            </a>

        </section>
    )
}

export default CaseBemol