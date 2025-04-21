import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import styles from "./mainlayoult.module.scss"
import SecaoContatos from "../components/secao-contatos/SecaoContatos"

function MainLayoult() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <SecaoContatos />
    </div>
  )
}

export default MainLayoult