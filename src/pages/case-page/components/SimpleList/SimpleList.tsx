import { SimpleListProps } from '../../../../interfaces/components';
import styles from './simplelist.module.scss';

/**
 * SimpleList - Componente para exibir listas simples de itens
 * 
 * Este componente renderiza uma lista HTML (<ul>) com itens padronizados,
 * seguindo o mesmo padrão de layout dos outros componentes do projeto.
 * Ideal para listas de tópicos, etapas de processo ou itens informativos.
 * 
 * @example
 * ```tsx
 * // Lista de etapas de processo
 * <ContentSection title="PROCESSO DE DESIGN">
 *   <SimpleList 
 *     items={[
 *       "Identificação da dor",
 *       "Meu processo de design", 
 *       "Pesquisa e Benchmarking",
 *       "Coleta e análise de dados",
 *       "Design System (documentação técnica de novo componente)",
 *       "Teste com usuários",
 *       "Aprendizados"
 *     ]}
 *   />
 * </ContentSection>
 * 
 * // Lista de funcionalidades
 * <ContentSection title="FUNCIONALIDADES IMPLEMENTADAS">
 *   <SimpleList 
 *     items={[
 *       "Autenticação de usuários",
 *       "Dashboard interativo",
 *       "Relatórios automatizados",
 *       "Notificações em tempo real"
 *     ]}
 *   />
 * </ContentSection>
 * 
 * // Lista de benefícios
 * <ContentSection title="BENEFÍCIOS ALCANÇADOS">
 *   <SimpleList 
 *     items={[
 *       "Redução de 40% no tempo de processo",
 *       "Aumento de 25% na satisfação do usuário",
 *       "Eliminação de 80% dos erros manuais"
 *     ]}
 *   />
 * </ContentSection>
 * 
 * // Em ContentBlock estruturado
 * <ContentBlock>
 *   <ContentSection title="METODOLOGIA APLICADA">
 *     <SimpleList 
 *       items={[
 *         "Double Diamond adaptado",
 *         "Data-Driven Design",
 *         "Testes de usabilidade",
 *         "Iteração baseada em feedback"
 *       ]}
 *     />
 *   </ContentSection>
 * </ContentBlock>
 * ```
 * 
 * @param items - Array de strings com os itens da lista
 */
function SimpleList({ items }: SimpleListProps) {
    return (
        <div className={styles.listContainer}>
            <ul className={styles.list}>
                {items.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SimpleList;