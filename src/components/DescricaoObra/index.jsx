import styles from './index.module.css';

const DescricaoObra = ( {Escritor1, Escritor2, descricao}) => {
    return(
        <div className={styles.texto}>
            <div>
                <p>Criação: {Escritor1}, {Escritor2} </p>
            </div>

            <div className={styles.alinha}>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default DescricaoObra;