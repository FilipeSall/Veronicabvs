import CaseNav from '../../components/navigation/CaseNav/CaseNav';
import { CasesInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import styles from './Home.module.scss';
import solicon from '../../assets/svgs/sol.svg';

function Home() {
  return (
    <section className={styles.homeContainer}>

      <div className={styles.titleSectionContainer}>

        <div className={styles.titlesWrapper}>
          <p id={styles.privameraTxt}>Primavér<span className={styles.textDegrade}>nica</span></p>
          <div className={styles.subtitleWrapper}>
            <h1 className={styles.title}><img src={solicon} alt='icone de sol' /> Verônica Silva</h1>
            <h2 className={styles.subtitle}>- Product Designer</h2>
          </div>
          <p id={styles.outonoTxt}>Outô<span className={styles.textDegrade}>nica</span></p>
          <p id={styles.invernoTxt}>Invér<span className={styles.textDegrade}>nica</span></p>
        </div>

      </div>

    
      <div className={styles.navCaseContainer}>
        <p>Cases selecionados</p>
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
                isUnderConstruction={caseItem.underConstruction}
                underConstructionImg={caseItem.underConstructionImg}
                CasePreview={caseItem.CasePreview}
              />
            ))}
        </div>
      </div>

      <div className={styles.contatoWrapper}>
        <p className={styles.footerTxt}>Combine comigo a apresentação de case de sucesso <strong>exclusivo</strong>:</p>
      </div>

    </section>
  );
}

export default Home;