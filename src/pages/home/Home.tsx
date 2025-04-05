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
    </section>
  );
}

export default Home;