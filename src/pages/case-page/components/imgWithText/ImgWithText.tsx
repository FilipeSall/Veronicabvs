import styles from './imgwithtext.module.scss'

type ImgWithTextProps = {
    img: string,
    title: string,
    text?: string,
    description?: string
}

function ImgWithText({ img, title, description, text }: ImgWithTextProps) {
    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <h4 className={styles.title}>{title}</h4>
                {text && <p className={styles.text}>{text}</p>}
            </div>
            <div className={styles.imgWrapper}>
                <img src={img} alt={`Imagem mostrando ${title}`} className={styles.img} />
                {description && <p className={styles.descriptionText}>{description}</p>}
            </div>
        </div>
    )
}

export default ImgWithText