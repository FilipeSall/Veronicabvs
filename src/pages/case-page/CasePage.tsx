import { useParams } from 'react-router-dom';
import styles from './casepage.module.scss';
import { useEffect, useState } from 'react';
import { CasesInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import CasePanel from '../../components/CasePanel/CasePanel';
import SecaoContatos from '../../components/secao-contatos/SecaoContatos';

function CasePage() {
    const { id } = useParams();
    const [caseData, setCaseData] = useState<CasesInterface | null>(null);

    useEffect(() => {
        const currentCase = CasesData.find(item => item.path === `case-${id}`);
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

            </section>
            <SecaoContatos />
        </main>
    )
}

export default CasePage