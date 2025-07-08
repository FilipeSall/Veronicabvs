import styles from './appbemol.module.scss';
import { summary } from './summary';
import '../escopecasepage.scss';
import arrowUp from '../../../assets/svgs/scrolTop.svg';
import tools from './tools';
import PageHeader from '../../components/page-header/PageHeader';
import { useSmoothScroll } from '../../../hooks/useSmoothScrol';
import Summary from '../../components/summary/Summary';
import CaseTitle from '../../components/case-title/CaseTitle';
import VideoLegend from '../../components/video-legend/VideoLegend';
import videoAutocoplete from '../../../assets/appBemol/autocomplete.mp4';
import redArrow from '../../../assets/svgs/redArrow.svg';
import ProcessFlowContainer from '../caseBemol/components/processflowcontainer/ProcessFlowContainer';
import { processData } from './processData';

function AppBemol() {

    const scrollToElement = useSmoothScroll();
    const totalReading = summary.items.reduce((acc, item) => acc + item.readingTime, 0);

    return (
        <section className='page-container'>
            <PageHeader
                bgColor={summary.bg}
                contextTxt='Atuação aplicativo de e-commerce (App Bemol), do mesmo ecossistema da empresa da BSF, que também abrangendo alguns dos serviços financeiros da empresa.'
                headerId='header-app-bemol'
                tools={tools}
            />

            <Summary items={summary.items} bg={summary.bg} color={summary.color} totalReading={totalReading} />

            {/*2.1 Autocomplete para reconhecimento de clientes com Conta Bemol*/}
            <section className='chapter' id='chapter-2-1'>
                <CaseTitle
                    title={summary.items[0].title}
                    subTitle={summary.items[0].subtitle}
                />

                <VideoLegend
                    src={videoAutocoplete}
                    legend='Solução: Reconhecimento de cliente com Conta Bemol durante o processo de contratação de empréstimo por preenchimento inteligente.'
                />

                <div className={styles.appBemolDiv}>
                    <h3 className={styles.appTitle}>Contexto</h3>
                    <p className={styles.appText}>A Bemol é uma empresa amazonense com forte atuação nos setores de varejo <span>(BSA)</span> e serviços financeiros <span>(BSF)</span>, oferecendo uma experiência integrada por meio de dois aplicativos principais:
                        <br />
                        <br />
                        <span>App Bemol:</span> Aplicativo voltado para compras online (e-commerce). <br /> <span>Conta Bemol:</span> Destinado à gestão de serviços financeiros (conta digital)
                        <br />
                        <br />
                        O produto de <span>Empréstimo Pessoal</span> está disponível em ambos os apps, permitindo que os usuários contratem crédito de forma prática e digital
                    </p>
                </div>

                <div className={styles.appBemolDiv}>
                    <h3 className={styles.appTitle}>DESAFIO E OPORTUNIDADE</h3>
                    <p className={styles.appText}>Uma das <span>metas estratégicas</span> da empresa para o ano de 2024 era o aumento da base de contas Bemol ativas.
                        <br />
                        <br />
                        Em <span>parceria</span> com a equipe de dados, constatamos uma <span>taxa muito baixa (1,8%)</span> de escolha da Conta Bemol como destino do crédito, mesmo entre usuários que já possuíam conta ativa no ecossistema (no último semestre)
                        <br />
                        <br />
                        A situação revelou uma <span>oportunidade</span> de atuação com foco em <span>incentivar o cliente</span> com conta ativa a escolher a Conta Bemol como destino do crédito, em vez de contas de terceiros.
                    </p>
                </div>

                <div className={styles.appBemolDiv}>
                    <h3 className={styles.appTitle}>PROCESSO</h3>
                    <p className={styles.appText}>A solução foi desenvolvida seguindo o modelo <span>Double Diamond adaptado ao Data-Driven Design</span>, que inclui uma fase inicial de planejamento estratégico e uma final de acompanhamento contínuo.
                    </p>
                </div>

                <div>
                    <ProcessFlowContainer
                        arrowColored={redArrow}
                        color="#E94545"
                        lists={processData}
                    />
                </div>
            </section>

            {/*2.2 Redesign das telas de contratação de empréstimos via aplicativo e-commerce*/}
            <section className='chapter' id='chapter-2-2'>

            </section>

            {/*FOOTER*/}
            <p className='footer-text'>
                💡Entre em contato e agende uma apresentação por algum dos botões abaixo! :)
            </p>
            <a
                href="#header-app-bemol"
                className="scrollup-case"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToElement('header-app-bemol');
                }}
            >
                <img src={arrowUp} alt="Seta para cima" />
            </a>

        </section>
    )
}

export default AppBemol