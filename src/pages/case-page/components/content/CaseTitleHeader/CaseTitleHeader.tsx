import { CSSProperties } from "react";
import { CaseTitleHeaderProps, CommonCustomCss } from "../../../../../interfaces/components";
import { normalizeMeasures } from "../../../../../utils/cssUtils";
import styles from "./casetitleheader.module.scss";

/**
 * CaseTitleHeader - Componente para exibir títulos de seções de cases
 *
 * Este componente cria um cabeçalho padronizado para seções de cases,
 * incluindo ID, título e subtítulo opcional com diferentes variantes.
 *
 * @example
 * ```tsx
 * // Subtítulo padrão (curto/informativo)
 * <CaseTitleHeader
 *   id="1.1"
 *   title="Resgatando clientes no fluxo de empréstimo"
 *   subtitle="Apoio: Equipe de Marketing e equipe de Dados."
 * />
 *
 * // Subtítulo em formato de parágrafo (texto longo)
 * <CaseTitleHeader
 *   id="1.3"
 *   title="Outras entregas"
 *   subtitle="Todas as propostas foram guiadas pela abordagem de Data-Driven Design..."
 *   subtitleVariant="paragraph"
 * />
 *
 * // Com subtítulo em cor padrão (#bbb)
 * <CaseTitleHeader
 *   id="1.2"
 *   title="Outras entregas"
 *   subtitle="Fluxogramas completos do produto"
 *   subtitleWhite={false}
 * />
 *
 * // Sem subtítulo
 * <CaseTitleHeader
 *   id="1.4"
 *   title="Análise de resultados"
 * />
 * ```
 *
 * @param id - Identificador da seção (ex: "1.1", "1.2")
 * @param title - Título principal da seção
 * @param subtitle - Subtítulo opcional com informações adicionais
 * @param subtitleVariant - Estilo do subtítulo: 'default' (curto) ou 'paragraph' (longo)
 * @param subtitleWhite - Se true, aplica cor branca no subtítulo. Se false, usa cor padrão (#bbb)
 * @param className - Classe CSS adicional para customização
 * @param customCss - CSS customizado para margin e padding (marginTop, marginBottom, paddingTop, paddingBottom, paddingLeft, gap). Propriedades só são aplicadas quando informadas. Se apenas paddingTop for informado, paddingBottom é ajustado para "0px".
 */
function CaseTitleHeader({
  id,
  title,
  subtitle,
  subtitleVariant = "default",
  subtitleWhite = true,
  className,
  customCss,
}: CaseTitleHeaderProps) {
  const normalizedCustomCss: CommonCustomCss = {};

  if (customCss?.marginTop) {
    normalizedCustomCss.marginTop = customCss.marginTop;
  }

  if (customCss?.marginBottom) {
    normalizedCustomCss.marginBottom = customCss.marginBottom;
  }

  if (customCss?.paddingLeft) {
    normalizedCustomCss.paddingLeft = customCss.paddingLeft;
  }

  if (customCss?.gap) {
    normalizedCustomCss.gap = customCss.gap;
  }

  const customPaddingTop = customCss?.paddingTop;
  const customPaddingBottom = customCss?.paddingBottom;

  if (customPaddingTop !== undefined) {
    normalizedCustomCss.paddingTop = customPaddingTop;
    if (customPaddingBottom === undefined) {
      normalizedCustomCss.paddingBottom = "0px";
    }
  }

  if (customPaddingBottom !== undefined) {
    normalizedCustomCss.paddingBottom = customPaddingBottom;
  }

  const wrapperStyle: CSSProperties = {};

  if (normalizedCustomCss.marginTop) {
    wrapperStyle.marginTop = normalizeMeasures(normalizedCustomCss.marginTop);
  }

  if (normalizedCustomCss.marginBottom) {
    wrapperStyle.marginBottom = normalizeMeasures(normalizedCustomCss.marginBottom);
  }

  const titleContainerStyle: CSSProperties = {};

  if (normalizedCustomCss.paddingTop) {
    titleContainerStyle.paddingTop = normalizeMeasures(normalizedCustomCss.paddingTop);
  }

  if (normalizedCustomCss.paddingBottom) {
    titleContainerStyle.paddingBottom = normalizeMeasures(normalizedCustomCss.paddingBottom);
  }

  if (normalizedCustomCss.paddingLeft) {
    titleContainerStyle.paddingLeft = normalizeMeasures(normalizedCustomCss.paddingLeft);
  }

  if (normalizedCustomCss.gap) {
    titleContainerStyle.gap = normalizeMeasures(normalizedCustomCss.gap);
  }

  return (
    <div 
      className={`${styles.caseTitleWrapper} ${className || ""}`}
      style={Object.keys(wrapperStyle).length ? wrapperStyle : undefined}
    >
      <div 
        className={styles.titleTextContainer}
        style={Object.keys(titleContainerStyle).length ? titleContainerStyle : undefined}
      >
        <h3 className={styles.strongWhite}>
          <span className={styles.idText}>{id}</span> {title}
        </h3>
        {subtitle && (
          <p
            className={`${styles.descriptionText} ${
              !subtitleWhite ? styles.grayText : ""
            } ${subtitleVariant === "paragraph" ? styles.paragraphStyle : ""}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export default CaseTitleHeader;
