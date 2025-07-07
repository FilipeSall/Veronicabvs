import styles from './appbemol.module.scss';
import { summary } from './summary';
import '../escopecasepage.scss';
import arrowUp from '../../../assets/svgs/scrolTop.svg';
import tools from './tools';
import PageHeader from '../../components/page-header/PageHeader';
import { useSmoothScroll } from '../../../hooks/useSmoothScrol';
import Summary from '../../components/summary/Summary';
import CaseTitle from '../../components/case-title/CaseTitle';

function AppBemol() {

    const scrollToElement = useSmoothScroll();
    const totalReading = summary.items.reduce((acc, item) => acc + item.readingTime, 0);

    return (
        <section className='page-container'>
            <PageHeader
                bgColor={summary.bg}
                contextTxt='Atuação aplicativo de e-commerce (App Bemol), do mesmo ecossistema da empresa da BSF, que também abrangendo alguns dos serviços financeiros da empresa.'
                headerId='header-app-bemol'
                tools={tools}
            />

            <Summary items={summary.items} bg={summary.bg} color={summary.color} totalReading={totalReading} />

            {/*2.1 Autocomplete para reconhecimento de clientes com Conta Bemol*/}
            <section className='chapter' id='chapter-2-1'>
                <CaseTitle
                    title={summary.items[0].title}
                    subTitle={summary.items[0].subtitle}
                />
            </section>

            {/*2.2 Redesign das telas de contratação de empréstimos via aplicativo e-commerce*/}
            <section className='chapter' id='chapter-2-2'>

            </section>

            {/*FOOTER*/}
            <p className='footer-text'>
                💡Entre em contato e agende uma apresentação por algum dos botões abaixo! :)
            </p>
            <a
                href="#header-app-bemol"
                className="scrollup-case"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToElement('header-app-bemol');
                }}
            >
                <img src={arrowUp} alt="Seta para cima" />
            </a>

        </section>
    )
}

export default AppBemol