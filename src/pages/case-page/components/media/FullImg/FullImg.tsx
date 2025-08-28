import styles from "./fullimg.module.scss";

type FullImgProps = {
  img: string;
  alt: string;
  optionalImg?: string;
  optionalAlt?: string;
};

function FullImg({ img, alt, optionalImg }: FullImgProps) {
  return (
    <div className={styles.container}>
      <img src={img} alt={alt} className={styles.mainImg} />
      {optionalImg && (
        <img
          src={optionalImg}
          alt={optionalImg ?? ""}
          className={styles.optionalImg}
        />
      )}
    </div>
  );
}

export default FullImg;
