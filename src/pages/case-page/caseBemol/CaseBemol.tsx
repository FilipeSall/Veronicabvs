import '../escopecasepage.scss';
import tools from './tools';
import ToolsIcon from '../components/ToolsIcon/ToolsIcon';
import arrowUp from '../../../assets/svgs/arrowUp.svg';

function CaseBemol() {
    return (
        <section className='pageContainer'>
            <div className='case-header' id='header-bemol'>
                <p className='header-description'>
                    <span>Contexto:</span> Atuação abrangente em <span>conta digital</span> (Conta Bemol), com responsabilidade direta sobre o produto de empréstimos (Empréstimo Pessoal) — conduzindo <span>todo o ciclo de design</span>, desde pesquisas na etapa de discoberta à entrega e estratégia do acompanhamento de métricas pós lançamento.
                </p>

                <div className='tools-container'>
                    <p className='tools-text'>Ferramentas:</p>
                    <div className='tools-wrapper'>
                        {tools.map((tool, i) => (
                            <ToolsIcon key={i} value={tool.value} />
                        ))}
                    </div>
                </div>
            </div>
            {/*SUMMARY */}
        
            <a href='#header-bemol' className='scrollup-case'>
                <img src={arrowUp} alt='Seta para cima'/>
            </a>
        </section>
    )
}

export default CaseBemol