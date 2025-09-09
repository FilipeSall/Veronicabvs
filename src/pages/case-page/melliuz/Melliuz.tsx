import CaseTitleHeader from "../components/content/CaseTitleHeader/CaseTitleHeader";
import Chapter from "../components/structure/Chapter/Chapter";
import ContentBlock from "../components/structure/ContentBlock/ContentBlock";
import PageHeader from "../components/structure/PageHeader/PageHeader";
import PageWrapper from "../components/structure/PageWrapper/PageWrapper";
import Summary from "../components/structure/Summary/Summary";
import { melliuzData } from "./data";
import dogImg from "../../../assets/melliuz/OWN.webp";
import FullImg from "../components/media/FullImg/FullImg";
import melliuzLogo from "../../../assets/melliuz/Meliuz.svg";
import TextContent from "../components/content/TextContent/TextContent";
import SimpleList from "../components/content/SimpleList/SimpleList";
import ProcessFlowContainer from "../components/media/ProcessFlow/ProcessFlowContainer";
import {
  processDataApp,
  insightsCardsValue,
  evidenciasTimelineData,
  entregaValorData,
  potencialImpacto,
} from "./contentData";
import pinkArrow from "../../../assets/svgs/pinkArrow.svg";
import InsightCardsGrid from "../components/content/InsightCards/InsightCardsGrid";
import VerticalTimeline from "../components/content/VerticalTimeline/VerticalTimeline";
import StepsImgFlow from "../components/media/StepsImgFlow/StepsImgFlow";
import ContentSection from "../components/structure/ContentSection/ContentSection";
import CardsEnumerados from "../components/content/CardsEnumerados/CardsEnumerados";
import CaseFooter from "../components/structure/CaseFooter/CaseFooter";

function Melliuz() {
  return (
    <PageWrapper>
      <PageHeader
        bgColor={melliuzData.bgColor}
        contextTxt={melliuzData.contextTxt || ""}
        headerId="header-melliuz"
        tools={melliuzData.tools}
      />

      <Summary
        bg={melliuzData.bgColor}
        items={melliuzData.summary.items}
        color={melliuzData.summary.color}
        totalReading={4}
      />

      {/* 3.1 resulado */}
      <Chapter id="chapter-3-1">
        <CaseTitleHeader id="3.1" title="Resultado — Doação de Cashback" />
        <ContentBlock customCss={{ marginTop: "40" }}>
          <FullImg
            img={dogImg}
            alt="Cachorro olhando para uma pessoa enquanto esssa mesma pessoa carrega o celular."
            optionalImg={melliuzLogo}
            optionalAlt="Logo da Melliuz"
          />
        </ContentBlock>
      </Chapter>
      {/* 3.2 Desafio */}
      <Chapter id="chapter-3-2" customCss={{ paddingTop: "34" }}>
        <CaseTitleHeader id="3.2" title="Desafio" />
        <ContentBlock>
          <TextContent
            customCss={{ marginTop: "0", marginBottom: "40" }}
            paragraphs={[
              "Criar a jornada de doação de cashback para ONGs dentro do app Méliuz, garantindo uma experiência intuitiva e eficiente. Incluir:",
              <SimpleList
                textColor="strong"
                items={[
                  "Permitir ao usuário escolher o valor a doar (total ou parcial);",
                  "Selecionar uma ONG parceira;",
                  "Opção de incluir uma mensagem opcional;",
                  "Confirmar a doação.",
                ]}
              />,
              "O projeto foi focado em estruturar o fluxo de design, hierarquia de informações e critérios de mensuração do sucesso, alinhando as **necessidades do usuário aos objetivos do negócio**.",
            ]}
          />
        </ContentBlock>
      </Chapter>
      {/* 3.3 Processo */}
      <Chapter
        id="chapter-3-3"
        customCss={{ marginTop: "0", paddingTop: "14" }}
      >
        <CaseTitleHeader id="3.3" title="Processo" />
        <ContentBlock>
          <TextContent
            paragraphs={[
              "Framework Double Diamond adaptado ao Data-Driven Design, com inclusão de 2 fases extras: fase inicial (de planejamento estratégico) e a fase final (de acompanhamento contínuo - “Próximos passos”). ",
            ]}
          />

          <ProcessFlowContainer
            lists={processDataApp}
            arrowColored={pinkArrow}
            color={melliuzData.bgColor}
          />
        </ContentBlock>
      </Chapter>
      {/* 3.4 Descobertas e evidências */}
      <Chapter
        id="chapter-3-4"
        customCss={{ marginTop: "0", paddingTop: "14" }}
      >
        <CaseTitleHeader
          id="3.4"
          title="Descobertas e evidências"
          customCss={{ marginTop: "20" }}
        />
        <ContentBlock customCss={{ marginTop: "20" }}>
          <InsightCardsGrid items={insightsCardsValue} />
          <VerticalTimeline
            items={evidenciasTimelineData}
            dotColor={melliuzData.bgColor}
          />
        </ContentBlock>
      </Chapter>
      {/* 3.5 Userflow — Entry point 1 */}
      <Chapter id="chapter-3-5" customCss={{ paddingTop: "0", marginTop: "0" }}>
        <CaseTitleHeader id="3.5" title="Userflow — Entry point 1" />
        <ContentBlock>
          <StepsImgFlow />
        </ContentBlock>
      </Chapter>
      {/* 3.6 Entrega de Valor */}
      <Chapter
        id="chapter-3-6"
        customCss={{ paddingTop: "34", marginBottom: "34" }}
      >
        <CaseTitleHeader id="3.6" title="Entrega de Valor" />

        <ContentBlock customCss={{ marginTop: "40", marginBottom: "40" }}>
          <InsightCardsGrid
            items={entregaValorData}
            customCss={{
              gap: "40",
              itemGap: "40",
              marginBottom: "24",
            }}
          />
        </ContentBlock>
      </Chapter>
      {/* 3.7 Potenciais de impacto */}
      <Chapter id="chapter-3-7" customCss={{ marginTop: "24" }}>
        <CaseTitleHeader id="3.7" title="Potenciais de impacto" />

        <ContentBlock>
          <ContentSection>
            {potencialImpacto && (
              <CardsEnumerados
                cards={potencialImpacto}
                color={melliuzData.bgColor}
              />
            )}
          </ContentSection>
        </ContentBlock>
      </Chapter>
      {/* 3.8 Próximos passos */}

      {/*FOOTER*/}
      <CaseFooter targetId="header-melliuz" arrowColor="rosa" />
    </PageWrapper>
  );
}

export default Melliuz;
