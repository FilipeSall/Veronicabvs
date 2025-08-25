import styles from './carrossel.module.scss'
import useEmblaCarousel from 'embla-carousel-react';

import backBtnDefault from '../../../../../assets/svgs/Back - Carrossel.svg';
import nextBtnImgDefault from '../../../../../assets/svgs/Next - Carrossel.svg';
import { useCallback, useEffect, useState } from 'react';

type CarrosselProps = {
    slides: string[];
    backBtn?: string;
    nextBtn?: string;
    title: string;
    dotColor: string;
};

function Carrossel({ slides = [], backBtn = backBtnDefault, nextBtn = nextBtnImgDefault, title, dotColor }: CarrosselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [indice, setIndice] = useState<number>(0);

    const totalSlides = slides.length;

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setIndice(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on('select', onSelect);
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);


    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className={styles.carousel}>
            {/* Title */}
            <header className={styles.header}>
                <p className={styles.title}><span>{indice + 1}/{totalSlides} </span> - {title}</p>
                {/* DOTS */}
                <div className={styles.dots} style={{ '--dot-color': dotColor } as React.CSSProperties}>
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === indice ? styles.active : ''}`}
                            onClick={() => emblaApi?.scrollTo(i)}
                            aria-label={`Ir para slide ${i + 1}`}
                        />
                    ))}
                </div>
            </header>

            {/* Carrossel */}
            <div className={styles.viewport} ref={emblaRef}>
                <div className={styles.container}>
                    {slides.map((slide: string, i: number) => (
                        <div key={i} className={styles.slide}>
                            <img
                                src={slide}
                                alt={`Slide ${i + 1}`}
                                className={styles.image}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navegação com os botões */}
            <div className={styles.navWrapper}>
                <button className={styles.button} onClick={scrollPrev} aria-label="Slide anterior">
                    <img
                        src={backBtn}
                        alt="Seta para voltar um slide"
                    />
                </button>
                <button className={styles.button} onClick={scrollNext} aria-label="Próximo slide">
                    <img
                        src={nextBtn}
                        alt="Seta para avançar um slide"
                    />
                </button>
            </div>
        </div>
    )
}

export default Carrossel