import { ReactNode } from "react";

export interface MetricsListProps {
  /** Texto do cabeçalho das métricas */
  headerText: string | ReactNode;
  /** Lista de itens de métricas */
  items: Array<{
    /** Rótulo da métrica */
    label: string | ReactNode;
    /** Valor da métrica */
    value: string | ReactNode;
  }>;
  /** Texto do rodapé das métricas */
  footerText?: string | ReactNode;
}

export interface SimpleListProps {
  /** Lista de itens */
  items: (string | ReactNode)[];
}