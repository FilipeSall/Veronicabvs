import styles from "./stepsimg.module.scss";
import phone1 from "../../../../../assets/melliuz/phone1.webp";
import phone2 from "../../../../../assets/melliuz/phone2.webp";
import phone3 from "../../../../../assets/melliuz/phone3.webp";
import phone4 from "../../../../../assets/melliuz/phone4.webp";
import phone5 from "../../../../../assets/melliuz/phone5.webp";
import phone6 from "../../../../../assets/melliuz/phone6.webp";
import { ArcherContainer, ArcherElement } from "react-archer";

function StepsImgFlow() {
  const archerLineStyle = {
    strokeColor: "#BBBBBB",
    strokeWidth: 1,
    strokeDasharray: "8",
  };

  return (
    <ArcherContainer strokeColor="#BBBBBB" strokeWidth={1} strokeDasharray="8">
      <div className={styles.container}>
        <div className={styles.stepWrapper}>
          <img src={phone1} alt="tela de extrato" />
          <ArcherElement
            id="step1"
            relations={[
              {
                targetId: "step2",
                sourceAnchor: "middle",
                targetAnchor: "middle",
                style: archerLineStyle,
              },
            ]}
          >
            <div className={styles.number}>1.</div>
          </ArcherElement>
          <p>Na tela de Extrato, acessa ícone de doação na parte superior</p>
        </div>

        <div className={styles.stepWrapper}>
          <img src={phone2} alt="tela de extrato" />
          <ArcherElement
            id="step2"
            relations={[
              {
                targetId: "step3",
                sourceAnchor: "middle",
                targetAnchor: "middle",
                style: archerLineStyle,
              },
            ]}
          >
            <div className={styles.number}>2.</div>
          </ArcherElement>
          <p>Opta pelo botão sugestivo para doar 100 reais</p>
        </div>

        <div className={styles.stepWrapper}>
          <img src={phone3} alt="Escolha uma parceria" />
          <ArcherElement
            id="step3"
            relations={[
              {
                targetId: "step4",
                sourceAnchor: "middle",
                targetAnchor: "middle",
                style: archerLineStyle,
              },
            ]}
          >
            <div className={styles.number}>3.</div>
          </ArcherElement>
          <p>
            Escolhe uma Ong parceira, de sua preferência, para receber a doação
          </p>
        </div>

        <div className={styles.stepWrapper}>
          <img src={phone4} alt="Passo 4" />
          <ArcherElement
            id="step4"
            relations={[
              {
                targetId: "step5",
                sourceAnchor: "middle",
                targetAnchor: "middle",
                style: archerLineStyle,
              },
            ]}
          >
            <div className={styles.number}>4.</div>
          </ArcherElement>
          <p>Opta por não enviar uma mensagem de texto personalizada</p>
        </div>

        <div className={styles.stepWrapper}>
          <img src={phone5} alt="Passo 5" />
          <ArcherElement
            id="step5"
            relations={[
              {
                targetId: "step6",
                sourceAnchor: "middle",
                targetAnchor: "middle",
                style: archerLineStyle,
              },
            ]}
          >
            <div className={styles.number}>5.</div>
          </ArcherElement>
          <p>Confirma doação com sua senha</p>
        </div>

        <div className={styles.stepWrapper}>
          <img src={phone6} alt="Passo 6" />
          <ArcherElement id="step6">
            <div className={styles.number}>6.</div>
          </ArcherElement>
          <p>Opta por compartilhar sua doação</p>
        </div>
      </div>
    </ArcherContainer>
  );
}

export default StepsImgFlow;
