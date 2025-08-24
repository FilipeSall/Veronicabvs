import styles from './suspenseimg.module.scss';

export interface SuspenseImgProps {
  src: string;
  alt?: string;
  text?: string;
  className?: string;
}

/**
 * SuspenseImg - Componente para exibir imagens contextuais com texto explicativo
 * 
 * Este componente renderiza uma imagem com texto explicativo opcional
 * para contextualizar demonstrações e funcionalidades. Usado como
 * elemento de apoio visual em apresentações de UX/UI.
 * 
 * @example
 * ```tsx
 * // Uso básico com imagem de telefone
 * <SuspenseImg 
 *   src={phoneImg} 
 *   alt="telefone" 
 *   text="Funil de contratação: Step 2" 
 * />
 * 
 * // Uso com tablet
 * <SuspenseImg 
 *   src={tabletImg} 
 *   alt="tablet" 
 *   text="Interface desktop" 
 * />
 * 
 * // Sem texto explicativo
 * <SuspenseImg src={deviceImg} alt="dispositivo" />
 * 
 * // Em conjunto com vídeos
 * <div className="demo-wrapper">
 *   <SuspenseImg src={phoneImg} text="Demonstração mobile" />
 *   <div className="videos">
 *     <VideoGallery videos={notifications} />
 *   </div>
 * </div>
 * 
 * // Com classe customizada
 * <SuspenseImg 
 *   src={phoneImg} 
 *   className="custom-spacing"
 *   text="Contexto especial" 
 * />
 * ```
 * 
 * @param src - Caminho da imagem a ser exibida
 * @param alt - Texto alternativo para a imagem (padrão: "imagem")
 * @param text - Texto explicativo opcional abaixo da imagem
 * @param className - Classe CSS adicional para customização
 */
function SuspenseImg({ src, alt = "imagem", text, className }: SuspenseImgProps) {
    return (
        <div className={`${styles.suspenseImgContainer} ${className || ""}`}>
            <img
                src={src}
                className={styles.suspenseImg}
                alt={alt}
            />
            {text && (
                <p className={styles.suspenseText}>{text}</p>
            )}
        </div>
    )
}

export default SuspenseImg