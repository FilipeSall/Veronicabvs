import { useParams } from 'react-router-dom';
import styles from './casepage.module.scss';
import { useEffect, useState } from 'react';
import { CasesInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import CasePanel from '../../components/CasePanel/CasePanel';

function CasePage() {
    const { id } = useParams();
    const [caseData, setCaseData] = useState<CasesInterface | null>(null);

    useEffect(() => {
        // Encontrar o case correspondente pelo path na URL
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
            projeto={caseData.projeto}
            />
        </main>
    )
}

export default CasePage