import styles from './sobremim.module.scss';
import veronicaImg from '../../assets/veronica.png';
import { Ferramentas } from '../../services/FerramentasData';
import Ferramenta from './components/ferramenta/Ferramenta';
import { FerramentaInterface } from '../../interfaces/components';
import empresasImg from '../../assets/EMPRESAS.webp'
import newWindowIcon from '../../assets/svgs/new-window.svg';
import pdfCurriculo from '../../assets/pdfs/curriculo.pdf';

function Sobremim() {
    return (
        <main className={styles.sobremimContainer}>
            {/* imagem*/}
            <section className={styles.imgSection}>
                <img src={veronicaImg} className={styles.img} alt='Foto da Verônica de perfil cortada pela metade. Coloração preto e branca.' />
            </section>
            {/* Seção do texto*/}
            <section className={styles.contentSection}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.title}>Prazer, Verô<span>nica</span></h1>
                    <p className={styles.para}>Bacharel em Arquitetura, sou <span>apaixonada por criar para pessoas através do Design</span>.</p>
                    <p className={styles.para}><span>Pós-graduada em Design de Produtos Digitais</span>, atuo desde 2022 desenvolvendo experiências orientadas por dados com base no <span>Data-Driven Design</span>. Aprofundo esse olhar como <span>graduanda em Ciência de Dados</span>, unindo sensibilidade estética e pensamento analítico para criar soluções centradas no usuário.</p>
                    <p className={styles.para}>
                        Minha trajetória inclui atuação em <span>e-commerce</span>, o marketing digital, <span>Fintech</span> e negócios, em empresas B2C e B2B, com vivências nacionais e internacionais.
                    </p>
                    <div className={styles.paraConversar}>
                        <p><span>Vamos conversar?</span></p>
                        <div className={styles.textWrapperContainer}>
                            <div className={`${styles.bulletPoint} ${styles.bulletPointCurriculo}`}>•</div>
                            <a
                                href={pdfCurriculo}
                                target='_blank'
                                className={styles.curriculoLink}
                            >
                                <span>Acesse meu currículo </span>
                                <img alt='Nova janela icone' className={styles.newWindowBtn} src={newWindowIcon} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Seção das empresas*/}
                <section className={styles.empresasSection}>
                    <div className={styles.textWrapperContainer}>
                        <div className={styles.bulletPoint}>•</div>
                        <p>Empresas por onde passei:</p>
                    </div>
                    <div className={styles.empresasWrapper}>
                        <div className={styles.empresasInner}>
                            <img src={empresasImg} className={styles.empresasImg} alt='Empresas na qual já trabalhei' />
                            <img src={empresasImg} className={styles.empresasImg} alt='Empresas na qual já trabalhei' />
                        </div>
                    </div>
                </section>

                {/* Seção de ferramentas*/}
                <section className={styles.ferramentasSection}>
                    <div className={styles.textWrapperContainer}>
                        <div className={styles.bulletPoint}>•</div>
                        <p>Principais ferramentas:</p>
                    </div>
                    <div className={styles.ferramentasWrapper}>
                        <div className={styles.ferramentasInner}>
                            {Ferramentas.map((ferramenta: FerramentaInterface, i: number) => (
                                <Ferramenta key={`original-${i}`} {...ferramenta} />
                            ))}
                            {Ferramentas.map((ferramenta: FerramentaInterface, i: number) => (
                                <Ferramenta key={`duplicate-${i}`} {...ferramenta} />
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}

export default Sobremim