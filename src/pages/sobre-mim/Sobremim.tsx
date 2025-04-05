import styles from './sobremim.module.scss';
import veronicaImg from '../../assets/veronica.webp';
import { Ferramentas } from '../../services/FerramentasData';
import Ferramenta from './components/ferramenta/Ferramenta';
import { FerramentaInterface } from '../../interfaces/components';
import empresasImg from '../../assets/Empreas.webp'
import ExternalLink from '../../components/ExternalLink/ExternalLink';
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function Sobremim() {
    return (
        <main className={styles.sobremimContainer}>
            {/* imagem*/}
            <section className={styles.imgSection}>
                <img src={veronicaImg} className={styles.img} alt='Foto da Verônica de perfil cortada pela metade. Coloração preto e branca.' />
            </section>
            {/* Seção do texto*/}
            <section className={styles.contentSection}>
                <h1 className={styles.title}>Prazer, Verôn<span>ica</span></h1>
                <p className={styles.para}><span>Bacharel</span> em arquitetura, <span>sou apaixonada por criar para pessoas através do design</span>. Pós-graduada em Design de Produtos Digitais, me encontrei na área, criando experiências guiada pela visão estratégica do <span>Data-Driven Design</span> desde 2022.</p>

                <p className={styles.para}>
                    Minha trajetória inclui atuação em <span>e-commerce</span>, o marketing digital, <span>Fintech</span> e negócios, em empresas B2C e B2B, com vivências nacionais e internacionais.
                </p>

                <p className={styles.para}>
                    Vamos conversar?
                </p>

                {/* Seção de ferramentas*/}
                <section className={styles.ferramentasWrapper}>
                    <div className={styles.ferramentasInner}>
                        {Ferramentas.map((ferramenta: FerramentaInterface, i: number) => (
                            <Ferramenta key={`original-${i}`} {...ferramenta} />
                        ))}
                        {Ferramentas.map((ferramenta: FerramentaInterface, i: number) => (
                            <Ferramenta key={`duplicate-${i}`} {...ferramenta} />
                        ))}
                    </div>
                </section>

                {/* Seção das empresas*/}
                <section className={styles.empresasWrapper}>
                    <img src={empresasImg} className={styles.empresasImg} alt='Empresas na qual já trabalhei' />
                </section>

                {/* Seção de contatos*/}
                <section className={styles.contatoWrapper}>
                    <ExternalLink 
                        path='/'
                        text='LinkedIn'
                        icon={FaLinkedinIn}
                    />

                    <ExternalLink 
                        path='/'
                        text="Envie um e-mail"
                        icon={MdEmail}
                    />
                </section>
            </section>
        </main>
    )
}

export default Sobremim