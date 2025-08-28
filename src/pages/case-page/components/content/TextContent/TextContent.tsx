import React from 'react';
import { TextContentProps } from '../../../../../interfaces/components';
import { parseStringOrNode } from '../../../../../utils/textUtils';
import { normalizeMeasures } from '../../../../../utils/cssUtils';
import styles from './textcontent.module.scss';

/**
 * TextContent - Componente especializado para conteúdo de texto com formatação
 * 
 * Este componente renderiza seções de texto estruturado com título,
 * suporte automático para markdown (**negrito**) e controle de quebras de linha.
 * Aceita tanto strings quanto ReactNodes para máxima flexibilidade.
 * 
 * **Markdown Suportado:**
 * - `**texto**` → Converte automaticamente para `<span>texto</span>` em negrito
 * 
 * @example
 * ```tsx
 * // Exemplo básico com markdown **negrito**
 * <TextContent 
 *   title="DESAFIO E OPORTUNIDADE"
 *   paragraphs={[
 *     "Com o apoio da equipe de dados, identificamos que cerca de **68% dos clientes** abandonavam o fluxo...",
 *     "Esse comportamento indicava uma **oportunidade estratégica** para melhorar a experiência.",
 *     "A partir desta constatação, propus uma **régua de comunicação segmentada**."
 *   ]}
 * />
 * 
 * // Com ReactNode (spans manuais)
 * <TextContent 
 *   title="MÉTRICAS"
 *   paragraphs={[
 *     "Taxa de conversão aumentou de 4% para 7%",
 *     <>Taxa de retorno: <span>aumento de 12% para 28%</span></>
 *   ]}
 * />
 * 
 * // Misturando strings e ReactNodes
 * <TextContent 
 *   title="RESULTADOS"
 *   paragraphs={[
 *     "O projeto resultou em **melhorias significativas**:",
 *     <>Conversão: <span>+75% de aumento</span></>,
 *     "Além disso, a **experiência** foi aprimorada."
 *   ]}
 * />
 * 
 * // Com quebras de linha customizadas
 * <TextContent 
 *   title="PROCESSO"
 *   paragraphs={[
 *     "Para **aumentar a conversão** de clientes com crédito pré-aprovado...",
 *     "O conteúdo foi definido com apoio do **time de marketing**."
 *   ]}
 *   lineBreaks={3}
 * />
 * ```
 * 
 * @param title - Título da seção (ex: "DESAFIO E OPORTUNIDADE")
 * @param paragraphs - Array de strings (com **negrito**) ou ReactNodes
 * @param lineBreaks - Número de quebras de linha entre parágrafos (padrão: 2)
 */
function TextContent({ paragraphs, title, lineBreaks = 2, marginTop = "20" }: TextContentProps) {
    const renderLineBreaks = () => {
        return Array.from({ length: lineBreaks }, (_, i) => <br key={i} />);
    };

    return (
        <div 
            className={styles.contentContainer}
            style={{ marginTop: normalizeMeasures(marginTop) }}
        >
            <div>
                {title && <h3 className={styles.contentTitle}>{title}</h3>}
                <p className={styles.contentText}>
                    {paragraphs.map((paragraph, index) => (
                        <React.Fragment key={index}>
                            {parseStringOrNode(paragraph)}
                            {index < paragraphs.length - 1 && renderLineBreaks()}
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default TextContent