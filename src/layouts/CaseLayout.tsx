import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import styles from "./caselayout.module.scss";
import SecaoContatos from "../components/layout/SecaoContatos/SecaoContatos";

function CaseLayout() {
  return (
    <div className={styles.caseLayoutContainer}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <main className={styles.caseMainContent}>
        <Outlet />
      </main>
      <div className={styles.footerWrapper}>
        <SecaoContatos />
      </div>
    </div>
  );
}

export default CaseLayout;
