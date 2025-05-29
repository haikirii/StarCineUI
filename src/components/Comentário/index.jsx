import styles from './index.module.css';
import { FaStar } from 'react-icons/fa';


const Comentario = ( {nome, rating, comentario, estrelas, perfil}) => {
    return(
        <div className={styles.review}>
      <img src={perfil} className={styles.avatar} />
      <div>
        <strong>{nome}</strong>
        <div className={styles.estrelas}>
          <FaStar color={estrelas[0] ? '#facc15' : '#6b7280'} size={14} />
          <FaStar color={estrelas[1,0] ? '#facc15' : '#6b7280'} size={14} />
          <FaStar color={estrelas[2] ? '#facc15' : '#6b7280'} size={14} />
          <FaStar color={estrelas[3] ? '#facc15' : '#6b7280'} size={14} />
          <FaStar color={estrelas[4] ? '#facc15' : '#6b7280'} size={14} />
          <span className={styles.ratingNumero}>{rating.toFixed(1)}</span>
        </div>
        <p>{comentario}</p>
      </div>
    </div>
    
    );
};

export default Comentario;