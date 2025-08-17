import { ToolsIconInterface } from "../../../../interfaces/components";
import styles from "./toolsicon.module.scss";
import figmaIco from "../../../../assets/ferramentas/figma.webp";
import asanaIco from "../../../../assets/ferramentas/asana.webp";
import uxIco from "../../../../assets/ferramentas/ux.webp";
import officeIco from "../../../../assets/ferramentas/office.webp";
import adobeIco from "../../../../assets/ferramentas/adobe.webp";
import jetBrainsico from "../../../../assets/ferramentas/jetBrains.webp";
import logoAzulIco from "../../../../assets/ferramentas/logoAzul.webp";
import dbIco from "../../../../assets/ferramentas/db.webp";

function ToolsIcon({ value }: ToolsIconInterface) {
  const getIconSource = (iconValue: string) => {
    const iconMap: Record<string, string> = {
      figma: figmaIco,
      asana: asanaIco,
      ux: uxIco,
      office: officeIco,
      adobe: adobeIco,
      jetBrains: jetBrainsico,
      logoAzul: logoAzulIco,
      db: dbIco,
    };

    return iconMap[iconValue.toLowerCase()];
  };

  const src = getIconSource(value);

  return <img className={styles.toolsIcon} src={src} />;
}

export default ToolsIcon;
