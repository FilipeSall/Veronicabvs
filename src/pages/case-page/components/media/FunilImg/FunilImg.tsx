import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './funilimg.module.scss';
import funil1img from '../../../../../assets/caseBemol/funil1.png';
import funil2img from '../../../../../assets/caseBemol/funil2.png';
import funil3img from '../../../../../assets/caseBemol/funil3.png';
import funil4img from '../../../../../assets/caseBemol/funil4.png';
import mainFunil from '../../../../../assets/caseBemol/mainFunil.png';
import backBtnDefault from '../../../../../assets/svgs/Back - Carrossel.svg';
import nextBtnImgDefault from '../../../../../assets/svgs/Next - Carrossel.svg';

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
 *   <TextContent 
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
    const slides = [funil1img, funil2img, funil3img, funil4img];
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentIndex(emblaApi.selectedScrollSnap());
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
        <div className={styles.wrapper}>
            <div className={styles.desktopContainer}>
                <div className={styles.imgWrapper}>
                    <p>1</p>
                    <img alt="imagem com dinheiro" src={funil1img} />
                </div>

                <div className={styles.imgWrapper}>
                    <p>2</p>
                    <img alt="imagem com menu mavegavel" src={funil2img} />
                </div>

                <img src={mainFunil} alt="funil com os resultados" className={styles.funilImg} />

                <div className={styles.imgWrapper}>
                    <p>3</p>
                    <img alt="imagem com input" src={funil3img} />
                </div>

                <div className={styles.imgWrapper}>
                    <p>4</p>
                    <img alt="imagem com simulacao de emprestimo" src={funil4img} />
                </div>
            </div>

            <div className={styles.mobileContainer}>
                <img src={mainFunil} alt="funil com os resultados" className={styles.funilImg} />

                <div className={styles.mobileCarousel}>
                    <p className={styles.stepText}>
                        Step {currentIndex + 1}/{slides.length}
                    </p>

                    <div className={styles.viewport} ref={emblaRef}>
                        <div className={styles.carouselContainer}>
                            {slides.map((slide, index) => (
                                <div key={slide} className={styles.slide}>
                                    <img
                                        src={slide}
                                        alt={`Step ${index + 1}`}
                                        className={styles.slideImage}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={`${styles.arrowButton} ${styles.prevButton}`}
                        onClick={scrollPrev}
                        aria-label="Slide anterior"
                        type="button"
                    >
                        <img src={backBtnDefault} alt="Seta para voltar um slide" />
                    </button>
                    <button
                        className={`${styles.arrowButton} ${styles.nextButton}`}
                        onClick={scrollNext}
                        aria-label="Proximo slide"
                        type="button"
                    >
                        <img src={nextBtnImgDefault} alt="Seta para avancar um slide" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FunilImg
