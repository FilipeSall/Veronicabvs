/**
 * Adiciona 'px' ao valor se nenhuma unidade CSS for especificada
 *
 * @param gap - Valor do gap (número ou string com unidade)
 * @returns String com unidade CSS válida
 *
 * @example
 * normalizeGap("20") // "20px"
 * normalizeGap("1rem") // "1rem"
 * normalizeGap("auto") // "auto"
 */
export const normalizeGap = (gap: string): string => {
  // Se já tem unidade CSS (px, em, rem, %, vh, vw, etc.), retorna como está
  if (
    /^[\d.]+\s*(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc)$/i.test(gap)
  ) {
    return gap;
  }
  // Se é apenas número, adiciona 'px'
  if (/^[\d.]+$/.test(gap)) {
    return `${gap}px`;
  }
  // Caso contrário, retorna como está (para valores como 'auto', 'inherit', etc.)
  return gap;
};
