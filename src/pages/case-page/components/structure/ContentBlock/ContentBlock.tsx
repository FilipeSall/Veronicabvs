import { ContentBlockProps } from "../../../../../interfaces/components";
import { normalizeGap } from "../../../../../utils/cssUtils";
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
 * // Com gap personalizado
 * <ContentBlock gap="40">
 *   <TextContent title="Título" paragraphs={["Parágrafo"]} />
 *   <ImageComponent />
 * </ContentBlock>
 * 
 * // Com gap em rem
 * <ContentBlock gap="2rem">
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
 * @param gap - Espaçamento entre elementos filhos. Números viram px automaticamente ("20" = 20px). Padrão: "20"
 * @param fullWidth - Se true, ocupa 100% da largura (sem limitação de max-width). Padrão: false
 */
function ContentBlock({ children, className, gap = "20", fullWidth = false }: ContentBlockProps) {
  return (
    <div 
      className={`${styles.contentBlock} ${fullWidth ? styles.fullWidth : ""} ${className || ""}`}
      style={{ gap: normalizeGap(gap) }}
    >
      {children}
    </div>
  );
}

export default ContentBlock;