import { ContentWrapperProps } from "../../../../interfaces/components";
import styles from "./contentwrapper.module.scss";

/**
 * ContentWrapper - Componente para envolver conteúdo estruturado com título
 * 
 * Este componente cria um container padronizado para conteúdo que inclui
 * um título e qualquer tipo de conteúdo filho (texto, listas, etc.).
 * É ideal para seções como "Métricas e Melhorias", "Resultados", etc.
 * 
 * @example
 * ```tsx
 * // Exemplo com lista de métricas
 * <ContentWrapper title="MÉTRICAS E MELHORIAS">
 *   <p>Para avaliar o impacto da solução, foram analisadas:</p>
 *   <ul>
 *     <li><span>Taxa de retorno</span> ao fluxo (aumento de 12% para 28%)</li>
 *     <li><span>Taxa de conversão</span> em empréstimos (aumento de 4% para 7%)</li>
 *   </ul>
 *   <p>Além disso, tivemos apoio do time de marketing.</p>
 * </ContentWrapper>
 * 
 * // Exemplo com conteúdo simples
 * <ContentWrapper title="RESULTADOS">
 *   <p>O projeto resultou em melhorias significativas na experiência do usuário.</p>
 * </ContentWrapper>
 * 
 * // Com classe customizada
 * <ContentWrapper title="ANÁLISE" className="custom-analysis">
 *   <p>Dados da análise detalhada...</p>
 * </ContentWrapper>
 * ```
 * 
 * @param title - Título da seção (ex: "MÉTRICAS E MELHORIAS")
 * @param children - Conteúdo a ser renderizado (parágrafos, listas, etc.)
 * @param className - Classe CSS adicional para customização
 */
function ContentWrapper({ title, children, className }: ContentWrapperProps) {
  return (
    <div className={`${styles.contentContainer} ${className || ""}`}>
      <div>
        <h3 className={styles.contentTitle}>{title}</h3>
        <div className={styles.contentBody}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContentWrapper;