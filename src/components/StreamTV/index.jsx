import styles from './index.module.css';

const StreamTV = ( {imagem, alt, texto}) => {
    return (
        <div className={styles.alinha}>
            <img src={imagem} alt={alt} className={styles.imagem} />
            <p className={styles.texto}>{texto}</p>
        </div>
    );
};

export default StreamTV;