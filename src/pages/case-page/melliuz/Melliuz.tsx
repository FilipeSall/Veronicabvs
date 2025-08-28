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
    </PageWrapper>
  );
}

export default Melliuz;
