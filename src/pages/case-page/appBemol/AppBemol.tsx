import styles from './appbemol.module.scss';
import '../escopecasepage.scss';
import ToolsIcon from '../components/ToolsIcon/ToolsIcon';
import tools from './tools';

function AppBemol() {
    return (
        <section className='case-container'>
            <div className='case-header' id={styles.headerAppBemol}>
                <p className='header-description'>
                    <span>Contexto:</span> Contexto: Atuação aplicativo de <span>e-commerce</span> (App Bemol), do mesmo ecossistema da empresa da BSF, que também abrangendo alguns dos serviços financeiros da empresa.
                </p>

                <div className='tools-container'>
                    <p className='tools-text'>Ferramentas utilizadas:</p>
                    <div className='tools-wrapper'>
                        {tools.map((tool, i) => (
                            <ToolsIcon key={i} value={tool.value} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppBemol