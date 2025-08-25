import React, { ReactNode } from 'react';
import './twocolumngrid.scss'

interface TwoColumnGridProps {
    leftContent: ReactNode;
    rightContent: ReactNode;
}

const TwoColumnGrid: React.FC<TwoColumnGridProps> = ({
    leftContent,
    rightContent
}) => {
    return (
        <div className="grid-container">
            <div className="grid-item">
                {leftContent}
            </div>
            <div className="grid-item">
                {rightContent}
            </div>
        </div>
    );
};

export default TwoColumnGrid;