import PageHeader from "../components/structure/PageHeader/PageHeader";
import PageWrapper from "../components/structure/PageWrapper/PageWrapper";
import { summary } from "./summary";
import tools from "./tools";

function Melliuz() {
  return (
    <PageWrapper>
      <PageHeader
        bgColor={summary.bg}
        contextTxt="Etapa final do processo seletivo Méliuz para vaga Product Designer Pleno. 
        Duração: 5 dias. Responsabilidade: Integral (candidata)."
        headerId="header-melliuz"
        tools={tools}
      />
    </PageWrapper>
  );
}

export default Melliuz;
