import { ChapterProps } from "../../../../../interfaces/components";
import { normalizeMeasures } from "../../../../../utils/cssUtils";
import CaseTitle from "../../content/CaseTitle/CaseTitle";
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
 * ```
 * 
 * @param id - Identificador único do chapter (usado para navegação)
 * @param title - Título opcional (usa CaseTitle legado se fornecido)
 * @param subtitle - Subtítulo opcional (apenas com title)
 * @param children - Conteúdo do chapter (ContentBlocks, etc.)
 * @param className - Classe CSS adicional para customização
 * @param customCss - CSS customizado para margin (marginTop, marginBottom). Valores padrão: marginTop: "40px", marginBottom: "40px"
 */
function Chapter({ id, title, subtitle, children, className, customCss }: ChapterProps) {
  const defaultCustomCss = {
    marginTop: "40px",
    marginBottom: "40px",
    ...customCss
  };

  return (
    <section 
      className={`${styles.chapter} ${className || ""}`} 
      id={id}
      style={{
        marginTop: normalizeMeasures(defaultCustomCss.marginTop),
        marginBottom: normalizeMeasures(defaultCustomCss.marginBottom)
      }}
    >
      {title && <CaseTitle title={title} subTitle={subtitle || ""} id={id} />}
      {children}
    </section>
  );
}

export default Chapter;
