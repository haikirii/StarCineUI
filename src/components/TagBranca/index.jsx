import styles from './index.module.css'

const TagBranca = ( {texto}) => {
    return (
        <div className={styles.tag}>
            <p>{texto}</p>
        </div>
    );
};

export default TagBranca;

