import styles from './appbemol.module.scss';
import { summary } from './summary';
import '../escopecasepage.scss';
import tools from './tools';
import PageHeader from '../../components/page-header/PageHeader';

function AppBemol() {
    return (
        <section className='page-container'>
            <PageHeader
                bgColor={summary.bg}
                contextTxt='Atuação aplicativo de e-commerce (App Bemol), do mesmo ecossistema da empresa da BSF, que também abrangendo alguns dos serviços financeiros da empresa.'
                headerId='header-bemol'
                tools={tools}
            />
        </section>
    )
}

export default AppBemol