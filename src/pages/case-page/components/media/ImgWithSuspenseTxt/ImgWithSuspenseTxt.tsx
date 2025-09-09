import styles from "./imgwithsuspensetxt.module.scss";
import impactImg from "../../../../../assets/melliuz/37img.webp";

function ImgWithSuspenseTxt() {
  return (
    <div className={styles.container}>
      <img
        src={impactImg}
        alt="Celular com vários entry points de exemplos"
        className={styles.img}
      />

      <div className={`${styles.suspenseTxt1} ${styles.suspenseTxt}`}>
        <h3>Entry Point na tela de extrato</h3>
        <p>
          Incorporação de um ícone intuitivo acima do saldo disponível, tornando
          a ação de doar mais acessível no momento em que o usuário está mais
          consciente de seu saldo; <br /> <br /> Potencializa a chance de
          conversão, pois o usuário já está envolvido com o dinheiro disponível.
        </p>
      </div>

      <div className={`${styles.suspenseTxt2} ${styles.suspenseTxt}`}>
        <h3>Entry Point no menu “Mais opções”</h3>
        <p>
          Adicionar a opção nesse menu aproveita o mindset do usuário, que já
          está explorando formas de obter benefícios com o cashback. Assim,
          reforça-se a ideia de que a doação também é uma maneira válida de
          usá-lo.
        </p>
      </div>
    </div>
  );
}

export default ImgWithSuspenseTxt;
