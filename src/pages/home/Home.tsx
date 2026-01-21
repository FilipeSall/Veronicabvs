import CaseNav from '../../components/navigation/CaseNav/CaseNav';
import { CaseInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import HomeSEO from '../../components/SEO/HomeSEO';
import styles from './Home.module.scss';
import solicon from '../../assets/svgs/sol.svg';

function Home() {
  return (
    <>
      <HomeSEO />
      <section className={styles.homeContainer}>

      <div className={styles.titleSectionContainer}>

        <div className={styles.titlesWrapper}>
          <p id={styles.privameraTxt}>Primavér<span className={styles.textDegrade}>nica</span></p>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>Verônica</h1>
            <img className={styles.sunIcon} src={solicon} alt='icone de sol' />
            <div className={styles.titleMeta}>
              <span className={styles.lastName}>Silva</span>
              <h2 className={styles.subtitle}>- Product Designer</h2>
            </div>
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
            .map((caseItem: CaseInterface, i: number) => (
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
    </>
  );
}

export default Home;
