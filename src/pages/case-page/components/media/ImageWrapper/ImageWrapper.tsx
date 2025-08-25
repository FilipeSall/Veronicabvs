import styles from './imagewrapper.module.scss';

export interface ImageWrapperProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * ImageWrapper - Container padronizado para imagens de seções
 * 
 * Este componente cria um wrapper centralizado para imagens que precisam
 * de posicionamento e espaçamento específicos em seções de cases.
 * Substitui a classe global 'subsection-img__wrapper'.
 * 
 * @example
 * ```tsx
 * // Imagem de seção padrão
 * <ImageWrapper 
 *   src={designSystemImg} 
 *   alt="Design System" 
 * />
 * 
 * // Com classe customizada
 * <ImageWrapper 
 *   src={screenshot} 
 *   alt="Interface"
 *   className="special-image" 
 * />
 * ```
 * 
 * @param src - URL da imagem
 * @param alt - Texto alternativo da imagem
 * @param className - Classe CSS adicional para customização
 */
function ImageWrapper({ src, alt, className }: ImageWrapperProps) {
  return (
    <div className={`${styles.imageWrapper} ${className || ""}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default ImageWrapper;