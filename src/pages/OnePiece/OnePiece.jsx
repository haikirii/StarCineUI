import styles from "./index.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardFilme from "../../components/CardFilme";
import TagBranca from "../../components/TagBranca";
import DescricaoObra from "../../components/DescricaoObra";
import AtorElenco from "../../components/AtorElenco";
import StreamTV from "../../components/StreamTV";
import CardPremiacao from "../../components/CardPremiacao";
import { FaBookmark, FaStar, FaRegEdit } from 'react-icons/fa';
import Comentario from "../../components/Comentário";


const OnePiece = () => {
    return (
    <div className={styles.page}>
        <Header />

        <div className={styles.alinha}>
            <div>
                <CardFilme categoria="Anime" ano="1999 - Presente" temporadas="1130 episódios" classif="image/Classificacao16.png" titulo="One Piece" imagem="image/OnePiece.png"/>
                <button className={styles.favoriteButton}>
                    Favorite <FaBookmark className={styles.icon} />
                </button>
                <button className={styles.favoriteButton}>
                    Avaliar: <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    4,8
                </button>
                
            </div>

            <div className={styles.alinhatag}>
                <TagBranca texto="Ação"/>
                <TagBranca texto="Aventura"/>
                <TagBranca texto="Fantasia"/>
                <TagBranca texto="Animação"/>

                <DescricaoObra Escritor1="Eichiiro Oda" Escritor2="Sueisha" descricao="Embarque em uma jornada com One Piece. A épica série de anime criada pelo renomado Eiichiro Oda é um fenômeno, cativando corações de fãs de várias gerações ao longo de seus 25 anos de existência. Esta aventura em alto-mar é repleta de amizades inabaláveis, batalhas pela liberdade e a incessante busca pelos sonhos. Junte-se a Monkey D. Luffy e sua tripulação de piratas enquanto eles descobrem o verdadeiro significado de poder e justiça nesta grande era dos piratas." />
                <div className={styles.alinhaAtor}>
                    <p className={styles.tituloElenco}>Personagens principais</p>

                    <div className={styles.alinha}>
                        <AtorElenco ator="Monkey D. Luffy" imagem="image/Luffy.png"/>     
                        <AtorElenco ator="Roronoa Zoro" imagem="image/Zoro.png"/>     
                        <AtorElenco ator="Sanji" imagem="image/Sanji.png"/>     
                        <AtorElenco ator="Nico Robin" imagem="image/Nico.png"/>     
                    </div> 
                </div>

                <div className={styles.alinhaAtor}>
                    <p className={styles.tituloElenco}>Assista em</p>

                    <div className={styles.alinha}>
                        <StreamTV imagem="/image/Netflix.png" alt="Logo Netflix" texto="Netflix"/>
                        <StreamTV imagem="/image/Crunchy.png" alt="Logo Crunchyroll" texto="Crunchyroll"/>
                        <StreamTV imagem="/image/Prime.png" alt="Logo Amazon" texto="AmazonPrime"/>

                        <div className={styles.alinhaPremio}>
                            <CardPremiacao Premio1="Tokyo Anime Award" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className={styles.inputContainer}>
            <label className={styles.comentarioTitulo}>
                Resenha 
                <FaRegEdit className={styles.comentarioIcon}/>
            </label>
            <div className={styles.comentarioSub}>
                <p>Compartilhe sua crítica</p>
            </div>
            <div className={styles.comentarioCon}>
                <input className={styles.comentarioInput} placeholder="Mínimo de 100 caracteres" />
                <button className={styles.botaoComentario}>PUBLICAR</button>
            </div>
        </div>

        <div className={styles.sessaoComent}>

            <Comentario perfil="/image/avatar7.jpg" nome="Ryan Santos" 
                rating={3.0}
                comentario="Não é muito a minha praia, mas achei legal"
                estrelas={[true, true, true, false, false]}
            />

            <Comentario perfil="/image/avatar8.jpg" nome="Luciana Van" 
                rating={5.0}
                comentario="Oda gênio, não tem como."
                estrelas={[true, true, true, true, true]}
            />

            <Comentario perfil="/image/avatar9.jpg" nome="Cláudia Santos" 
                rating={4.0}
                comentario="Adoro o anime do pirata que estica."
                estrelas={[true, true, true, true, false]}
            />
        </div>
        

        <Footer />
    </div>
  );
}

export default OnePiece;