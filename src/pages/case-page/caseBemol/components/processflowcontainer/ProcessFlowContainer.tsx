import styles from './processflowcontainer.module.scss';
import arrowWhite from '../../../../../assets/caseBemol/Polygonwhite.svg';

type ListInterface = {
    title: string;
    lists: string[];
}

type ProcessFlowContainerProps = {
    arrowColored: string;
    arrowImageAlt?: string;
    color: string;
    lists: ListInterface[];
}

function ProcessFlowContainer({ 
    arrowColored, 
    arrowImageAlt = "seta", 
    color, 
    lists 
}: ProcessFlowContainerProps) {
    return (
        <div className={styles.container}>
            <div className={styles.columnWrapper}>
                {lists.map((item, index) => {
                    // Alterna a direção das setas (índices pares ficam invertidos)
                    const isReversed = index % 2 === 0;
                    
                    // Primeiro e último itens são sempre brancos
                    const isFirstOrLast = index === 0 || index === lists.length - 1;
                    const currentColor = isFirstOrLast ? '#FFFFFF' : color;
                    const currentArrow = isFirstOrLast ? arrowWhite : arrowColored;
                    
                    return (
                        <div key={index} className={styles.column}>
                            <img 
                                src={currentArrow} 
                                alt={arrowImageAlt} 
                                className={`${styles.arrow} ${isReversed ? styles.reverse : ''}`} 
                            />
                            <p 
                                className={styles.title}
                                style={{ color: currentColor }}
                            >
                                {item.title}
                            </p>
                            <ul className={styles.list}>
                                {item.lists.map((listItem, listIndex) => (
                                    <li key={listIndex}>
                                        {listItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProcessFlowContainer;