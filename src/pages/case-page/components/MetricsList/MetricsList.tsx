import { MetricsListProps } from '../../../../interfaces/components';
import styles from './metricslist.module.scss';

/**
 * MetricsList - Componente para exibir listas de métricas com header e footer
 * 
 * Este componente renderiza uma estrutura padronizada para apresentação de métricas,
 * incluindo texto introdutório (header), lista de itens com labels destacados,
 * e texto de conclusão opcional (footer). Suporta spans para destacar valores.
 * 
 * @example
 * ```tsx
 * // Exemplo básico com texto simples
 * <MetricsList
 *   headerText="Para avaliar o impacto da solução, foram analisadas:"
 *   items={[
 *     { label: "Taxa de conversão", value: "aumento de 4% para 7%" },
 *     { label: "Taxa de retorno", value: "aumento de 12% para 28%" }
 *   ]}
 *   footerText="Além disso, tivemos apoio do time de marketing."
 * />
 * 
 * // Exemplo com spans para destacar valores específicos
 * <MetricsList
 *   headerText="Métricas estratégicas nos primeiros 30 dias:"
 *   items={[
 *     { 
 *       label: "Taxa de retorno", 
 *       value: <>ao fluxo de contratação (<span>aumento de 12% para 28%</span>)</> 
 *     },
 *     { 
 *       label: "Taxa de conversão", 
 *       value: <>em empréstimos efetivados (<span>aumento de 4% para 7%</span>)</> 
 *     },
 *     { 
 *       label: "Taxa de engajamento", 
 *       value: <>com as notificações (<span>taxa de cliques em torno de 18%</span>)</> 
 *     }
 *   ]}
 *   footerText={<>Apoio do time de marketing nos ajustes na <span>copy</span> e no <span>timing</span>.</>}
 * />
 * 
 * // Exemplo sem footer
 * <MetricsList
 *   headerText="Principais indicadores identificados:"
 *   items={[
 *     { label: "Abandono do fluxo", value: "68% dos usuários" },
 *     { label: "Tempo médio", value: "3.2 minutos por sessão" }
 *   ]}
 * />
 * 
 * // Exemplo com ReactNode no footerText
 * <MetricsList
 *   headerText="Resultados obtidos:"
 *   items={[
 *     { label: "Aumento na conversão", value: "significativo" }
 *   ]}
 *   footerText={
 *     <div>
 *       <p>Próximos passos:</p>
 *       <span>Monitoramento contínuo das métricas</span>
 *     </div>
 *   }
 * />
 * ```
 * 
 * @param headerText - Texto introdutório que contextualiza as métricas
 * @param items - Array de objetos com label (string) e value (string | ReactNode)
 * @param footerText - Texto opcional de conclusão ou observações (string | ReactNode)
 */
function MetricsList({ headerText, items, footerText }: MetricsListProps) {
    return (
        <div className={styles.metricsContainer}>
            <p className={styles.headerText}>{headerText}</p>
            <ul className={styles.metricsList}>
                {items.map((item, index) => (
                    <li key={index}>
                        <span className={styles.label}>{item.label}</span> {item.value}
                    </li>
                ))}
            </ul>
            {footerText && <p className={styles.footerText}>{footerText}</p>}
        </div>
    );
}

export default MetricsList;