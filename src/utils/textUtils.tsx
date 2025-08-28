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

/**
 * convertLineBreaksToJSX - Converte quebras de linha (\n) em elementos <br />
 * 
 * Esta função analisa um texto ou ReactNode e converte todas as quebras de linha
 * em elementos <br /> React, mantendo a formatação visual do texto.
 * 
 * @example
 * ```tsx
 * // Texto com quebras de linha
 * convertLineBreaksToJSX("Linha 1\nLinha 2\nLinha 3")
 * // Retorna: [
 * //   <Fragment key={0}>Linha 1<br /></Fragment>,
 * //   <Fragment key={1}>Linha 2<br /></Fragment>, 
 * //   <Fragment key={2}>Linha 3</Fragment>
 * // ]
 * 
 * // ReactNode - retorna como está
 * convertLineBreaksToJSX(<span>Conteúdo JSX</span>)
 * // Retorna: <span>Conteúdo JSX</span>
 * ```
 * 
 * @param content - String com quebras de linha ou ReactNode
 * @returns Array de elementos React.Fragment com <br /> ou ReactNode original
 */
export function convertLineBreaksToJSX(content: string | React.ReactNode): React.ReactNode {
    if (typeof content === 'string') {
        return content.split('\n').map((line, index, array) => (
            <React.Fragment key={index}>
                {line}
                {index < array.length - 1 && <br />}
            </React.Fragment>
        ));
    }
    return content;
}