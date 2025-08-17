import { summary } from './summary';
import '../estilos-case.scss';
import tools from './tools';
import PageHeader from '../../components/page-header/PageHeader';
import Summary from '../../components/summary/Summary';
import CaseTitle from '../../components/case-title/CaseTitle';
import VideoLegend from '../../components/video-legend/VideoLegend';
import videoAutocoplete from '../../../assets/appBemol/autocomplete.mp4';
import redArrow from '../../../assets/svgs/redArrow.svg';
import ProcessFlowContainer from '../caseBemol/components/processflowcontainer/ProcessFlowContainer';
import { processData, cardsData, carrosselData } from './data'
import desingSystemImg from '../../../assets/appBemol/designsystem.png';
import NegocioExperiencia from './components/negocio-experiencia/NegocioExperiencia';
import CardsEnumerados from '../components/cardsEnumerados/CardsEnumerados';
import { useScrollToElement } from '../../../hooks/useScrollToElement';
import ScrollToTop from '../../components/scroll-to-top/ScrollToTop';
import Carrossel from '../components/carrossel/Carrossel';

function AppBemol() {

    const totalReading = summary.items.reduce((acc, item) => acc + item.readingTime, 0);
    useScrollToElement('header-app-bemol', { smooth: false });
    return (
        <section className='pagina-case'>
            <PageHeader
                bgColor={summary.bg}
                contextTxt='Atuação aplicativo de e-commerce (App Bemol), do mesmo ecossistema da empresa da BSF, que também abrangendo alguns dos serviços financeiros da empresa.'
                headerId='header-app-bemol'
                tools={tools}
            />

            <Summary items={summary.items} bg={summary.bg} color={summary.color} totalReading={totalReading} />

            {/*2.1 Autocomplete para reconhecimento de clientes com Conta Bemol*/}
            <section className='capitulo-case' id='chapter-2-1'>
                <div className='subsecao-case'>
                    <CaseTitle
                        title={summary.items[0].title}
                        subTitle={summary.items[0].subtitle}
                        id={summary.items[0].id}
                    />

                    <VideoLegend
                        src={videoAutocoplete}
                        legend='Solução: Reconhecimento de cliente com Conta Bemol durante o processo de contratação de empréstimo por preenchimento inteligente.'
                    />
                </div>

                <div className="subsecao-case">
                    <h3 className="titulo-conteudo">CONTEXTO</h3>
                    <p className="texto-conteudo">A Bemol é uma empresa amazonense com forte atuação nos setores de varejo <span>(BSA)</span> e serviços financeiros <span>(BSF)</span>, oferecendo uma experiência integrada por meio de dois aplicativos principais:
                        <br />
                        <br />
                        <span>App Bemol:</span> Aplicativo voltado para compras online (e-commerce). <br /> <span>Conta Bemol:</span> Destinado à gestão de serviços financeiros (conta digital)
                        <br />
                        <br />
                        O produto de <span>Empréstimo Pessoal</span> está disponível em ambos os apps, permitindo que os usuários contratem crédito de forma prática e digital
                    </p>
                </div>

                <div className="subsecao-case">
                    <h3 className="titulo-conteudo">DESAFIO E OPORTUNIDADE</h3>
                    <p className="texto-conteudo">Uma das <span>metas estratégicas</span> da empresa para o ano de 2024 era o aumento da base de contas Bemol ativas.
                        <br />
                        <br />
                        Em <span>parceria</span> com a equipe de dados, constatamos uma <span>taxa muito baixa (1,8%)</span> de escolha da Conta Bemol como destino do crédito, mesmo entre usuários que já possuíam conta ativa no ecossistema (no último semestre)
                        <br />
                        <br />
                        A situação revelou uma <span>oportunidade</span> de atuação com foco em <span>incentivar o cliente</span> com conta ativa a escolher a Conta Bemol como destino do crédito, em vez de contas de terceiros.
                    </p>
                </div>

                <div className="subsecao-case">
                    <h3 className="titulo-conteudo">PROCESSO</h3>
                    <p className="texto-conteudo">A solução foi desenvolvida seguindo o modelo <span>Double Diamond adaptado ao Data-Driven Design</span>, que inclui uma fase inicial de planejamento estratégico e uma final de acompanhamento contínuo.
                    </p>
                </div>

                <div className="subsecao-case">
                    <ProcessFlowContainer
                        arrowColored={redArrow}
                        color="#E94545"
                        lists={processData}
                    />
                </div>

                <div className="subsecao-case">
                    <h3 className="titulo-conteudo">DESIGN SYSTEM</h3>
                    <p className="texto-conteudo">Contribuí para a evolução do Design System com a <span>documentação técnica</span> e adaptação do componente Datepicker, originalmente do <span>Material 3 (Google)</span>, para a identidade da marca.
                    </p>
                </div>

                <div className="subsecao-case">
                    <img src={desingSystemImg} alt="design sistem" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>

                <div className="subsecao-case">
                    <h3 className="titulo-conteudo">NEGÓCIO X EXPERIÊNCIA</h3>
                    <p className="texto-conteudo">Elaborei duas abordagens para o componente: uma com foco em conversão direta, favorecendo objetivos de <span>negócio (Business First)</span>, e outra com uma comunicação mais fluida e informativa, priorizando a <span>experiência do usuário (Experience First)</span>.
                        <br />
                        <br />
                        Apresentei ambas aos stakeholders e, após alinhamento, seguimos com a opção mais alinhada aos objetivos de negócio (Opção 1), embora a outra solução oferecesse uma experiência mais completa para o usuário.
                    </p>
                </div>

                <div className="subsecao-case">
                    <NegocioExperiencia />
                </div>

                <div className="subsecao-case">
                    <h3 className="titulo-conteudo">PLANO DE ACOMPANHAMENTO</h3>
                    <p className="texto-conteudo">Para acompanhar a evolução e impacto da solução no negócio, elaborei um plano de monitoramento mensal, analisando KPIs:
                    </p>
                    <ul className="lista-conteudo">
                        <li><span>→</span>Taxa de adesão à Conta Bemol;</li>
                        <li><span>→</span>Conversão no fluxo de contratação;</li>
                        <li><span>→</span>Fricção no processo de reconhecimento;</li>
                        <li><span>→</span>Feedback qualitativo dos usuários (via pesquisas contínuas).</li>
                    </ul>
                </div>

                <div className="subsecao-case">
                    <h3 className="titulo-conteudo">MÉTRICAS E MELHORIAS</h3>
                    <p className="texto-conteudo">Após o lançamento, acompanhamos os KPI's para medir o sucesso da solução implementada em relação aos objetivos do negócio e da experiência do usuário. Destaque para:
                        <br />
                        <br />
                        →  A escolha da Conta Bemol como destino do crédito contratado <span>aumentou de 1,8% para 14,6%</span> nas primeiras semanas após a implementação.
                    </p>
                </div>
            </section>

            {/*2.2 Redesign das telas de contratação de empréstimos via aplicativo e-commerce*/}
            <section className='capitulo-case' id='chapter-2-2'>
                <div className='subsecao-case'>
                    <CaseTitle
                        title={summary.items[1].title}
                        subTitle={summary.items[1].subtitle}
                        id={summary.items[1].id}
                    />
                </div>

                <div className="subsecao-case">
                    <h3 className="titulo-conteudo">DIAGNÓSTICO</h3>
                    <p className="texto-conteudo">Identificação de pontos de dor nas telas originais, como:
                    </p>
                    <ul className="lista-conteudo">
                        <li><span>→</span>Experiência fragmentada e pouco intuitiva;</li>
                        <li><span>→</span>Falta de clareza na exibição das informações (impactando a confiança do usuário);</li>
                        <li><span>→</span>Etapas desnecessárias ou confusas(que levavam ao abandono do fluxo);</li>
                        <li><span>→</span>Barreiras na finalização da contratação (potencialmente motivando a queda na taxa de conversão).</li>
                    </ul>
                </div>
                <div className="subsecao-case">
                    <h3 className="titulo-conteudo">ANTES X DEPOIS</h3>
                    <Carrossel
                        slides={carrosselData}
                        title="Tela inicial do fluxo de contratação"
                        dotColor='#F23434'
                    />
                </div>
                <div className="subsecao-case">
                    <h3 className="titulo-conteudo">DESAFIO E OBJETIVO</h3>
                    <p className="texto-conteudo">O redesenho envolveu a responsabilidade de <span>otimizar o fluxo</span> do produto mais rentável da empresa.
                        <br />
                        <br />
                        O objetivo era <span>equilibrar eficiência do negócio e experiência do usuário</span>, garantindo que as mudanças impulsionassem tanto a conversão quanto a satisfação
                    </p>
                </div>

                <div className="subsecao-case">
                    <CardsEnumerados
                        cards={cardsData}
                        title='MELHORIAS'
                        color='#F23434'
                    />
                </div>

                <div className="subsecao-case">
                    <h3 className="titulo-conteudo">PRÓXIMOS PASSOS</h3>
                    <p className="texto-conteudo">→ Acompanhamento de métricas pós-lançamento
                        Como taxa de conversão, tempo médio no fluxo e taxa de abandono;
                        <br />
                        <br />
                        → Testes de usabilidade com usuários reais
                        Para validar as melhorias e identificar novas oportunidades.
                    </p>
                </div>
            </section>

            {/*FOOTER*/}
            <p className='texto-footer'>
                💡Entre em contato e agende uma apresentação por algum dos botões abaixo! :)
            </p>
            <ScrollToTop
                targetId="header-app-bemol"
                arrowColor="vermelha"
            />
        </section>
    )
}

export default AppBemol