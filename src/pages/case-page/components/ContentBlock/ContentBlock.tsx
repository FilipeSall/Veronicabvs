import { ContentBlockProps } from "../../../../interfaces/components";
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
 * // Exemplo com ContentSection
 * <ContentBlock>
 *   <ContentSection 
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
 * // Exemplo com ContentWrapper
 * <ContentBlock>
 *   <ContentWrapper title="MÉTRICAS E MELHORIAS">
 *     <p>Para avaliar o impacto da solução...</p>
 *     <ul>
 *       <li>Taxa de retorno: 12% para 28%</li>
 *       <li>Taxa de conversão: 4% para 7%</li>
 *     </ul>
 *   </ContentWrapper>
 * </ContentBlock>
 * 
 * // Com classe customizada
 * <ContentBlock className="special-content">
 *   <CustomComponent />
 * </ContentBlock>
 * ```
 * 
 * @param children - Conteúdo a ser renderizado (componentes, texto, etc.)
 * @param className - Classe CSS adicional para customização
 */
function ContentBlock({ children, className }: ContentBlockProps) {
  return (
    <div className={`${styles.contentBlock} ${className || ""}`}>
      {children}
    </div>
  );
}

export default ContentBlock;