import { useParams } from "react-router-dom";
import styles from "./casepage.module.scss";
import { useEffect, useState } from "react";
import { CaseInterface } from "../../interfaces/case";
import CasePanel from "../../components/navigation/CasePanel/CasePanel";
import CaseBemol from "./caseBemol/CaseBemol";
import AppBemol from "./appBemol/AppBemol";
import Melliuz from "./melliuz/Melliuz";
import { caseBemolData } from "./caseBemol/data";
import { appBemolData } from "./appBemol/data";
import { melliuzData } from "./melliuz/data";
import { safraData } from "./safra/data";
import Safra from "./safra/Safra";

const casesMap: { [key: number]: CaseInterface } = {
  1: caseBemolData,
  2: appBemolData,
  3: melliuzData,
  4: safraData,
};

function CasePage() {
  const { id } = useParams();
  const [caseData, setCaseData] = useState<CaseInterface | null>(null);

  useEffect(() => {
    const numericId = Number(id);
    const currentCase = casesMap[numericId];

    if (currentCase) {
      setCaseData(currentCase);
    }
  }, [id]);

  if (!caseData) {
    return <div style={{ color: "whitesmoke" }}>Carregando...</div>;
  }

  return (
    <main className={styles.caseContainer}>
      <CasePanel
        nome={caseData.nome}
        bgColor={caseData.bgColor}
        projeto={caseData.projeto}
        miniImg={caseData.miniImg}
      />

      <section className={styles.caseWrapper}>
        {caseData.id === 1 && <CaseBemol />}
        {caseData.id === 2 && <AppBemol />}
        {caseData.id === 3 && <Melliuz />}
        {caseData.id === 4 && <Safra />}
      </section>
    </main>
  );
}

export default CasePage;
