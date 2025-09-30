import PageHeader from "../components/structure/PageHeader/PageHeader";
import PageWrapper from "../components/structure/PageWrapper/PageWrapper";
import { safraData } from "./data";

function Safra() {
  return (
    <PageWrapper>
      <PageHeader
        bgColor={safraData.bgColor}
        contextTxt={safraData.contextTxt}
        headerId="header-safra"
        tools={safraData.tools}
      />
    </PageWrapper>
  );
}

export default Safra;
