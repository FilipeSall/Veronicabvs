import { useState } from 'react';
import CaseNav from '../../components/navigation/CaseNav/CaseNav';
import { CaseInterface } from '../../interfaces/case';
import { CasesData } from '../../services/casesData';
import HomeSEO from '../../components/SEO/HomeSEO';
import styles from './Home.module.scss';
import solicon from '../../assets/svgs/sol.svg';

function Home() {
  const sortedCases = [...CasesData].sort((a, b) => a.id - b.id);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const activeCaseColor = sortedCases[activeCaseIndex]?.bgColor ?? '#272727';

  return (
    <>
      <HomeSEO />
      <section className={styles.homeContainer}>

      <div className={styles.titleSectionContainer}>

        <div className={styles.titlesWrapper}>
          <p id={styles.privameraTxt}>Primavér<span className={styles.textDegrade}>nica</span></p>
          <div className={styles.nameRow}>
            <img className={styles.sunIcon} src={solicon} alt='icone de sol' />
            <h1 className={styles.title}>Verônica</h1>
            <span className={styles.lastName}>Silva</span>
            <h2 className={styles.subtitle}>- Product Designer</h2>
          </div>
          <p id={styles.outonoTxt}>Outô<span className={styles.textDegrade}>nica</span></p>
          <p id={styles.invernoTxt}>Invér<span className={styles.textDegrade}>nica</span></p>
        </div>

      </div>

    
      <div className={styles.navCaseContainer}>
        <p>Cases selecionados</p>
        <div
          className={styles.NavCasesWrapper}
          style={{ '--active-index': activeCaseIndex } as React.CSSProperties}
        >
          {sortedCases.map((caseItem: CaseInterface, i: number) => (
            <div
              key={caseItem.id}
              className={styles.caseSlide}
              aria-hidden={i !== activeCaseIndex}
            >
              <CaseNav
                path={`case/${caseItem.id}`}
                text={caseItem.id.toString()}
                caseValue={caseItem.tipoDeCase}
                bgColor={caseItem.bgColor}
                imgHover={caseItem.imgHover}
                projectName={caseItem.projeto}
                isUnderConstruction={caseItem.underConstruction}
                underConstructionImg={caseItem.underConstructionImg}
                CasePreview={caseItem.CasePreview}
                isActive={i === activeCaseIndex}
                onSelect={() => setActiveCaseIndex(i)}
              />
            </div>
          ))}
        </div>
        <div
          className={styles.caseNavMenu}
          style={{ '--active-case-bg': activeCaseColor } as React.CSSProperties}
        >
          {sortedCases.map((caseItem: CaseInterface, i: number) => (
            <button
              key={caseItem.id}
              type="button"
              className={`${styles.caseNavItem} ${i === activeCaseIndex ? styles.caseNavItemActive : ''}`}
              onClick={() => setActiveCaseIndex(i)}
              aria-label={`Ir para o case ${i + 1}`}
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
