import { ContentSectionProps } from '../../../../../interfaces/components';
import { normalizeMeasures } from '../../../../../utils/cssUtils';
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
 * // Exemplo com subtítulo
 * <ContentSection 
 *   title="CÁLCULO E ANÁLISE DO NPS"
 *   subtitle="Da conta digital Conta Bemol, do ano de 2023."
 * >
 *   <ImgWithText img={chart} description="Dados sensíveis censurados." />
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
 * 
 * // Exemplo sem título (apenas conteúdo)
 * <ContentSection>
 *   <SimpleList 
 *     items={[
 *       "Identificação da dor",
 *       "Meu processo de design", 
 *       "Pesquisa e Benchmarking"
 *     ]}
 *   />
 * </ContentSection>
 * 
 * // Exemplo apenas com subtítulo
 * <ContentSection subtitle="Dados sensíveis censurados">
 *   <ImgWithText img={chart} />
 * </ContentSection>
 * ```
 * 
 * @param title - Título opcional da seção (ex: "MÉTRICAS E MELHORIAS", "RESULTADOS")
 * @param subtitle - Subtítulo opcional para contextualizar o conteúdo
 * @param children - Conteúdo flexível (componentes, HTML, etc.)
 * @param customCss - CSS customizado para margin (marginTop e marginBottom). Valores padrão: marginTop: "0", marginBottom: "0"
 */
function ContentSection({ title, subtitle, children, customCss }: ContentSectionProps) {
  const defaultCustomCss = {
    marginTop: "0",
    marginBottom: "0",
    ...customCss
  };

  return (
    <div 
      className={styles.contentContainer}
      style={{
        marginTop: normalizeMeasures(defaultCustomCss.marginTop),
        marginBottom: normalizeMeasures(defaultCustomCss.marginBottom)
      }}
    >
      <div>
        {(title || subtitle) && (
          <div className={styles.titleWrapper}>
            {title && <h3 className={styles.contentTitle}>{title}</h3>}
            {subtitle && <p className={styles.contentSubtitle}>{subtitle}</p>}
          </div>
        )}
        <div className={styles.contentBody}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContentSection;