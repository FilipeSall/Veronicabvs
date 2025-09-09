import React from "react";
import { useSmoothScroll } from "../../../../../hooks/useSmoothScrol";
import arrowUpBlue from "../../../../../assets/svgs/scrolTopBlue.svg";
import arrowUpRed from "../../../../../assets/svgs/scrollToTopRed.svg";
import arrowPink from "../../../../../assets/svgs/scrollToTopPink.svg";
import styles from "./ScrollToTop.module.scss";

type ArrowColor = "azul" | "vermelha" | "rosa";

interface ScrollToTopProps {
  targetId: string;
  arrowColor?: ArrowColor;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  targetId,
  arrowColor = "azul",
}) => {
  const scrollToElement = useSmoothScroll();

  const arrowImages: Record<ArrowColor, string> = {
    azul: arrowUpBlue,
    vermelha: arrowUpRed,
    rosa: arrowPink,
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement(targetId);
  };

  return (
    <a
      href={`#${targetId}`}
      className={styles.scrollupCase}
      onClick={handleClick}
    >
      <img src={arrowImages[arrowColor]} alt="Voltar ao topo" />
    </a>
  );
};

export default ScrollToTop;
