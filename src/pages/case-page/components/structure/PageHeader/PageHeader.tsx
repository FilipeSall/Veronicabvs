import { ReactNode } from "react";
import { ToolsIconInterface } from "../../../../../interfaces/components";
import { hexToRgba } from "../../../../../utils/hexToRgba";
import { convertLineBreaksToJSX } from "../../../../../utils/textUtils";
import { normalizeMeasures } from "../../../../../utils/cssUtils";
import ToolsIcon from "../../content/ToolsIcon/ToolsIcon";
import styles from "./pageheader.module.scss";

type PageHeaderProps = {
  bgColor: string;
  contextTxt: string | ReactNode;
  headerId: string;
  tools: ToolsIconInterface[];
  /** CSS customizado para margin */
  customCss?: {
    marginTop?: string;
    marginBottom?: string;
  };
};

function PageHeader({ bgColor, contextTxt, tools, headerId, customCss }: PageHeaderProps) {
  const backgroundWithOpacity = hexToRgba(bgColor, 0.6);
  
  const defaultCustomCss = {
    marginTop: "0",
    marginBottom: "0",
    ...customCss
  };

  return (
    <header
      className={styles.pageHeaderContainer}
      id={headerId}
      style={{ 
        backgroundColor: backgroundWithOpacity,
        marginTop: normalizeMeasures(defaultCustomCss.marginTop),
        marginBottom: normalizeMeasures(defaultCustomCss.marginBottom)
      }}
    >
      <div className={styles.pageHeaderContent}>
        <div className={styles.headerDescription}>
          <p className={styles.headerDescriptionTitle}>Contexto</p>
          <p className={styles.headerDescriptionContextTxt}>
            {convertLineBreaksToJSX(contextTxt)}
          </p>
        </div>

        <div className={styles.toolsContainer}>
          <p className={styles.toolsText}>Ferramentas</p>
          <div className={styles.toolsWrapper}>
            {tools.map((tool, i) => (
              <ToolsIcon key={i} value={tool.value} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
