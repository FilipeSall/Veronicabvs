// hooks/useVideoInView.ts
import { useEffect, useRef, RefObject } from 'react';

interface UseVideoInViewOptions {
    threshold?: number;
    rootMargin?: string;
}

interface UseVideoInViewReturn {
    videoRef: RefObject<HTMLVideoElement | null>;
}

export function useVideoInView({
    threshold = 0.5,
    rootMargin = '0px'
}: UseVideoInViewOptions = {}): UseVideoInViewReturn {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        if (!('IntersectionObserver' in window)) {
            videoElement.play().catch(console.log);
            return;
        }

        const options = {
            root: null,
            rootMargin,
            threshold,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoElement.play().catch((error) => {
                        console.log("Erro ao reproduzir vídeo:", error);
                    });
                } else {
                    videoElement.pause();
                }
            });
        }, options);

        observer.observe(videoElement);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin]);

    return { videoRef };
}