import '../escopecasepage.scss';
import { tools, pushNotifications, Values, summary } from './tools';
import styles from './casebemol.module.scss';
import arrowUp from '../../../assets/svgs/scrolTop.svg';
import PushNotificationVideo from '../components/pushNotificationVideo/PushNotificationVideo';
import FunilImg from './components/funilImg/FunilImg';
import ProcessFlowContainer from './components/processflowcontainer/ProcessFlowContainer';
import FluxogramaVideo from './components/fluxogramaVideo/FluxogramaVideo';
import CardsEnumerados from '../components/cardsEnumerados/CardsEnumerados';
import DateVideo from './components/dateVideo/DateVideo';
import Summary from '../../components/summary/Summary';
import { useSmoothScroll } from '../../../hooks/useSmoothScrol';
import PageHeader from '../../components/page-header/PageHeader';
import CaseTitle from '../../components/case-title/CaseTitle';
import SuspensePhone from './components/suspensePhone/SuspensePhone';
import OpenScreenImg from './components/openScreenImg/OpenScreenImg';
import ImgWithText from '../components/imgWithText/ImgWithText';
import entregaImg1 from '../../../assets/caseBemol/entrega1.png';
import entregaImg2 from '../../../assets/caseBemol/entrega2.png';
import { processDataApp } from './processData';
import arrowBlue from '../../../assets/svgs/blueArrow.svg';
import ContentSection from '../components/contentSection/ContentSection ';

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
                <CaseTitle
                    title={summary.items[0].title}
                    subTitle={summary.items[0].subtitle}
                />
                <div className='subsection'>
                    <div className={`${styles.wrapper}`}>
                        <SuspensePhone />
                        <div className={styles.pushNotificationsContainer}>
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
                </div>

                <div className="subsection">
                    <ContentSection
                        title="DESAFIO E OPORTUNIDADE"
                        paragraphs={[
                            "Com o apoio da equipe de dados, identificamos que cerca de **68% dos clientes** com crédito pré-aprovado abandonavam o fluxo de contratação de empréstimo pessoal antes da finalização.",
                            "Esse comportamento indicava uma **oportunidade estratégica:** mesmo com uma oferta pronta para ser ativada, a experiência atual não estava sendo eficiente em converter esse público.",
                            "Ao analisar a jornada, constatei a **ausência de qualquer estratégia** de reengajamento após o abandono do fluxo.",
                            "A partir desta constatação, propus uma iniciativa focada em desenvolver uma **régua de comunicação segmentada**, com o objetivo de resgatar clientes com crédito pré-aprovado e aumentar a **taxa de conversão** do funil."
                        ]}
                    />
                    <FunilImg />
                </div>

                <div className="subsection">
                    <ContentSection
                        title="SOLUÇÃO"
                        paragraphs={[
                            "Comecei com uma **análise de dados** para identificar o problema e entender o comportamento de abandono no funil, seguida por um **benchmarking** com bancos digitais para mapear **boas práticas** de reengajamento.",
                            "A partir disso, **identifiquei a oportunidade** de implementar uma régua de comunicação segmentada via push.",
                            "Alinhei a proposta com **stakeholders** e, em parceria com a equipe de marketing, definimos os conteúdos e gatilhos da régua. A partir disso, personalizei o componente de push existente no **design system**, adaptando seu comportamento, visual e conteúdo ao contexto da jornada.",
                            "Apresentei a solução aos stakeholders, **validei a solução** e finalizei a entrega."
                        ]}
                    />
                    <ProcessFlowContainer
                        arrowColored={arrowBlue}
                        color="#4C31E0"
                        lists={processDataApp}
                    />
                </div>

                <div className="subsection">
                    <ContentSection
                        title="PROCESSO"
                        paragraphs={[
                            "Para **aumentar a conversão** de clientes com crédito pré-aprovado, desenvolvi uma **régua de comunicação segmentada via push**, considerando o momento de abandono no fluxo e o perfil do usuário.",
                            "O conteúdo e o timing das mensagens foram definidos com apoio do **time de marketing** e alinhados com o **design system** da empresa."
                        ]}
                    />

                    <OpenScreenImg />
                </div>

                <div className="subsection">
                    <div className='content-container'>
                        <div>
                            <h3 className='content-title'>MÉTRICAS E MELHORIAS</h3>
                            <p className='content-text'>
                                Para avaliar o impacto da solução, foram analisadas métricas estratégicas nos primeiros 30 dias após o lançamento:</p>
                            <ul className='content-list'>
                                <li><span>Taxa de retorno</span> ao fluxo de contratação (<span>aumento de 12% para 28%</span>);</li>
                                <li><span>Taxa de conversão</span> em empréstimos efetivados (<span>aumento de 4% para 7%</span>);</li>
                                <li><span>Taxa de engajamento</span> com as notificações (<span>taxa de cliques em torno de 18%</span>).</li>
                            </ul>
                            <p className='content-text'>
                                Além disso, tive apoio do time de marketing nos ajustes na <span>copy</span> e no <span>timing</span> das notificações.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*1.2 Outras entregas*/}
            <section className='chapter' id='chapter-1-2'>
                <div className='case-title__wrapper'>
                    <div className='title-text__container '>
                        <h3 className='strong-white'>1.2 Outras entregas</h3>
                        <p className='description-text strong-white'>Fluxogramas completos do produto Empréstimo Pessoal</p>
                    </div>
                </div>

                <div className='subsection'>
                    <div className='subsection-content'>
                        <FluxogramaVideo />
                    </div>
                </div>

                <div className='subsection'>
                    <ContentSection
                        title="DIAGNÓSTICO E OPORTUNIDADE"
                        paragraphs={[
                            "Diante da **complexidade do produto** de empréstimo pessoal, tomei a **iniciativa** de mapear todas as etapas do fluxo — desde a contratação até a repactuação do contrato.",
                            "O objetivo foi consolidar uma **visão completa** do processo, a criação de material de referência para **otimizar** o trabalho de diferentes áreas, além de servir para identificar **oportunidades** de melhoria."
                        ]}
                    />

                    <ContentSection
                        title="IMPREVISTO E SOLUÇÃO"
                        paragraphs={[
                            "Durante a documentação, percebi **inconsistências nas informações** fornecidas sobre o funcionamento real do fluxo. Diferentes áreas possuíam versões divergentes do processo, dificultando a criação de um material confiável.",
                            "Para solucionar esse problema, implementei uma **validação estruturada:** ao final de cada etapa mapeada, colhi a assinatura digital do responsável da área correspondente, garantindo alinhamento e precisão nos fluxogramas."
                        ]}
                    />
                </div>

                <div className='subsection'>
                    <div className={styles.cardsEnumeradosContainer}>
                        {Values && (
                            <CardsEnumerados
                                cards={Values}
                                color='#4C31E0'
                                title='ENTREGA DE VALOR'
                            />
                        )}
                    </div>
                </div>

            </section>

            {/*1.3 Outras entregas*/}
            <section className='chapter' id='chapter-1-3'>

                <div className="subsection">
                    <div className='title-text__container'>
                        <h3 className='strong-white'>1.3 Outras entregas</h3>
                        <p className='content-text'>
                            Todas as propostas foram guiadas pela abordagem de Data-Driven Design
                            — desde a identificação da dor e definição do problema até o plano de acompanhamento pós-lançamento.
                        </p>
                    </div>
                    <div className='subsection-img__wrapper'>
                        <ImgWithText
                            img={entregaImg1}
                            title='CÁLCULO E ANÁLISE DO NPS'
                            text='Da conta digital Conta Bemol, do ano de 2023.'
                            description='Dados sensíveis censurados.'
                        />
                    </div>
                    <div className='subsection-img__wrapper'>
                        <ImgWithText
                            img={entregaImg2}
                            title='ANÁLISE DA TAXA DE CANCELAMENTO'
                            text='Apresentações mensais das análises aos stakeholders.'
                            description='Dados sensíveis censurados.'
                        />
                    </div>
                </div>

            </section>

            {/*1.4 Escolha da data do vencimento das parcelas de empréstimo (prévia) */}
            <section className='chapter' id='chapter-1-4' >
                <div className='case-title__wrapper'>
                    <div className='title-text__container'>
                        <h3>1.4 Escolha da data do vencimento das parcelas</h3>
                        <p className='description-text'><span>Exclusivo para apresentação pessoal</span>, entre em contato comigo e agende um horário.</p>
                    </div>

                    <div className='list-wrapper'>
                        <ul>
                            <li>Identificação da dor</li>
                            <li>Meu processo de design</li>
                            <li>Pesquisa e Benchmarking</li>
                            <li>Coleta e análise de dados</li>
                            <li>Design System (documentação técnica de novo componente)</li>
                            <li>Teste com usuários</li>
                            <li>Aprendizados</li>
                        </ul>
                    </div>
                    <div className='subsection'>
                        <DateVideo />
                    </div>
                </div>
            </section>

            {/*FOOTER*/}
            <p className='footer-text'>
            💡Entre em contato e agende uma apresentação :)
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