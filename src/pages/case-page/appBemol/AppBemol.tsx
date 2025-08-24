import { summary } from "./summary";
import tools from "./tools";
import PageHeader from "../../components/page-header/PageHeader";
import Summary from "../../components/summary/Summary";
import VideoLegend from "../../components/video-legend/VideoLegend";
import videoAutocoplete from "../../../assets/appBemol/autocomplete.mp4";
import redArrow from "../../../assets/svgs/redArrow.svg";
import ProcessFlowContainer from "../caseBemol/components/processflowcontainer/ProcessFlowContainer";
import { processData, cardsData, carrosselData } from "./data";
import desingSystemImg from "../../../assets/appBemol/designsystem.png";
import NegocioExperiencia from "./components/negocio-experiencia/NegocioExperiencia";
import CardsEnumerados from "../components/cardsEnumerados/CardsEnumerados";
import { useScrollToElement } from "../../../hooks/useScrollToElement";
import CaseFooter from "../components/CaseFooter/CaseFooter";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import ImageWrapper from "../components/ImageWrapper/ImageWrapper";
import Carrossel from "../components/carrossel/Carrossel";
import Chapter from "../components/Chapter/Chapter";
import ContentBlock from "../components/ContentBlock/ContentBlock";
import CaseTitleHeader from "../components/CaseTitleHeader/CaseTitleHeader";
import ContentSection from "../components/ContentSection/ContentSection";
import TextContent from "../components/TextContent/TextContent";
import SimpleList from "../components/SimpleList/SimpleList";

function AppBemol() {
  const totalReading = summary.items.reduce(
    (acc, item) => acc + item.readingTime,
    0
  );

  useScrollToElement("header-app-bemol", { smooth: false });
  return (
    <PageWrapper>
      <PageHeader
        bgColor={summary.bg}
        contextTxt="Atuação aplicativo de e-commerce (App Bemol), do mesmo ecossistema da empresa da BSF, que também abrangendo alguns dos serviços financeiros da empresa."
        headerId="header-app-bemol"
        tools={tools}
      />

      <Summary
        items={summary.items}
        bg={summary.bg}
        color={summary.color}
        totalReading={totalReading}
      />

      {/*2.1 Autocomplete para reconhecimento de clientes com Conta Bemol*/}
      <Chapter id="chapter-2-1">
        <CaseTitleHeader
          id={summary.items[0].id}
          title={summary.items[0].title}
          subtitle={summary.items[0].subtitle}
        />

        <ContentBlock>
          <VideoLegend
            src={videoAutocoplete}
            legend="Solução: Reconhecimento de cliente com Conta Bemol durante o processo de contratação de empréstimo por preenchimento inteligente."
          />
        </ContentBlock>

        <ContentBlock>
          <TextContent
            title="CONTEXTO"
            paragraphs={[
              "A Bemol é uma empresa amazonense com forte atuação nos setores de varejo **(BSA)** e serviços financeiros **(BSF)**, oferecendo uma experiência integrada por meio de dois aplicativos principais:",
              "**App Bemol:** Aplicativo voltado para compras online (e-commerce).",
              "**Conta Bemol:** Destinado à gestão de serviços financeiros (conta digital)",
              "O produto de **Empréstimo Pessoal** está disponível em ambos os apps, permitindo que os usuários contratem crédito de forma prática e digital",
            ]}
          />
        </ContentBlock>

        <ContentBlock>
          <TextContent
            title="DESAFIO E OPORTUNIDADE"
            paragraphs={[
              "Uma das **metas estratégicas** da empresa para o ano de 2024 era o aumento da base de contas Bemol ativas.",
              "Em **parceria** com a equipe de dados, constatamos uma **taxa muito baixa (1,8%)** de escolha da Conta Bemol como destino do crédito, mesmo entre usuários que já possuíam conta ativa no ecossistema (no último semestre)",
              "A situação revelou uma **oportunidade** de atuação com foco em **incentivar o cliente** com conta ativa a escolher a Conta Bemol como destino do crédito, em vez de contas de terceiros.",
            ]}
          />
        </ContentBlock>

        <ContentBlock>
          <TextContent
            title="PROCESSO"
            paragraphs={[
              "A solução foi desenvolvida seguindo o modelo **Double Diamond adaptado ao Data-Driven Design**, que inclui uma fase inicial de planejamento estratégico e uma final de acompanhamento contínuo.",
            ]}
          />
          <ProcessFlowContainer
            arrowColored={redArrow}
            color="#E94545"
            lists={processData}
          />
        </ContentBlock>

        <ContentBlock>
          <TextContent
            title="DESIGN SYSTEM"
            paragraphs={[
              "Contribuí para a evolução do Design System com a **documentação técnica** e adaptação do componente Datepicker, originalmente do **Material 3 (Google)**, para a identidade da marca.",
            ]}
          />
          <ImageWrapper src={desingSystemImg} alt="design system" />
        </ContentBlock>

        <ContentBlock>
          <TextContent
            title="NEGÓCIO X EXPERIÊNCIA"
            paragraphs={[
              "Elaborei duas abordagens para o componente: uma com foco em conversão direta, favorecendo objetivos de **negócio (Business First)**, e outra com uma comunicação mais fluida e informativa, priorizando a **experiência do usuário (Experience First)**.",
              "Apresentei ambas aos stakeholders e, após alinhamento, seguimos com a opção mais alinhada aos objetivos de negócio (Opção 1), embora a outra solução oferecesse uma experiência mais completa para o usuário.",
            ]}
          />
          <NegocioExperiencia />
        </ContentBlock>

        <ContentBlock>
          <TextContent
            title="PLANO DE ACOMPANHAMENTO"
            paragraphs={[
              "Para acompanhar a evolução e impacto da solução no negócio, elaborei um plano de monitoramento mensal, analisando KPIs:",
              <SimpleList
                items={[
                  "**Taxa de adesão** à Conta Bemol",
                  "**Conversão** no fluxo de contratação",
                  "**Fricção** no processo de reconhecimento",
                  "**Feedback qualitativo** dos usuários (via pesquisas contínuas)",
                ]}
              />,
            ]}
          />
        </ContentBlock>

        <ContentBlock>
          <TextContent
            title="MÉTRICAS E MELHORIAS"
            paragraphs={[
              "Após o lançamento, acompanhamos os KPI's para medir o sucesso da solução implementada em relação aos objetivos do negócio e da experiência do usuário. Destaque para:",
              "A escolha da Conta Bemol como destino do crédito contratado **aumentou de 1,8% para 14,6%** nas primeiras semanas após a implementação.",
            ]}
          />
        </ContentBlock>
      </Chapter>

      {/*2.2 Redesign das telas de contratação de empréstimos via aplicativo e-commerce*/}
      <Chapter id="chapter-2-2">
        <CaseTitleHeader
          id={summary.items[1].id}
          title={summary.items[1].title}
          subtitle={summary.items[1].subtitle}
        />

        <ContentBlock>
          <TextContent
            title="DIAGNÓSTICO"
            paragraphs={[
              "Identificação de pontos de dor nas telas originais, como:",
              <SimpleList
                items={[
                  <>
                    <span>Experiência fragmentada</span> e pouco intuitiva
                  </>,
                  <>
                    <span>Falta de clareza</span> na exibição das informações
                    (impactando a confiança do usuário)
                  </>,
                  <>
                    <span>Etapas desnecessárias</span> ou confusas (que levavam
                    ao abandono do fluxo)
                  </>,
                  <>
                    <span>Barreiras na finalização</span> da contratação
                    (potencialmente motivando a queda na taxa de conversão)
                  </>,
                ]}
              />,
            ]}
          />
        </ContentBlock>

        <ContentBlock>
          <ContentSection title="ANTES X DEPOIS">
            <Carrossel
              slides={carrosselData}
              title="Tela inicial do fluxo de contratação"
              dotColor="#F23434"
            />
          </ContentSection>
        </ContentBlock>

        <ContentBlock>
          <TextContent
            title="DESAFIO E OBJETIVO"
            paragraphs={[
              "O redesenho envolveu a responsabilidade de **otimizar o fluxo** do produto mais rentável da empresa.",
              "O objetivo era **equilibrar eficiência do negócio e experiência do usuário**, garantindo que as mudanças impulsionassem tanto a conversão quanto a satisfação",
            ]}
          />
        </ContentBlock>

        <ContentBlock>
          <ContentSection title="MELHORIAS">
            <CardsEnumerados cards={cardsData} color="#F23434" />
          </ContentSection>
        </ContentBlock>

        <ContentBlock>
          <TextContent
            title="PRÓXIMOS PASSOS"
            paragraphs={[
              "→ Acompanhamento de métricas pós-lançamento: Como taxa de conversão, tempo médio no fluxo e taxa de abandono.",
              "→ Testes de usabilidade com usuários reais: Para validar as melhorias e identificar novas oportunidades.",
            ]}
          />
        </ContentBlock>
      </Chapter>

      {/*FOOTER*/}
      <CaseFooter targetId="header-app-bemol" arrowColor="vermelha" />
    </PageWrapper>
  );
}

export default AppBemol;
