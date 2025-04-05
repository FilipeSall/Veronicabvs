import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import styles from "./mainlayoult.module.scss"

function MainLayoult() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayoult