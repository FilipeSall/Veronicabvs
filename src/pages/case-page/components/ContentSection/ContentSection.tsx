import { ContentSectionProps } from '../../../../interfaces/components';
import styles from './contentsection.module.scss';

/**
 * ContentSection - Componente genérico para seções de conteúdo complexo
 * 
 * Este componente cria um container padronizado para qualquer tipo de conteúdo,
 * incluindo um título e área flexível para children (componentes, HTML, etc.).
 * É ideal para seções que misturam diferentes tipos de componentes.
 * 
 * @example
 * ```tsx
 * // Exemplo com MetricsList
 * <ContentSection title="MÉTRICAS E MELHORIAS">
 *   <MetricsList 
 *     headerText="Para avaliar o impacto da solução:"
 *     items={[
 *       { label: "Taxa de conversão", value: "aumento de 4% para 7%" },
 *       { label: "Taxa de retorno", value: "aumento de 12% para 28%" }
 *     ]}
 *     footerText="Além disso, tivemos apoio do time de marketing."
 *   />
 * </ContentSection>
 * 
 * // Exemplo com componentes mistos
 * <ContentSection title="RESULTADOS">
 *   <p>O projeto resultou em melhorias significativas:</p>
 *   <CustomChart />
 *   <ImageGallery />
 *   <ul>
 *     <li>Aumento na conversão</li>
 *     <li>Redução no tempo de resposta</li>
 *   </ul>
 * </ContentSection>
 * 
 * // Exemplo com vídeo e texto
 * <ContentSection title="DEMONSTRAÇÃO">
 *   <p>Confira o resultado final:</p>
 *   <VideoPlayer src="demo.mp4" />
 *   <p>O fluxo ficou mais intuitivo e eficiente.</p>
 * </ContentSection>
 * 
 * // Exemplo com formulário
 * <ContentSection title="CONFIGURAÇÃO">
 *   <FormComponent />
 *   <SettingsPanel />
 * </ContentSection>
 * ```
 * 
 * @param title - Título da seção (ex: "MÉTRICAS E MELHORIAS", "RESULTADOS")
 * @param children - Conteúdo flexível (componentes, HTML, etc.)
 */
function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <div className={styles.contentContainer}>
      <div>
        <h3 className={styles.contentTitle}>{title}</h3>
        <div className={styles.contentBody}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContentSection;