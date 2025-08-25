import styles from './imgwithtext.module.scss'

type ImgWithTextProps = {
    img: string,
    title: string,
    text?: string,
    description?: string,
    maxWidth?: string
}

/**
 * ImgWithText - Componente para exibir imagem com texto explicativo
 * 
 * Este componente renderiza uma combinação de texto e imagem com layout
 * responsivo. Ideal para apresentar capturas de tela, gráficos e
 * documentações visuais com contexto textual.
 * 
 * @example
 * ```tsx
 * // Exemplo básico
 * <ImgWithText 
 *   img="/assets/dashboard.png"
 *   title="ANÁLISE DO NPS"
 *   text="Dashboard completo do ano de 2023"
 *   description="Dados sensíveis censurados"
 * />
 * 
 * // Com largura customizada
 * <ImgWithText 
 *   img="/assets/chart.png"
 *   title="MÉTRICAS DE CANCELAMENTO"
 *   text="Apresentações mensais aos stakeholders"
 *   maxWidth="70"
 * />
 * 
 * // Apenas título e imagem
 * <ImgWithText 
 *   img="/assets/flow.png"
 *   title="FLUXOGRAMA DO PROCESSO"
 * />
 * 
 * // Em lista de entregas
 * {deliverables.map((item, index) => (
 *   <ImgWithText
 *     key={index}
 *     img={item.image}
 *     title={item.title}
 *     text={item.description}
 *     description="Confidencial"
 *     maxWidth="80"
 *   />
 * ))}
 * ```
 * 
 * @param img - URL da imagem a ser exibida
 * @param title - Título principal em maiúsculas
 * @param text - Texto explicativo opcional
 * @param description - Descrição adicional (ex: avisos, observações)
 * @param maxWidth - Largura máxima da imagem em porcentagem (padrão: "100")
 */
function ImgWithText({ img, title, description, text, maxWidth = "100" }: ImgWithTextProps) {
    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <h4 className={styles.title}>{title}</h4>
                {text && <p className={styles.text}>{text}</p>}
            </div>
            <div className={styles.imgWrapper}>
                <img src={img} alt={`Imagem mostrando ${title}`} className={styles.img} style={{ maxWidth: `${maxWidth}%` }} />
                {description && <p className={styles.descriptionText}>{description}</p>}
            </div>
        </div>
    )
}

export default ImgWithText