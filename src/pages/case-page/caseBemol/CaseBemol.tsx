import '../escopecasepage.scss';
import { tools, pushNotifications } from './tools';
import styles from './casebemol.module.scss';
import ToolsIcon from '../components/ToolsIcon/ToolsIcon';
import arrowUp from '../../../assets/svgs/arrowUp.svg';
import TwoColumnGrid from '../components/TwoColumnGrid/TwoColumnGrid';
import suspensePhoneImg from '../../../assets/caseBemol/suspense-phone.png';
import PushNotificationVideo from '../components/pushNotificationVideo/PushNotificationVideo';

function CaseBemol() {
    return (
        <section className='page-container'>
            {/* CASE HEADER*/}
            <div className='case-header' id='header-bemol'>
                <p className='header-description' style={{ borderLeft: '1px solid #404040' }}>
                    <span>Contexto:</span> Atuação abrangente em <span>conta digital</span> (Conta Bemol), com responsabilidade direta sobre o produto de empréstimos (Empréstimo Pessoal) — conduzindo <span>todo o ciclo de design</span>, desde pesquisas na etapa de discoberta à entrega e estratégia do acompanhamento de métricas pós lançamento.
                </p>

                <div className='tools-container'>
                    <p className='tools-text'>Ferramentas:</p>
                    <div className='tools-wrapper'>
                        {tools.map((tool, i) => (
                            <ToolsIcon key={i} value={tool.value} />
                        ))}
                    </div>
                </div>
            </div>
            {/*SUMMARY */}

            {/*1.1 Resgatando clientes no fluxo de empréstimo por notificações segmentadas*/}
            <section className='chapter' style={{ backgroundColor: '#4c31e0', color: '#FFFFFF' }}>
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
            </section>
            {/*1.2 Outras entregas*/}
            <section className='chapter' style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
                <div className='case-title__wrapper'>
                    <h2 className='case-title'>1.2 Outras entregas</h2>
                </div>

                <div className='subsection'>
                    <h3 className="bullet-black">Fluxogramas completos do produto Empréstimo Pessoal</h3>
                    <div className='subsection-content'>
                        VIDEO CONTAINER
                    </div>
                </div>

                <div className='subsection'>
                    <h3 className="bullet-black">Diagnóstico e oportunidade</h3>
                    <div className='subsection-content'>
                        TEXT CONTAINER
                    </div>
                </div>

                <div className='subsection'>
                    <h3 className="bullet-black">Entrega de valor</h3>
                    <div className='subsection-content'>
                        TEXT CONTAINER
                    </div>
                </div>

            </section>
            {/*1.3 Outras entregas*/}
            <section className='chapter' style={{ backgroundColor: '#4c31e0', color: '#FFFFFF' }}>

                <div className='case-title__wrapper'>
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
                                <div className="metric-content">
                                    <h4>Cálculo e análise do NPS da Conta Digital do ano de 2023.</h4>
                                    IMAGEM COMPONENT
                                </div>
                            </>
                        }
                        rightContent={
                            <div className="metric-content">
                                <h4>Apresentações mensais da análise da taxa de cancelamento de contas.</h4>
                                IMAGEM COMPONENT
                            </div>
                        }
                    />
                </div>

            </section>
            {/*1.4 Escolha da data do vencimento das parcelas de empréstimo (prévia) */}

            <section className='chapter' style={{ backgroundColor: '#FFFFFF', color: '#000000' }}>
                <div className='case-title__wrapper'>
                    <h2 className='case-title'>1.4 Escolha da data do vencimento das parcelas de empréstimo (prévia)</h2>
                    <p className='case-subtitle'><span>Exclusivo</span> para apresentação pessoal, entre em contato comigo e agende</p>
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
                            VIDEO CONTAINER
                        </div>
                    </div>
                </div>
            </section>
            <p className='footer-text'>💡Entre em contato e agente uma apresentação,por algum dos botões abaixo!</p>
            <a href='#header-bemol' className='scrollup-case'>
                <img src={arrowUp} alt='Seta para cima' />
            </a>
        </section>
    )
}

export default CaseBemol