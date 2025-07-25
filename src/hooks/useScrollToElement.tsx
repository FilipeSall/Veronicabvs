import { useEffect } from 'react';

interface ScrollOptions {
    /**
     * Se true, faz scroll suave. Se false, scroll instantâneo
     * @default true
     */
    smooth?: boolean;
    /**
     * Alinhamento vertical do elemento na viewport
     * @default 'start'
     */
    block?: ScrollLogicalPosition;
    /**
     * Alinhamento horizontal do elemento na viewport
     * @default 'nearest'
     */
    inline?: ScrollLogicalPosition;
    /**
     * Delay em milissegundos antes de executar o scroll
     * @default 0
     */
    delay?: number;
}

/**
 * Custom hook que faz scroll automático para um elemento específico
 * sempre que o componente é renderizado
 * 
 * @param elementId - ID do elemento HTML para fazer scroll
 * @param options - Opções de configuração do scroll
 * 
 * @example
 * ```tsx
 * // Uso básico
 * useScrollToElement('meu-id');
 * 
 * // Com opções personalizadas
 * useScrollToElement('meu-id', { 
 *   smooth: true, 
 *   block: 'center',
 *   delay: 200 
 * });
 * ```
 */
export const useScrollToElement = (
    elementId: string | null | undefined,
    options: ScrollOptions = {}
): void => {
    const {
        smooth = true,
        block = 'start',
        inline = 'nearest',
        delay = 0
    } = options;

    useEffect(() => {
        if (!elementId) return;

        const scrollToElement = (): void => {
            const element = document.getElementById(elementId);

            if (element) {
                element.scrollIntoView({
                    behavior: smooth ? 'smooth' : 'auto',
                    block,
                    inline
                });
            } else {
                console.warn(`Elemento com ID "${elementId}" não encontrado`);
            }
        };

        if (delay > 0) {
            const timeoutId = setTimeout(scrollToElement, delay);
            return () => clearTimeout(timeoutId);
        } else {
            scrollToElement();
        }
    }, [elementId, smooth, block, inline, delay]);
};