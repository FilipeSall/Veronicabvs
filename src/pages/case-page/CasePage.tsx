import { useParams } from 'react-router-dom';
import styles from './casepage.module.scss';
import { useEffect, useState } from 'react';
import { CasesInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import CasePanel from '../../components/CasePanel/CasePanel';
import CaseBemol from './caseBemol/CaseBemol';
import AppBemol from './appBemol/AppBemol';

function CasePage() {
    const { id } = useParams();
    const [caseData, setCaseData] = useState<CasesInterface | null>(null);

    useEffect(() => {
        const numericId = Number(id);
        const currentCase = [...CasesData]
            .sort((a, b) => a.id - b.id)
            .find(item => item.id === numericId);

        if (currentCase) {
            setCaseData(currentCase);
        }
    }, [id]);

    if (!caseData) {
        return <div>Carregando...</div>;
    }

    return (
        <main className={styles.caseContainer}>
            <CasePanel
                data={caseData.data}
                nome={caseData.nome}
                bgColor={caseData.bgColor}
                projeto={caseData.projeto}
            />
            <section className={styles.caseWrapper}>
                {caseData.id === 1 && <CaseBemol />}
                {caseData.id === 2 && <AppBemol />}
            </section>
        </main>
    )
}

export default CasePage;