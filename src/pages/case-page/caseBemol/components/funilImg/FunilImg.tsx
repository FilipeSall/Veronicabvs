import styles from './funilimg.module.scss';
import funil1img from '../../../../../assets/caseBemol/funil1.png'
import funil2img from '../../../../../assets/caseBemol/funil2.png'
import funil3img from '../../../../../assets/caseBemol/funil3.png'
import funil4img from '../../../../../assets/caseBemol/funil4.png'
import mainFunil from '../../../../../assets/caseBemol/mainFunil.png'

/**
 * FunilImg - Componente para exibir o funil de conversão com etapas visuais
 * 
 * Este componente renderiza um funil de conversão interativo mostrando
 * as 4 etapas principais do fluxo de empréstimo, com imagens ilustrativas
 * e numeração sequencial para facilitar a compreensão.
 * 
 * @example
 * ```tsx
 * // Uso simples
 * <FunilImg />
 * 
 * // Dentro de um ContentBlock
 * <ContentBlock>
 *   <ContentSection 
 *     title="ANÁLISE DO FUNIL"
 *     paragraphs={["Visualização das etapas de abandono..."]}
 *   />
 *   <FunilImg />
 * </ContentBlock>
 * ```
 * 
 * Etapas do funil:
 * 1. Oferta de dinheiro (entrada no fluxo)
 * 2. Menu navegável (exploração)
 * 3. Input de dados (preenchimento)
 * 4. Simulação de empréstimo (finalização)
 */
function FunilImg() {
    return (
        <div className={styles.container}>
            <div className={styles.imgWrapper}>
                <p>1</p>
                <img alt='imagem com dinheiro' src={funil1img} />
            </div>

            <div className={styles.imgWrapper}>
                <p>2</p>
                <img alt='imagem com menu mavegável' src={funil2img} />
            </div>

            <img src={mainFunil} alt="funil com os resultados" className="funilImg" />

            <div className={styles.imgWrapper}>
                <p>3</p>
                <img alt='imagem com input' src={funil3img} />
            </div>

            <div className={styles.imgWrapper}>
                <p>4</p>
                <img alt='imagem com simulação de empréstimo' src={funil4img} />
            </div>
        </div>
    )
}

export default FunilImg