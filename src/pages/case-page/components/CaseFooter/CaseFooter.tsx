import ScrollToTop from "../../../components/scroll-to-top/ScrollToTop";

export interface CaseFooterProps {
  text?: string;
  targetId: string;
  arrowColor?: 'azul' | 'vermelha';
}

/**
 * CaseFooter - Footer padrão para cases com texto de call-to-action e scroll to top
 * 
 * Este componente combina o texto de contato padrão dos cases com o botão
 * de scroll to top, mantendo a consistência visual e funcional.
 * 
 * @example
 * ```tsx
 * // Footer padrão (texto padrão)
 * <CaseFooter 
 *   targetId="header-bemol" 
 *   arrowColor="azul" 
 * />
 * 
 * // Footer com texto customizado
 * <CaseFooter 
 *   text="💡Gostou do projeto? Entre em contato!"
 *   targetId="header-appbemol" 
 *   arrowColor="vermelha" 
 * />
 * 
 * // Footer mínimo (apenas scroll)
 * <CaseFooter targetId="header-case" />
 * ```
 * 
 * @param text - Texto do call-to-action. Padrão: "💡Entre em contato e agende uma apresentação :)"
 * @param targetId - ID do elemento para o scroll to top (normalmente o header do case)
 * @param arrowColor - Cor da seta do scroll to top. Padrão: "azul"
 */
function CaseFooter({ 
  text = "💡Entre em contato e agende uma apresentação :)", 
  targetId, 
  arrowColor = "azul" 
}: CaseFooterProps) {
  return (
    <>
      <p className="footer-text">
        {text}
      </p>
      <ScrollToTop targetId={targetId} arrowColor={arrowColor} />
    </>
  );
}

export default CaseFooter;