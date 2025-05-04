import { useEffect, useRef, useState } from 'react';
import { InfoImgInterface } from '../../../../interfaces/case';
import styles from './infoimg.module.scss';

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
