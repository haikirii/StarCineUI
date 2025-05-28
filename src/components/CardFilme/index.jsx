import styles from './index.module.css'

const CardFilme = ({imagem, descricao, classif, titulo, categoria, ano, temporadas}) => {
    return (
        <div className={styles.card}>
            <div>
                <img src={classif} alt={descricao} className={styles.classif}/>
                <span className={styles.titulo}>{titulo}</span>
            </div>
            <div>
                <p className={styles.tag}>{categoria} • {ano} • {temporadas}</p>
            </div>
            <div>
                <img src={imagem} alt={descricao} className={styles.imagemCover} />
            </div>
        </div>
    );
};

export default CardFilme;