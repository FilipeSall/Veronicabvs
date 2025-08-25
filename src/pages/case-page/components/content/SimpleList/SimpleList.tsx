import { SimpleListProps } from "../../../../../interfaces/components";
import { parseStringOrNode } from "../../../../../utils/textUtils";
import styles from "./simplelist.module.scss";

/**
 * SimpleList - Componente para exibir listas simples de itens
 *
 * Este componente renderiza uma lista HTML (<ul>) com itens padronizados,
 * seguindo o mesmo padrão de layout dos outros componentes do projeto.
 * Ideal para listas de tópicos, etapas de processo ou itens informativos.
 *
 * @example
 * ```tsx
 * // Lista simples de strings
 * <SimpleList
 *   items={[
 *     "Identificação da dor",
 *     "Meu processo de design",
 *     "Pesquisa e Benchmarking"
 *   ]}
 * />
 * 
 * // Lista com markdown **negrito**
 * <SimpleList
 *   items={[
 *     "**Taxa de adesão** à Conta Bemol",
 *     "**Conversão** no fluxo de contratação",
 *     "**Fricção** no processo de reconhecimento"
 *   ]}
 * />
 * 
 * // Lista com JSX customizado
 * <SimpleList
 *   items={[
 *     <>
 *       <span>Experiência fragmentada</span> e pouco intuitiva
 *     </>,
 *     <>
 *       <span>Falta de clareza</span> na exibição das informações
 *     </>,
 *     <>
 *       <span>Etapas desnecessárias</span> ou confusas
 *     </>
 *   ]}
 * />
 * 
 * // Misturando tipos
 * <SimpleList
 *   items={[
 *     "Texto simples",
 *     "Texto com **destaque**",
 *     <><strong>JSX customizado</strong> com formatação</>
 *   ]}
 * />
 * ```
 *
 * @param items - Array de strings (com suporte a **negrito**) ou ReactNodes
 */
function SimpleList({ items }: SimpleListProps) {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {parseStringOrNode(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleList;
