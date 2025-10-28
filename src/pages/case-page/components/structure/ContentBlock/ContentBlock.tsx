import { CSSProperties } from "react";
import { ContentBlockProps } from "../../../../../interfaces/components";
import { normalizeMeasures } from "../../../../../utils/cssUtils";
import styles from "./contentblock.module.scss";

/**
 * ContentBlock - Componente para agrupar conteúdo relacionado dentro de Chapters
 * 
 * Este componente cria um bloco de conteúdo estruturado que pode conter
 * qualquer tipo de elemento: texto, imagens, vídeos, formulários, etc.
 * É usado dentro de Chapters para organizar o conteúdo de forma semântica.
 * 
 * @example
 * ```tsx
 * // Exemplo com TextContent
 * <ContentBlock>
 *   <TextContent 
 *     title="DESAFIO E OPORTUNIDADE"
 *     paragraphs={[
 *       "Identificamos que 68% dos clientes abandonavam o fluxo...",
 *       "Isso indicava uma oportunidade estratégica..."
 *     ]}
 *   />
 *   <FunilImg />
 * </ContentBlock>
 * 
 * // Exemplo com componente customizado
 * <ContentBlock>
 *   <div className="video-wrapper">
 *     <SuspensePhone />
 *     <PushNotificationVideo video={videoSrc} />
 *   </div>
 * </ContentBlock>
 * 
 * // Exemplo com ContentSection
 * <ContentBlock>
 *   <ContentSection title="MÉTRICAS E MELHORIAS">
 *     <p>Para avaliar o impacto da solução...</p>
 *     <ul>
 *       <li>Taxa de retorno: 12% para 28%</li>
 *       <li>Taxa de conversão: 4% para 7%</li>
 *     </ul>
 *   </ContentSection>
 * </ContentBlock>
 * 
 * // Com classe customizada
 * <ContentBlock className="special-content">
 *   <CustomComponent />
 * </ContentBlock>
 * 
 * // Com margin e gap personalizados
 * <ContentBlock customCss={{marginTop: "40", marginBottom: "20", gap: "30"}}>
 *   <TextContent title="Título" paragraphs={["Parágrafo"]} />
 *   <ImageComponent />
 * </ContentBlock>
 * 
 * // Com valores em rem
 * <ContentBlock customCss={{marginTop: "2rem", marginBottom: "1rem", gap: "1.5rem"}}>
 *   <Component1 />
 *   <Component2 />
 * </ContentBlock>
 * 
 * // Para vídeos e conteúdo de largura total
 * <ContentBlock fullWidth>
 *   <FluxogramaVideo />
 * </ContentBlock>
 * ```
 * 
 * @param children - Conteúdo a ser renderizado (componentes, texto, etc.)
 * @param className - Classe CSS adicional para customização
 * @param customCss - CSS customizado para margin, padding e gap (marginTop, marginBottom, paddingTop, paddingBottom, paddingLeft, gap). Propriedades só são aplicadas quando informadas.
 * @param fullWidth - Se true, ocupa 100% da largura (sem limitação de max-width). Padrão: false
 */
function ContentBlock({ children, className, customCss, fullWidth = false }: ContentBlockProps) {
  const styleOverrides: CSSProperties = {};

  if (customCss?.marginTop) {
    styleOverrides.marginTop = normalizeMeasures(customCss.marginTop);
  }

  if (customCss?.marginBottom) {
    styleOverrides.marginBottom = normalizeMeasures(customCss.marginBottom);
  }

  if (customCss?.gap) {
    styleOverrides.gap = normalizeMeasures(customCss.gap);
  }

  if (customCss?.paddingTop) {
    styleOverrides.paddingTop = normalizeMeasures(customCss.paddingTop);
  }

  if (customCss?.paddingBottom) {
    styleOverrides.paddingBottom = normalizeMeasures(customCss.paddingBottom);
  }

  if (customCss?.paddingLeft) {
    styleOverrides.paddingLeft = normalizeMeasures(customCss.paddingLeft);
  }

  return (
    <div
      className={`${styles.contentBlock} ${fullWidth ? styles.fullWidth : ""} ${className || ""}`}
      style={Object.keys(styleOverrides).length ? styleOverrides : undefined}
    >
      {children}
    </div>
  );
}

export default ContentBlock;
