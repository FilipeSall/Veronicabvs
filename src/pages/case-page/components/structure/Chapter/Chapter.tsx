import { CSSProperties } from "react";
import { ChapterProps } from "../../../../../interfaces/components";
import { normalizeMeasures } from "../../../../../utils/cssUtils";
import styles from "./chapter.module.scss";

/**
 * Chapter - Componente principal para organizar seções de cases
 *
 * Este componente cria uma seção estruturada para cases, incluindo
 * alternância automática de cores de fundo e suporte a títulos opcionais.
 * É o container principal que agrupa ContentBlocks relacionados.
 *
 * @example
 * ```tsx
 * // Exemplo básico sem título (manual)
 * <Chapter id="chapter-1-1">
 *   <CaseTitleHeader
 *     id="1.1"
 *     title="Resgatando clientes no fluxo de empréstimo"
 *     subtitle="Apoio: Equipe de Marketing"
 *   />
 *   <ContentBlock>
 *     <TextContent title="DESAFIO" paragraphs={["Texto do desafio..."]} />
 *   </ContentBlock>
 * </Chapter>
 *
 * // Exemplo com título automático (via props - legado)
 * <Chapter
 *   id="chapter-1-2"
 *   title="Outras entregas"
 *   subtitle="Fluxogramas completos"
 * >
 *   <ContentBlock>
 *     <p>Conteúdo da seção...</p>
 *   </ContentBlock>
 * </Chapter>
 *
 * // Com classe customizada
 * <Chapter id="chapter-1-3" className="special-chapter">
 *   <ContentBlock>
 *     <h3>Conteúdo especial</h3>
 *   </ContentBlock>
 * </Chapter>
 *
 * // Com cor de fundo forçada (sobrescreve alternância)
 * <Chapter id="chapter-4-3" forceBackgroundColor="#272727">
 *   <ContentBlock>
 *     <p>Este chapter terá sempre fundo #272727</p>
 *   </ContentBlock>
 * </Chapter>
 * ```
 *
 * @param id - Identificador único do chapter (usado para navegação)
 * @param title - (Legado) Sem efeito; preferir CaseTitleHeader
 * @param subtitle - (Legado) Sem efeito; preferir CaseTitleHeader
 * @param children - Conteúdo do chapter (ContentBlocks, etc.)
 * @param className - Classe CSS adicional para customização
 * @param customCss - CSS customizado para margin, padding e gap (marginTop, marginBottom, paddingTop, paddingBottom, paddingLeft, gap). Propriedades só são aplicadas quando informadas.
 * @param forceBackgroundColor - Força uma cor de fundo específica, sobrescrevendo a alternância automática
 */
function Chapter({ id, children, className, customCss, forceBackgroundColor }: ChapterProps) {
  const sectionStyle: CSSProperties = {};

  if (customCss?.marginTop) {
    sectionStyle.marginTop = normalizeMeasures(customCss.marginTop);
  }

  if (customCss?.marginBottom) {
    sectionStyle.marginBottom = normalizeMeasures(customCss.marginBottom);
  }

  if (customCss?.paddingTop) {
    sectionStyle.paddingTop = normalizeMeasures(customCss.paddingTop);
  }

  if (customCss?.paddingBottom) {
    sectionStyle.paddingBottom = normalizeMeasures(customCss.paddingBottom);
  }

  if (customCss?.paddingLeft) {
    sectionStyle.paddingLeft = normalizeMeasures(customCss.paddingLeft);
  }

  if (customCss?.gap) {
    sectionStyle.gap = normalizeMeasures(customCss.gap);
  }

  if (forceBackgroundColor) {
    sectionStyle.backgroundColor = forceBackgroundColor;
  }

  return (
    <section
      className={`${styles.chapter} ${className || ""}`}
      id={id}
      style={Object.keys(sectionStyle).length ? sectionStyle : undefined}
    >
      {children}
    </section>
  );
}

export default Chapter;
