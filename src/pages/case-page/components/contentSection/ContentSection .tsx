import React from 'react';
import { ContentSectionProps } from '../../../../interfaces/components';
import styles from './contentsection.module.scss';

/**
 * ContentSection - Componente para exibir seções de texto estruturado
 * 
 * Este componente renderiza uma seção com título e múltiplos parágrafos,
 * incluindo suporte para texto em negrito usando markdown (**texto**) e
 * controle de quebras de linha entre parágrafos.
 * 
 * @example
 * ```tsx
 * // Exemplo básico com texto em negrito
 * <ContentSection 
 *   title="DESAFIO E OPORTUNIDADE"
 *   paragraphs={[
 *     "Com o apoio da equipe de dados, identificamos que cerca de **68% dos clientes** abandonavam o fluxo...",
 *     "Esse comportamento indicava uma **oportunidade estratégica** para melhorar a experiência.",
 *     "A partir desta constatação, propus uma **régua de comunicação segmentada**."
 *   ]}
 * />
 * 
 * // Com quebras de linha customizadas
 * <ContentSection 
 *   title="PROCESSO"
 *   paragraphs={[
 *     "Para **aumentar a conversão** de clientes com crédito pré-aprovado...",
 *     "O conteúdo foi definido com apoio do **time de marketing**."
 *   ]}
 *   lineBreaks={3}
 * />
 * 
 * // Seção simples
 * <ContentSection 
 *   title="RESULTADOS"
 *   paragraphs={["O projeto resultou em melhorias significativas."]}
 * />
 * ```
 * 
 * @param title - Título da seção (ex: "DESAFIO E OPORTUNIDADE")
 * @param paragraphs - Array de strings com o conteúdo (suporta **negrito**)
 * @param lineBreaks - Número de quebras de linha entre parágrafos (padrão: 2)
 */
function ContentSection({ paragraphs, title, lineBreaks = 2 }: ContentSectionProps) {
    const parseText = (text: string) => {
        // Substitui **texto** por <span>texto</span>
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, index) =>
            index % 2 === 1 ? <span key={index}>{part}</span> : part
        );
    };

    const renderLineBreaks = () => {
        return Array.from({ length: lineBreaks }, (_, i) => <br key={i} />);
    };

    return (
        <div className={styles.contentContainer}>
            <div>
                <h3 className={styles.contentTitle}>{title}</h3>
                <p className={styles.contentText}>
                    {paragraphs.map((paragraph, index) => (
                        <React.Fragment key={index}>
                            {parseText(paragraph)}
                            {index < paragraphs.length - 1 && renderLineBreaks()}
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default ContentSection