import React from 'react';

/**
 * parseTextWithBold - Função utilitária para converter markdown **negrito** em spans
 * 
 * Esta função analisa um texto e converte todas as ocorrências de **texto** 
 * em elementos <span> React, mantendo o restante do texto como string.
 * 
 * @example
 * ```tsx
 * // Texto simples
 * parseTextWithBold("Texto normal")
 * // Retorna: ["Texto normal"]
 * 
 * // Com negrito
 * parseTextWithBold("Texto com **destaque** aqui")
 * // Retorna: ["Texto com ", <span key={1}>destaque</span>, " aqui"]
 * 
 * // Múltiplos negritos
 * parseTextWithBold("**Primeiro** e **segundo** destaques")
 * // Retorna: [<span key={1}>Primeiro</span>, " e ", <span key={3}>segundo</span>, " destaques"]
 * ```
 * 
 * @param text - String contendo markdown **negrito**
 * @returns Array de strings e elementos React <span>
 */
export function parseTextWithBold(text: string): (string | React.ReactElement)[] {
    // Divide o texto usando regex que captura o conteúdo entre **
    const parts = text.split(/\*\*(.*?)\*\*/g);
    
    return parts.map((part, index) => {
        // Índices ímpares são os conteúdos entre **
        if (index % 2 === 1) {
            return <span key={index}>{part}</span>;
        }
        return part;
    });
}

/**
 * parseStringOrNode - Aplica parseTextWithBold apenas se o valor for string
 * 
 * Esta função verifica se o valor é string ou ReactNode. Se for string,
 * aplica a conversão de **negrito**. Se for ReactNode, retorna como está.
 * 
 * @example
 * ```tsx
 * // String - aplica parsing
 * parseStringOrNode("Texto com **negrito**")
 * 
 * // ReactNode - retorna como está
 * parseStringOrNode(<span>Conteúdo customizado</span>)
 * ```
 * 
 * @param value - String ou ReactNode
 * @returns Array de elementos React ou ReactNode original
 */
export function parseStringOrNode(value: string | React.ReactNode): React.ReactNode {
    if (typeof value === 'string') {
        return parseTextWithBold(value);
    }
    return value;
}