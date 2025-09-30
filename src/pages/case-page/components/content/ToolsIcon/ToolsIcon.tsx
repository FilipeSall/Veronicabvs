import { ToolsIconInterface } from "../../../../../interfaces/components";
import styles from "./toolsicon.module.scss";
import figmaIco from "../../../../../assets/ferramentas/figma.webp";
import asanaIco from "../../../../../assets/ferramentas/asana.webp";
import uxIco from "../../../../../assets/ferramentas/ux.webp";
import officeIco from "../../../../../assets/ferramentas/office.webp";
import adobeIco from "../../../../../assets/ferramentas/adobe.webp";
import jetBrainsico from "../../../../../assets/ferramentas/jetBrains.webp";
import logoAzulIco from "../../../../../assets/ferramentas/logoAzul.webp";
import dbIco from "../../../../../assets/ferramentas/db.webp";
import miroIco from "../../../../../assets/ferramentas/miro.webp";
import notionIco from "../../../../../assets/ferramentas/notion.webp";

/**
 * ToolsIcon - Componente para exibir ícones de ferramentas
 * 
 * Este componente renderiza ícones de ferramentas baseado em um valor string.
 * Suporta diversas ferramentas como Figma, Asana, Adobe, etc.
 * 
 * @example
 * ```tsx
 * // Ícone do Figma
 * <ToolsIcon value="figma" />
 * 
 * // Ícone do Adobe
 * <ToolsIcon value="adobe" />
 * 
 * // Em lista de ferramentas
 * {tools.map((tool, index) => (
 *   <ToolsIcon key={index} value={tool.value} />
 * ))}
 * 
 * // Ferramentas disponíveis
 * <ToolsIcon value="figma" />     // Figma
 * <ToolsIcon value="asana" />     // Asana
 * <ToolsIcon value="ux" />        // UX Tools
 * <ToolsIcon value="office" />    // Microsoft Office
 * <ToolsIcon value="adobe" />     // Adobe Suite
 * <ToolsIcon value="jetBrains" /> // JetBrains
 * <ToolsIcon value="logoAzul" />  // Logo Azul
 * <ToolsIcon value="db" />        // Database
 * <ToolsIcon value="miro" />      // Miro
 * <ToolsIcon value="notion" />    // Notion
 * ```
 * 
 * @param value - Nome da ferramenta (case-insensitive)
 */
function ToolsIcon({ value }: ToolsIconInterface) {
  const getIconSource = (iconValue: string): string => {
    const iconMap: Record<string, string> = {
      figma: figmaIco,
      asana: asanaIco,
      ux: uxIco,
      office: officeIco,
      adobe: adobeIco,
      jetBrains: jetBrainsico,
      logoAzul: logoAzulIco,
      db: dbIco,
      miro: miroIco,
      notion: notionIco,
    };

    return iconMap[iconValue.toLowerCase()];
  };

  const src = getIconSource(value);

  return <img className={styles.toolsIcon} src={src} alt={`${value} icon`} />;
}

export default ToolsIcon;
