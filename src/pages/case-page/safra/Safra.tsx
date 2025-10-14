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
import ListByType from "../components/content/ListByType/ListByType";
import SimpleList from "../components/content/SimpleList/SimpleList";
import { processoData } from "./contentData";
import TextContent from "../components/content/TextContent/TextContent";
import Quote from "../components/content/Quote/Quote";

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
      <Chapter id="chapter-4-2" customCss={{ paddingTop: "40" }}>
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
          <ContentBlock customCss={{ marginTop: "40", marginBottom: "40" }}>
            <ListByType
              items={processoData}
              type="day"
              color={safraData.bgColor}
            />
          </ContentBlock>
        </Chapter>
      </Chapter>

      {/* 4.4 Descoberta e evidências */}
      <Chapter id="chapter-4-4" customCss={{ marginTop: "0" }}>
        <CaseTitleHeader id="4.4" title="Descoberta e evidências" />

        <ContentBlock customCss={{ marginTop: "0" }}>
          <TextContent
            title={
              <>
                PONTOS DE DOR{" "}
                <i style={{ fontWeight: "normal" }}>
                  (do sistema atual de pagamento)
                </i>
              </>
            }
            paragraphs={[
              <SimpleList
                listType="arrow"
                textColor="strong"
                items={[
                  "Muitas opções diferentes (cartão de débito, cartão de crédito, Pix, TED, etc.);",
                  "Em lugares com maior movimentação, pessoas enfrentam filas para realizar pagamentos que, em geral, são longas e demoradas (experiência negativa);",
                  "Crescimento do número de roubos de cartões, dinheiro e celulares é grande;",
                  "A manipulação de cartões e dinheiro em espécie entre pessoas aumenta o risco de disseminação de doenças virais, como a COVID 19.",
                ]}
              />,
            ]}
          />
        </ContentBlock>

        <ContentBlock customCss={{ marginTop: "40" }}>
          <Quote
            text="E se o Safra oferecesse um único dispositivo que permite que aos usuários a escolha de qualquer uma dentre as suas opções de pagamento disponíveis, da instituição financeira que ele preferir?"
            title="OPORTUNIDADE"
          />
        </ContentBlock>
      </Chapter>

      {/* 4.5 Evolução da interface */}
      <Chapter id="chapter-4-5" customCss={{ paddingTop: "40" }}>
        <CaseTitleHeader id="4.5" title="Evolução da interface" />
      </Chapter>
      {/* 4.6 Análise Heurística e User Test */}
      <Chapter id="chapter-4-6" customCss={{ paddingTop: "40" }}>
        <CaseTitleHeader
          id="4.6"
          title="Análise Heurística e User Test"
          subtitle={
            <>
              Dica: Acesse a documentação detalhada no Estudo de Caso (
              <a href="https://medium.com/@veronicabvs" target="_blank" rel="noreferrer">
                link Medium
              </a>
              );
              <br />
              Outra dica: Acesse o teste no Maze (
              <a href="#" target="_blank" rel="noreferrer">
                link Maze
              </a>
              )
            </>
          }
          subtitleWhite={true}
        />
      </Chapter>

      {/* 4.7 Reconhecimento e premiação */}

      {/* 4.8 Equipe */}
    </PageWrapper>
  );
}

export default Safra;
