import { useState } from "react";

type HoverProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

export function useHoverState(): [boolean, HoverProps] {
    const [isHovered, setIsHovered] = useState(false);

    const hoverProps: HoverProps = {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false)
    };

    return [isHovered, hoverProps];
}