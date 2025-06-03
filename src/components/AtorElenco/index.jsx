import styles from './index.module.css';

const AtorElenco = ( {imagem, descricao, ator} ) => {
    return (
        <div className={styles.alinha}>
            <div className={styles.image}>
                <img src={imagem} alt={descricao}/>
            </div>
            <div className={styles.ator}>
                <p>{ator}</p>
            </div>  
        </div>
    );
};

export default AtorElenco;