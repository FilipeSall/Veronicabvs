/**
 * Adiciona 'px' ao valor se nenhuma unidade CSS for especificada
 *
 * @param value - Valor de medida (número ou string com unidade)
 * @returns String com unidade CSS válida
 *
 * @example
 * normalizeMeasures("20") // "20px"
 * normalizeMeasures("1rem") // "1rem"
 * normalizeMeasures("auto") // "auto"
 */
export const normalizeMeasures = (value: string): string => {
  // Se já tem unidade CSS (px, em, rem, %, vh, vw, etc.), retorna como está
  if (
    /^[\d.]+\s*(px|em|rem|%|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc)$/i.test(value)
  ) {
    return value;
  }
  // Se é apenas número, adiciona 'px'
  if (/^[\d.]+$/.test(value)) {
    return `${value}px`;
  }
  // Caso contrário, retorna como está (para valores como 'auto', 'inherit', etc.)
  return value;
};

// Mantém funções antigas para compatibilidade - serão removidas em versões futuras
export const normalizeGap = normalizeMeasures;
export const normalizeCssValue = normalizeMeasures;
export const normalizeSize = normalizeMeasures;
