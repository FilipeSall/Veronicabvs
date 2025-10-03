import { useScrollToElement } from "../../../hooks/useScrollToElement";
import CaseTitleHeader from "../components/content/CaseTitleHeader/CaseTitleHeader";
import Chapter from "../components/structure/Chapter/Chapter";
import ContentBlock from "../components/structure/ContentBlock/ContentBlock";
import PageHeader from "../components/structure/PageHeader/PageHeader";
import PageWrapper from "../components/structure/PageWrapper/PageWrapper";
import Summary from "../components/structure/Summary/Summary";
import { safraData } from "./data";
import safraOpenImg from "../../../assets/safra/safraopen.webp";
import styles from "./safra.module.scss";

function Safra() {
  useScrollToElement("header-safra", { smooth: false });

  return (
    <PageWrapper>
      <PageHeader
        bgColor={safraData.bgColor}
        contextTxt={safraData.contextTxt}
        headerId="header-safra"
        tools={safraData.tools}
      />
      <Summary
        bg={safraData.bgColor}
        items={safraData.summary.items}
        color={safraData.summary.color}
        totalReading={6}
      />

      {/* 4.1 Resultado */}
      <Chapter id="chapter-4-1">
        <CaseTitleHeader
          id="4.1"
          title="Resultado"
          subtitle="Proposta de um novo método de pagamento por aproximação totalmente moderno, simples e inovador, para quem compra e para quem vende."
        />
        <ContentBlock customCss={{ marginTop: "40" }}>
          <div className={styles.safraOpenImgContainer}>
            <img src={safraOpenImg} />
          </div>
        </ContentBlock>
      </Chapter>

      {/* 4.2 Desafio */}
      <Chapter id="chapter-4-2">
        <CaseTitleHeader
          id="4.2"
          title="Desafio"
          subtitle="Criação de solução tecnológica e inovadora para o banco, relacionada à terceira fase do Open Banking."
        />

        {/* 4.3 Processo */}
        <Chapter
          id="chapter-4-3"
          forceBackgroundColor="#272727"
          customCss={{ paddingTop: "80" }}
        >
          <CaseTitleHeader
            id="4.3"
            title="Processo"
            subtitle="Diante do curto prazo, optei por adaptar o método ágil Lean UX, direcionando cada etapa para um dia de desenvolvimento."
          />
        </Chapter>
      </Chapter>

      {/* 4.4 Descoberta e evidências */}
      <Chapter id="chapter-4-4">
        <CaseTitleHeader id="4.4" title="Descoberta e evidências" />
      </Chapter>

      {/* 4.5 Evolução da interface */}

      {/* 4.6 Análise Heurística e User Test */}

      {/* 4.7 Reconhecimento e premiação */}

      {/* 4.8 Equipe */}
    </PageWrapper>
  );
}

export default Safra;
