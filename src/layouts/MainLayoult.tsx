import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import styles from "./mainlayoult.module.scss";
import SecaoContatos from "../components/layout/SecaoContatos/SecaoContatos";

function MainLayoult() {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <div className={styles.contatosWrapper}>
        <SecaoContatos />
      </div>
    </div>
  );
}

export default MainLayoult;
