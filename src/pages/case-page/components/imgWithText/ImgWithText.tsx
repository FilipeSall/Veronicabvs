import styles from './imgwithtext.module.scss'

type ImgWithTextProps = {
    img: string,
    title: string,
    text?: string,
    description?: string,
    maxWidth?: string
}

function ImgWithText({ img, title, description, text, maxWidth = "100" }: ImgWithTextProps) {
    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <h4 className={styles.title}>{title}</h4>
                {text && <p className={styles.text}>{text}</p>}
            </div>
            <div className={styles.imgWrapper}>
                <img src={img} alt={`Imagem mostrando ${title}`} className={styles.img} style={{ maxWidth: `${maxWidth}%` }} />
                {description && <p className={styles.descriptionText}>{description}</p>}
            </div>
        </div>
    )
}

export default ImgWithText