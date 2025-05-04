import React from 'react';
import InfoImg from '../InfoImg/InfoImg';
import { InfoImgInterface } from '../../../../interfaces/case';
import styles from './griddynamic.module.scss';

interface GridDynamicProps {
    items: InfoImgInterface[];
    titles?: string[];
}

const GridDynamic: React.FC<GridDynamicProps> = ({ items, titles = [] }) => {
    return (
        <div className={`${styles.gridDynamic} ${styles[`columns${items.length}`]}`}>
            {items.map((item, index) => (
                <div key={index} className={styles.gridItem}>
                    <div className={styles.metricContent}>
                        {titles[index] && (
                            <h3 className={styles.bulletWhite}>{titles[index]}</h3>
                        )}
                        <InfoImg 
                            img={item.img} 
                            info={item.info}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GridDynamic;