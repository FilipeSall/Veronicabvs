import CaseNav from '../../components/CaseNav/CaseNav';
import { CasesInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import styles from './Home.module.scss';
import solicon from '../../assets/svgs/sol.svg';

function Home() {
  return (
    <section className={styles.homeContainer}>

      <div className={styles.titleSectionContainer}>
        <div className={styles.titlesWrapper}>
          <p className={styles.textoAnimationHover}>Primavérn<span className={styles.textDegrade}>ica</span></p>
          <h1 className={styles.title}>Verônica <img src={solicon} alt='icone de sol'/> </h1>
          <p className={styles.textoAnimationHover}>Outôn<span className={styles.textDegrade}>ica</span></p>
          <p className={styles.textoAnimationHover}>Invérn<span className={styles.textDegrade}>ica</span></p>
        </div>
        <h2 className={styles.subtitle}>Product Designer</h2>
      </div>
      
      <div className={styles.NavCasesWrapper}>
        {CasesData
          .sort((a, b) => a.id - b.id)
          .map((caseItem: CasesInterface, i: number) => (
            <CaseNav
              key={i}
              path={`case/${caseItem.id}`}
              text={caseItem.id.toString()}
              caseValue={caseItem.tipoDeCase}
              bgColor={caseItem.bgColor}
              imgHover={caseItem.imgHover}
              projectName={caseItem.projeto}
            />
          ))}
      </div>

      <div className={styles.contatoWrapper}>
        <p className={styles.footerTxt}>Combine comigo a apresentação de case de sucesso</p>
      </div>

    </section>
  );
}

export default Home;