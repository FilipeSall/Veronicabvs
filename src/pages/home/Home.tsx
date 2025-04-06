import CaseNav from '../../components/CaseNav/CaseNav';
import SecaoContatos from '../../components/secao-contatos/SecaoContatos';
import { CasesInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import styles from './Home.module.scss';

function Home() {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.titleSectionContainer}>
        <div className={styles.titlesWrapper}>
          <p>Primavérn<span className={styles.textDegrade}>ica</span></p>
          <h1 className={styles.title}>Verônica</h1>
          <p>Outôn<span className={styles.textDegrade}>ica</span></p>
          <p>Invérn<span className={styles.textDegrade}>ica</span></p>
        </div>
        <h2 className={styles.subtitle}>Product Designer</h2>
      </div>
      <div className={styles.NavCasesWrapper}>
        {CasesData && CasesData.map((caseItem: CasesInterface, i: number) => (
            <CaseNav 
            key={i}
            path={`case/${caseItem.id}`}
            text={caseItem.id.toString()}
            caseValue={caseItem.tipoDeCase}
            />
          ))}
      </div>
      <div className={styles.contatoWrapper}>
        <p className={styles.footerTxt}>Combine comigo a apresentação de case de sucesso</p>
        <SecaoContatos />
      </div>
    </section>
  );
}

export default Home;