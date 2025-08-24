import styles from './pagewrapper.module.scss';

export interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageWrapper - Container principal para páginas de cases
 * 
 * Este componente cria o container base para cases com scroll behavior
 * e estrutura flexível em coluna. Substitui a classe global 'page-container'.
 * 
 * @example
 * ```tsx
 * // Container de case
 * <PageWrapper>
 *   <PageHeader />
 *   <Chapter>...</Chapter>
 *   <CaseFooter />
 * </PageWrapper>
 * 
 * // Com classe customizada
 * <PageWrapper className="special-case">
 *   <CaseContent />
 * </PageWrapper>
 * ```
 * 
 * @param children - Conteúdo da página do case
 * @param className - Classe CSS adicional para customização
 */
function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <section className={`${styles.pageContainer} ${className || ""}`}>
      {children}
    </section>
  );
}

export default PageWrapper;