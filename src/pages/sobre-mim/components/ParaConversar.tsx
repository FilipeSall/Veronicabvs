import styles from "../sobremim.module.scss";
import pdfCurriculo from "../../../assets/pdfs/curriculo.pdf";
import newWindowIcon from "../../../assets/svgs/new-window.svg";

function ParaConversar() {
  return (
    <div className={styles.paraConversar}>
      <p>
        <span>Vamos conversar?</span>
      </p>
      <div className={styles.textWrapperContainer}>
        <div className={`${styles.bulletPoint} ${styles.bulletPointCurriculo}`}>
          •
        </div>
        <a href={pdfCurriculo} target="_blank" className={styles.curriculoLink}>
          <span>Acesse meu currículo </span>
          <img
            alt="Nova janela icone"
            className={styles.newWindowBtn}
            src={newWindowIcon}
          />
        </a>
      </div>
    </div>
  );
}

export default ParaConversar;
