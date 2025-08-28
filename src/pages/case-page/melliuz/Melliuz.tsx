import PageHeader from "../components/structure/PageHeader/PageHeader";
import PageWrapper from "../components/structure/PageWrapper/PageWrapper";
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
    </PageWrapper>
  );
}

export default Melliuz;
