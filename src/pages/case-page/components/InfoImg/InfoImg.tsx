import { useEffect, useRef, useState } from 'react';
import { InfoImgInterface } from '../../../../interfaces/case';
import styles from './infoimg.module.scss';

/**
 * @module InfoImg
 * @description Um componente React que exibe uma imagem com texto informativo na parte inferior.
 * O componente calcula a altura com base na altura natural da imagem carregada.
 * 
 * @example
 * // Uso básico
 * import InfoImg from './caminho/para/InfoImg';
 * 
 * function MeuComponente() {
 *   return (
 *     <InfoImg 
 *       img="/caminho/para/imagem.jpg" 
 *       info="Legenda ou descrição para a imagem" 
 *     />
 *   );
 * }
 */
/**
 * Componente InfoImg
 * 
 * @param img - URL ou caminho para a imagem a ser exibida
 * @param info - Texto informativo/legenda a ser exibido abaixo da imagem
 * @returns Componente renderizado
 */
function InfoImg({ img, info }: InfoImgInterface) {
    const imgRef = useRef<HTMLImageElement>(null);
    const [height, setHeight] = useState<number | null>(null);

    useEffect(() => {
        const image = imgRef.current;
        if (image && image.complete) {
            setHeight(image.naturalHeight);
        } else if (image) {
            image.onload = () => {
                setHeight(image.naturalHeight);
            };
        }
    }, [img]);


    return (
        <div
            className={styles.container}
            style={height ? { height: `${height * 1.2}px` } : undefined}
        >
            <img
                ref={imgRef}
                alt='imagem infográfica com informações no rodapé'
                src={img}
                className={styles.img}
            />
            <p className={styles.textInfo}>{info}</p>
        </div>
    )
}

export default InfoImg;
