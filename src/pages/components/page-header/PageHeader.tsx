import { ToolsIconInterface } from '../../../interfaces/components';
import { hexToRgba } from '../../../utils/hexToRgba';
import ToolsIcon from '../../case-page/components/ToolsIcon/ToolsIcon';
import styles from './pageheader.module.scss';

type PageHeaderProps = {
    bgColor: string,
    contextTxt: string,
    headerId: string,
    tools: ToolsIconInterface[]
}

function PageHeader({ bgColor, contextTxt, tools, headerId }: PageHeaderProps) {

    const backgroundWithOpacity = hexToRgba(bgColor, 0.60);

    return (
        <header className={styles.pageHeaderContainer} id={headerId} style={{ backgroundColor: backgroundWithOpacity }}>
            <div className={styles.pageHeaderContent}>
                <div className={styles.headerDescription}>
                    <p className={styles.headerDescriptionTitle}>Contexto</p>
                    <p className={styles.headerDescriptionContextTxt}>{contextTxt}</p>
                </div>

                <div className={styles.toolsContainer}>
                    <p className={styles.toolsText}>Ferramentas</p>
                    <div className={styles.toolsWrapper}>
                        {tools.map((tool, i) => (
                            <ToolsIcon key={i} value={tool.value} />
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default PageHeader;