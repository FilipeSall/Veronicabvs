export function hexToRgba(hex: string, alpha: number): string {
    let c = hex.trim();

    if (c.startsWith('#')) {
        c = c.substring(1);
    }

    if (c.length === 3) {
        c = c.split('').map((char) => char + char).join('');
    }

    if (c.length !== 6) {
        console.warn('Cor inválida:', hex);
        return `rgba(0,0,0,${alpha})`
    }

    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}