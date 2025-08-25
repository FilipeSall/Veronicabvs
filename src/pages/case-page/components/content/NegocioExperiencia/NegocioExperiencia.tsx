import styles from './negocioexperiencia.module.scss';
import defaultB1img from '../../../../../assets/appBemol/B1.png';
import defaultB2img from '../../../../../assets/appBemol/B2.png';

type ComparisonItem = {
    number: number;
    title: string;
    description: string;
    image: string;
    alt: string;
    imagePosition: 'left' | 'right';
}

type NegocioExperienciaProps = {
    items?: ComparisonItem[];
    className?: string;
}

/**
 * NegocioExperiencia - Componente para comparar abordagens em layout alternado
 * 
 * Este componente renderiza itens de comparação em layout de duas colunas com
 * posicionamento alternado (texto-imagem, imagem-texto). Por padrão, mostra
 * a comparação Business First vs Experience First do App Bemol.
 * 
 * @example
 * ```tsx
 * // Uso padrão (App Bemol - Business vs Experience)
 * <NegocioExperiencia />
 * 
 * // Comparação customizada
 * <NegocioExperiencia 
 *   items={[
 *     {
 *       number: 1,
 *       title: "Abordagem A",
 *       description: "Descrição da primeira abordagem; Características específicas; Vantagens principais.",
 *       image: "/images/approach-a.png",
 *       alt: "Demonstração da abordagem A",
 *       imagePosition: "right"
 *     },
 *     {
 *       number: 2,
 *       title: "Abordagem B", 
 *       description: "Descrição da segunda abordagem; Características específicas; Vantagens principais.",
 *       image: "/images/approach-b.png",
 *       alt: "Demonstração da abordagem B",
 *       imagePosition: "left"
 *     }
 *   ]}
 * />
 * 
 * // Dentro de um ContentBlock
 * <ContentBlock>
 *   <TextContent 
 *     title="COMPARAÇÃO DE ABORDAGENS"
 *     paragraphs={["Análise das diferentes estratégias..."]}
 *   />
 *   <NegocioExperiencia items={customComparison} />
 * </ContentBlock>
 * ```
 * 
 * @param items - Array de itens para comparação (padrão: Business vs Experience)
 * @param className - Classe CSS adicional
 */
function NegocioExperiencia({ items, className }: NegocioExperienciaProps) {
    // Dados padrão do App Bemol
    const defaultItems: ComparisonItem[] = [
        {
            number: 1,
            title: "Business First",
            description: "Mensagem direta e objetiva;\nMenor carga cognitiva;\nRedução de fricção no fluxo;\nFoco em conversão rápida.",
            image: defaultB1img,
            alt: "Celular com notificação",
            imagePosition: "right"
        },
        {
            number: 2,
            title: "Experience First", 
            description: "Comunicação mais explicativa;\nInterface mais amigável (com ícones);\nFortalecimento da confiança;\nMaior percepção de valor para o usuário.",
            image: defaultB2img,
            alt: "Celular com notificação",
            imagePosition: "left"
        }
    ];

    const comparisonItems = items || defaultItems;

    return (
        <div className={`${styles.container} ${className || ''}`}>
            {comparisonItems.map((item, index) => (
                <div key={index} className={styles.contentWrapper}>
                    {item.imagePosition === 'left' ? (
                        <>
                            <img src={item.image} alt={item.alt} />
                            <div className={styles.textWrapper}>
                                <h4><span>{item.number}.</span> {item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.textWrapper}>
                                <h4><span>{item.number}.</span> {item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                            <img src={item.image} alt={item.alt} />
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export default NegocioExperiencia