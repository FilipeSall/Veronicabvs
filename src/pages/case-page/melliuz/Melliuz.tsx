import PageHeader from "../components/structure/PageHeader/PageHeader";
import PageWrapper from "../components/structure/PageWrapper/PageWrapper";
import Summary from "../components/structure/Summary/Summary";
import { melliuzData } from "./data";

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
      />

      {/* 3.1 resulado */}
      {/* 3.2 Desafio */}
      {/* 3.3 Processo */}
      {/* 3.4 Descobertas e evidências */}
      {/* 3.5 Userflow — Entry point 1 */}
      {/* 3.6 Entrega de Valor */}
      {/* 3.7 Potenciais de impacto */}
      {/* 3.7 Potenciais de impacto */}
      {/* 3.8 Próximos passos */}
    </PageWrapper>
  );
}

export default Melliuz;
