import "../escopecasepage.scss";
import { tools, pushNotifications, Values, summary } from "./tools";
import styles from "./casebemol.module.scss";
import PushNotificationVideo from "../components/pushNotificationVideo/PushNotificationVideo";
import FunilImg from "./components/funilImg/FunilImg";
import ProcessFlowContainer from "./components/processflowcontainer/ProcessFlowContainer";
import FluxogramaVideo from "./components/fluxogramaVideo/FluxogramaVideo";
import CardsEnumerados from "../components/cardsEnumerados/CardsEnumerados";
import DateVideo from "./components/dateVideo/DateVideo";
import Summary from "../../components/summary/Summary";
import PageHeader from "../../components/page-header/PageHeader";
import SuspensePhone from "./components/suspensePhone/SuspensePhone";
import OpenScreenImg from "./components/openScreenImg/OpenScreenImg";
import ImgWithText from "../components/imgWithText/ImgWithText";
import entregaImg1 from "../../../assets/caseBemol/1.3 A.png";
import entregaImg2 from "../../../assets/caseBemol/1.3 B.png";
import { processDataApp } from "./processData";
import arrowBlue from "../../../assets/svgs/blueArrow.svg";
import ContentSection from "../components/contentSection/ContentSection ";
import Chapter from "../components/Chapter/Chapter";
import chapterStyles from "../components/Chapter/chapter.module.scss";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import CaseTitleHeader from "../components/CaseTitleHeader/CaseTitleHeader";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import { useScrollToElement } from "../../../hooks/useScrollToElement";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";

function CaseBemol() {
  const totalReading = summary.items.reduce(
    (acc, item) => acc + item.readingTime,
    0
  );
  useScrollToElement("header-bemol", { smooth: false });

  return (
    <section className="page-container">
      <PageHeader
        bgColor={summary.bg}
        contextTxt="Atuação abrangente em conta digital (Conta Bemol), com responsabilidade direta sobre o produto de empréstimos (Empréstimo Pessoal) — conduzindo todo o ciclo de design, desde pesquisas (etapa de Descoberta) à entrega e estratégia do acompanhamento de métricas pós lançamento."
        headerId="header-bemol"
        tools={tools}
      />

      <Summary
        items={summary.items}
        bg={summary.bg}
        color={summary.color}
        totalReading={totalReading}
      />

      {/*1.1 Resgatando clientes no fluxo de empréstimo por notificações segmentadas*/}
      <Chapter id="chapter-1-1">
        <CaseTitleHeader
          id="1.1"
          title="Resgatando clientes no fluxo de empréstimo por notificações segmentadas"
          subtitle="Apoio: Equipe de Marketing e equipe de Dados."
          subtitleWhite={false}
        />
        <ContentBlock>
          <div className={`${styles.wrapper}`}>
            <SuspensePhone />
            <div className={styles.pushNotificationsContainer}>
              {pushNotifications &&
                pushNotifications.map((cel, i) => (
                  <PushNotificationVideo
                    alt={cel.alt}
                    topImg={cel.topImg}
                    video={cel.video}
                    key={i}
                  />
                ))}
            </div>
          </div>
        </ContentBlock>

        <ContentBlock>
          <ContentSection
            title="DESAFIO E OPORTUNIDADE"
            paragraphs={[
              "Com o apoio da equipe de dados, identificamos que cerca de **68% dos clientes** com crédito pré-aprovado abandonavam o fluxo de contratação de empréstimo pessoal antes da finalização.",
              "Esse comportamento indicava uma **oportunidade estratégica:** mesmo com uma oferta pronta para ser ativada, a experiência atual não estava sendo eficiente em converter esse público.",
              "Ao analisar a jornada, constatei a **ausência de qualquer estratégia** de reengajamento após o abandono do fluxo.",
              "A partir desta constatação, propus uma iniciativa focada em desenvolver uma **régua de comunicação segmentada**, com o objetivo de resgatar clientes com crédito pré-aprovado e aumentar a **taxa de conversão** do funil.",
            ]}
          />
          <FunilImg />
        </ContentBlock>

        <ContentBlock>
          <ContentSection
            title="SOLUÇÃO"
            paragraphs={[
              "Comecei com uma **análise de dados** para identificar o problema e entender o comportamento de abandono no funil, seguida por um **benchmarking** com bancos digitais para mapear **boas práticas** de reengajamento.",
              "A partir disso, **identifiquei a oportunidade** de implementar uma régua de comunicação segmentada via push.",
              "Alinhei a proposta com **stakeholders** e, em parceria com a equipe de marketing, definimos os conteúdos e gatilhos da régua. A partir disso, personalizei o componente de push existente no **design system**, adaptando seu comportamento, visual e conteúdo ao contexto da jornada.",
              "Apresentei a solução aos stakeholders, **validei a solução** e finalizei a entrega.",
            ]}
          />
          <ProcessFlowContainer
            arrowColored={arrowBlue}
            color="#4C31E0"
            lists={processDataApp}
          />
        </ContentBlock>

        <ContentBlock>
          <ContentSection
            title="PROCESSO"
            paragraphs={[
              "Para **aumentar a conversão** de clientes com crédito pré-aprovado, desenvolvi uma **régua de comunicação segmentada via push**, considerando o momento de abandono no fluxo e o perfil do usuário.",
              "O conteúdo e o timing das mensagens foram definidos com apoio do **time de marketing** e alinhados com o **design system** da empresa.",
            ]}
          />

          <OpenScreenImg />
        </ContentBlock>

        <ContentBlock>
          <ContentWrapper title="MÉTRICAS E MELHORIAS">
            <p className="content-text">
              Para avaliar o impacto da solução, foram analisadas métricas
              estratégicas nos primeiros 30 dias após o lançamento:
            </p>
            <ul className="content-list">
              <li>
                <span>Taxa de retorno</span> ao fluxo de contratação (
                <span>aumento de 12% para 28%</span>);
              </li>
              <li>
                <span>Taxa de conversão</span> em empréstimos efetivados (
                <span>aumento de 4% para 7%</span>);
              </li>
              <li>
                <span>Taxa de engajamento</span> com as notificações (
                <span>taxa de cliques em torno de 18%</span>).
              </li>
            </ul>
            <p className="content-text">
              Além disso, tive apoio do time de marketing nos ajustes na{" "}
              <span>copy</span> e no <span>timing</span> das notificações.
            </p>
          </ContentWrapper>
        </ContentBlock>
      </Chapter>

      {/*1.2 Outras entregas*/}
      <Chapter id="chapter-1-2">
        <CaseTitleHeader
          id="1.2"
          title="Outras entregas"
          subtitle="Fluxogramas completos do produto Empréstimo Pessoal"
          subtitleWhite
        />

        <ContentBlock>
          <div className="subsection-content">
            <FluxogramaVideo />
          </div>
        </ContentBlock>

        <ContentBlock>
          <ContentSection
            title="DIAGNÓSTICO E OPORTUNIDADE"
            paragraphs={[
              "Diante da **complexidade do produto** de empréstimo pessoal, tomei a **iniciativa** de mapear todas as etapas do fluxo — desde a contratação até a repactuação do contrato.",
              "O objetivo foi consolidar uma **visão completa** do processo, a criação de material de referência para **otimizar** o trabalho de diferentes áreas, além de servir para identificar **oportunidades** de melhoria.",
            ]}
          />

          <ContentSection
            title="IMPREVISTO E SOLUÇÃO"
            paragraphs={[
              "Durante a documentação, percebi **inconsistências nas informações** fornecidas sobre o funcionamento real do fluxo. Diferentes áreas possuíam versões divergentes do processo, dificultando a criação de um material confiável.",
              "Para solucionar esse problema, implementei uma **validação estruturada:** ao final de cada etapa mapeada, colhi a assinatura digital do responsável da área correspondente, garantindo alinhamento e precisão nos fluxogramas.",
            ]}
          />
        </ContentBlock>

        <ContentBlock>
          <div className={styles.cardsEnumeradosContainer}>
            {Values && (
              <CardsEnumerados
                cards={Values}
                color="#4C31E0"
                title="ENTREGA DE VALOR"
              />
            )}
          </div>
        </ContentBlock>
      </Chapter>

      {/*1.3 Outras entregas*/}
      <Chapter id="chapter-1-3">
        <CaseTitleHeader
          id="1.3"
          title="Outras entregas"
          subtitle="Todas as propostas foram guiadas pela abordagem de Data-Driven Design — desde a identificação da dor e definição do problema até o plano de acompanhamento pós-lançamento."
          subtitleVariant="paragraph"
        />
        <ContentBlock>
          <div className="subsection-img__wrapper">
            <ImgWithText
              img={entregaImg1}
              title="CÁLCULO E ANÁLISE DO NPS"
              text="Da conta digital Conta Bemol, do ano de 2023."
              description="Dados sensíveis censurados."
              maxWidth="70"
            />
          </div>
          <div className="subsection-img__wrapper">
            <ImgWithText
              img={entregaImg2}
              title="ANÁLISE DA TAXA DE CANCELAMENTO"
              text="Apresentações mensais das análises aos stakeholders."
              description="Dados sensíveis censurados."
              maxWidth="70"
            />
          </div>
        </ContentBlock>
      </Chapter>

      {/*1.4 Escolha da data do vencimento das parcelas de empréstimo (prévia) */}
      <Chapter id="chapter-1-4">
        <CaseTitleHeader
          id="1.4"
          title="Escolha da data do vencimento das parcelas"
          subtitle={
            <>
              <span>Exclusivo para apresentação pessoal</span>, entre em contato
              comigo e agende um horário.
            </>
          }
          className="special-chapter"
        />

        <ContentBlock>
          <div className={chapterStyles.listWrapper}>
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
          <ContentBlock>
            <DateVideo />
          </ContentBlock>
        </ContentBlock>
      </Chapter>

      {/*FOOTER*/}
      <p className="footer-text">
        💡Entre em contato e agende uma apresentação :)
      </p>
      <ScrollToTop targetId="header-bemol" arrowColor="azul" />
    </section>
  );
}

export default CaseBemol;
