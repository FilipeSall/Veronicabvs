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
 * // Lista simples de strings (com setas - padrão)
 * <SimpleList
 *   items={[
 *     "Identificação da dor",
 *     "Meu processo de design",
 *     "Pesquisa e Benchmarking"
 *   ]}
 * />
 * 
 * // Lista com bullets
 * <SimpleList
 *   items={[
 *     "**Taxa de adesão** à Conta Bemol",
 *     "**Conversão** no fluxo de contratação",
 *     "**Fricção** no processo de reconhecimento"
 *   ]}
 *   listType="bullet"
 * />
 * 
 * // Lista com texto forte (branco)
 * <SimpleList
 *   items={[
 *     "Permitir ao usuário escolher o valor a doar",
 *     "Selecionar uma ONG parceira",
 *     "Opção de incluir uma mensagem opcional"
 *   ]}
 *   textColor="strong"
 * />
 * 
 * // Lista com JSX customizado e setas
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
 *   listType="arrow"
 *   textColor="weak"
 * />
 * ```
 *
 * @param items - Array de strings (com suporte a **negrito**) ou ReactNodes
 * @param listType - Tipo de marcador ('arrow' padrão ou 'bullet')
 * @param textColor - Cor do texto ('weak' padrão #bbbbbb ou 'strong' #ffffff)
 */
function SimpleList({ items, listType = 'arrow', textColor = 'weak' }: SimpleListProps) {
  return (
    <div className={styles.listContainer}>
      <ul className={`${styles.list} ${listType === 'bullet' ? styles.bulletList : ''}`}>
        {items.map((item, index) => (
          <li key={index} className={`${styles.listItem} ${styles[listType]} ${textColor === 'strong' ? styles.strong : ''}`}>
            {parseStringOrNode(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleList;
