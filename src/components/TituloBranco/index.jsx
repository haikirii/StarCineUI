import styles from './index.module.css'

const TituloBranco = (props) => {
    return (
        <div className={styles.titulo}>
            <span>{props.titulo}</span>
        </div>
    )
}

export default TituloBranco;