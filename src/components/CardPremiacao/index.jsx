import styles from './index.module.css'

const CardPremiacao = ( {Premio1, Premio2}) => {
    return(
    <div className={styles.awardCard}>

        <div>
            <img src="/image/Medal.png" className={styles.awardIcon}/>
        </div>
        
        <div className={styles.awardTexto}>
            <p>{Premio1}</p>
            <p>{Premio2}</p>
        </div>

    </div>
    );
};

export default CardPremiacao;