import { tools, pushNotifications, Values, summary } from "./tools";
import FunilImg from "../components/media/FunilImg/FunilImg";
import ProcessFlowContainer from "../components/media/ProcessFlow/ProcessFlowContainer";
import FluxogramaVideo from "../components/media/FluxogramaVideo/FluxogramaVideo";
import CardsEnumerados from "../components/content/CardsEnumerados/CardsEnumerados";
import DateVideo from "../components/media/DateVideo/DateVideo";
import Summary from "../components/structure/Summary/Summary";
import PageHeader from "../components/structure/PageHeader/PageHeader";
import VideoShowcase from "../components/media/VideoShowcase/VideoShowcase";
import suspensePhoneImg from "../../../assets/caseBemol/suspense-phone.png";
import OpenScreenImg from "../components/media/OpenScreenImg/OpenScreenImg";
import ImgWithText from "../components/media/ImageWithText/ImgWithText";
import entregaImg1 from "../../../assets/caseBemol/1.3 A.png";
import entregaImg2 from "../../../assets/caseBemol/1.3 B.png";
import { processDataApp } from "./processData";
import arrowBlue from "../../../assets/svgs/blueArrow.svg";
import ContentSection from "../components/structure/ContentSection/ContentSection";
import TextContent from "../components/content/TextContent/TextContent";
import Chapter from "../components/structure/Chapter/Chapter";
import ContentBlock from "../components/structure/ContentBlock/ContentBlock";
import CaseTitleHeader from "../components/content/CaseTitleHeader/CaseTitleHeader";
import MetricsList from "../components/content/MetricsList/MetricsList";
import SimpleList from "../components/content/SimpleList/SimpleList";
import { useScrollToElement } from "../../../hooks/useScrollToElement";
import CaseFooter from "../components/structure/CaseFooter/CaseFooter";
import PageWrapper from "../components/structure/PageWrapper/PageWrapper";

function CaseBemol() {
  const totalReading = summary.items.reduce(
    (acc, item) => acc + item.readingTime,
    0
  );
  useScrollToElement("header-bemol", { smooth: false });

  return (
    <PageWrapper>
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
          <VideoShowcase
            videos={pushNotifications}
            suspenseImg={{
              src: suspensePhoneImg,
              alt: "telefone",
              text: "Funil de contratação: Step 2",
            }}
          />
        </ContentBlock>

        <ContentBlock>
          <TextContent
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
          <TextContent
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
          <TextContent
            title="PROCESSO"
            paragraphs={[
              "Para **aumentar a conversão** de clientes com crédito pré-aprovado, desenvolvi uma **régua de comunicação segmentada via push**, considerando o momento de abandono no fluxo e o perfil do usuário.",
              "O conteúdo e o timing das mensagens foram definidos com apoio do **time de marketing** e alinhados com o **design system** da empresa.",
            ]}
          />

          <OpenScreenImg />
        </ContentBlock>

        <ContentBlock>
          <ContentSection title="MÉTRICAS E MELHORIAS">
            <MetricsList
              headerText="Para avaliar o impacto da solução, foram analisadas métricas estratégicas nos primeiros 30 dias após o lançamento:"
              items={[
                {
                  label: "Taxa de retorno",
                  value: (
                    <>
                      ao fluxo de contratação (
                      <span>aumento de 12% para 28%</span>)
                    </>
                  ),
                },
                {
                  label: "Taxa de conversão",
                  value: (
                    <>
                      em empréstimos efetivados (
                      <span>aumento de 4% para 7%</span>)
                    </>
                  ),
                },
                {
                  label: "Taxa de engajamento",
                  value: (
                    <>
                      com as notificações (
                      <span>taxa de cliques em torno de 18%</span>)
                    </>
                  ),
                },
              ]}
              footerText={
                <>
                  Além disso, tive apoio do time de marketing nos ajustes na{" "}
                  <span>copy</span> e no <span>timing</span> das notificações.
                </>
              }
            />
          </ContentSection>
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

        <ContentBlock fullWidth>
          <FluxogramaVideo />
        </ContentBlock>

        <ContentBlock>
          <TextContent
            title="DIAGNÓSTICO E OPORTUNIDADE"
            paragraphs={[
              "Diante da **complexidade do produto** de empréstimo pessoal, tomei a **iniciativa** de mapear todas as etapas do fluxo — desde a contratação até a repactuação do contrato.",
              "O objetivo foi consolidar uma **visão completa** do processo, a criação de material de referência para **otimizar** o trabalho de diferentes áreas, além de servir para identificar **oportunidades** de melhoria.",
            ]}
          />

          <TextContent
            title="IMPREVISTO E SOLUÇÃO"
            paragraphs={[
              "Durante a documentação, percebi **inconsistências nas informações** fornecidas sobre o funcionamento real do fluxo. Diferentes áreas possuíam versões divergentes do processo, dificultando a criação de um material confiável.",
              "Para solucionar esse problema, implementei uma **validação estruturada:** ao final de cada etapa mapeada, colhi a assinatura digital do responsável da área correspondente, garantindo alinhamento e precisão nos fluxogramas.",
            ]}
          />
        </ContentBlock>

        <ContentBlock>
          <ContentSection title="ENTREGA DE VALOR">
            {Values && <CardsEnumerados cards={Values} color="#4C31E0" />}
          </ContentSection>
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
          <ContentSection
            title="CÁLCULO E ANÁLISE DO NPS"
            subtitle="Da conta digital Conta Bemol, do ano de 2023."
          >
            <ImgWithText
              img={entregaImg1}
              title=""
              description="Dados sensíveis censurados."
              maxWidth="80"
            />
          </ContentSection>
        </ContentBlock>

        <ContentBlock>
          <ContentSection
            title="ANÁLISE DA TAXA DE CANCELAMENTO"
            subtitle="Apresentações mensais das análises aos stakeholders."
          >
            <ImgWithText
              img={entregaImg2}
              title=""
              description="Dados sensíveis censurados."
              maxWidth="80"
            />
          </ContentSection>
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
          <ContentSection>
            <SimpleList
              items={[
                "Identificação da dor",
                "Meu processo de design",
                "Pesquisa e Benchmarking",
                "Coleta e análise de dados",
                "Design System (documentação técnica de novo componente)",
                "Teste com usuários",
                "Aprendizados",
              ]}
            />
          </ContentSection>
        </ContentBlock>

        <ContentBlock>
          <DateVideo />
        </ContentBlock>
      </Chapter>

      {/*FOOTER*/}
      <CaseFooter targetId="header-bemol" arrowColor="azul" />
    </PageWrapper>
  );
}

export default CaseBemol;
