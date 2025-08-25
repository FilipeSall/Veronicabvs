import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import styles from "./mainlayoult.module.scss";
import SecaoContatos from "../components/layout/SecaoContatos/SecaoContatos";

function MainLayoult() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <SecaoContatos />
    </div>
  );
}

export default MainLayoult;
