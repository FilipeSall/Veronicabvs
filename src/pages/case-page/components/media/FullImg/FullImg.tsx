import styles from "./fullimg.module.scss";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type FullImgProps = {
  img: string;
  alt: string;
  optionalImg?: string;
  optionalAlt?: string;
};

function FullImg({ img, alt, optionalImg }: FullImgProps) {
  const [mainImageLoaded, setMainImageLoaded] = useState(false);

  return (
    <div className={styles.container}>
      {!mainImageLoaded && (
        <Skeleton
          height="400px"
          width="100%"
          className={styles.mainImgSkeleton}
          baseColor="#272727"
          highlightColor="#1d1d1d"
        />
      )}
      <img 
        src={img} 
        alt={alt} 
        className={`${styles.mainImg} ${mainImageLoaded ? styles.imageLoaded : styles.imageHidden}`}
        onLoad={() => setMainImageLoaded(true)}
      />
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
