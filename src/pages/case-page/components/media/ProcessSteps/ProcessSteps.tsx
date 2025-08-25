import styles from './processsteps.module.scss';

type ProcessStep = {
    number: number;
    image: string;
    alt: string;
    description?: string;
}

type ProcessStepsProps = {
    steps: ProcessStep[];
    centerImage?: {
        src: string;
        alt: string;
        className?: string;
    };
    className?: string;
}

/**
 * ProcessSteps - Componente genérico para exibir etapas de processo com imagens
 * 
 * Este componente renderiza uma visualização de etapas numeradas com imagens,
 * opcionalmente com uma imagem central. É flexível para diferentes tipos de
 * fluxos e processos.
 * 
 * @example
 * ```tsx
 * // Uso básico com etapas simples
 * <ProcessSteps 
 *   steps={[
 *     { number: 1, image: "/images/step1.png", alt: "Primeiro passo" },
 *     { number: 2, image: "/images/step2.png", alt: "Segundo passo" }
 *   ]}
 * />
 * 
 * // Com imagem central (como no FunilImg original)
 * <ProcessSteps 
 *   steps={[
 *     { number: 1, image: "/assets/caseBemol/funil1.png", alt: "Oferta de dinheiro" },
 *     { number: 2, image: "/assets/caseBemol/funil2.png", alt: "Menu navegável" },
 *     { number: 3, image: "/assets/caseBemol/funil3.png", alt: "Input de dados" },
 *     { number: 4, image: "/assets/caseBemol/funil4.png", alt: "Simulação" }
 *   ]}
 *   centerImage={{
 *     src: "/assets/caseBemol/mainFunil.png",
 *     alt: "Funil com resultados",
 *     className: "funilImg"
 *   }}
 * />
 * 
 * // Com descrições adicionais
 * <ProcessSteps 
 *   steps={[
 *     { 
 *       number: 1, 
 *       image: "/images/onboarding1.png", 
 *       alt: "Cadastro inicial",
 *       description: "Usuário inicia o cadastro"
 *     }
 *   ]}
 *   className="custom-process"
 * />
 * 
 * // Dentro de um ContentBlock
 * <ContentBlock>
 *   <TextContent 
 *     title="ANÁLISE DO FLUXO"
 *     paragraphs={["Visualização das etapas principais..."]}
 *   />
 *   <ProcessSteps steps={processSteps} centerImage={centralDiagram} />
 * </ContentBlock>
 * ```
 * 
 * @param steps - Array de etapas com número, imagem e descrição
 * @param centerImage - Imagem central opcional (como diagrama ou funil)
 * @param className - Classe CSS adicional para customização
 */
function ProcessSteps({ steps, centerImage, className }: ProcessStepsProps) {
    return (
        <div className={`${styles.container} ${className || ''}`}>
            {steps.map((step) => (
                <div key={step.number} className={styles.imgWrapper}>
                    <p>{step.number}</p>
                    <img 
                        alt={step.alt} 
                        src={step.image}
                        title={step.description}
                    />
                    {step.description && (
                        <span className={styles.description}>{step.description}</span>
                    )}
                </div>
            ))}
            
            {centerImage && (
                <img 
                    src={centerImage.src} 
                    alt={centerImage.alt}
                    className={centerImage.className || styles.centerImage}
                />
            )}
        </div>
    )
}

export default ProcessSteps;