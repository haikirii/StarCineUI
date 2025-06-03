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


const Arcane = () => {
    return (
    <div className={styles.page}>
        <Header />

        <div className={styles.alinha}>
            <div>
                <CardFilme categoria="Série" ano="2021 - 2024" temporadas="2 temporadas"classif="image/Classificacao16.png" titulo="Arcane" imagem="image/Arcane.png"/>
                <button className={styles.favoriteButton}>
                    Favorite <FaBookmark className={styles.icon} />
                </button>
                <button className={styles.favoriteButton}>
                    Avaliar: <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    4,9
                </button>
                
            </div>

            <div className={styles.alinhatag}>
                <TagBranca texto="Ação"/>
                <TagBranca texto="Aventura"/>
                <TagBranca texto="Animação"/>
                <TagBranca texto="Drama"/>

                <DescricaoObra Escritor1="Christian Linke" Escritor2="Alex Yee" descricao="O delicado equilíbrio entre a rica cidade de Piltover e o decadente submundo de Zaun. As tensões entre essas cidades-estado fervilham com a criação da 'hextec', uma forma de qualquer um controlar a energia mágica em Piltover, e em Zaun, uma nova droga chamada 'Cintila' transforma humanos em monstros. A rivalidade entre as cidades divide famílias e amigos enquanto Arcane dá vida aos relacionamentos que moldam alguns dos campeões famosos de League of Legends, incluindo Vi, Jinx, Caitlyn, Jayce, Viktor e Ekko." />
                <div className={styles.alinhaAtor}>
                    <p className={styles.tituloElenco}>Personagens principais</p>

                    <div className={styles.alinha}>
                        <AtorElenco ator="Violet | Vi" imagem="image/Vi.png"/>     
                        <AtorElenco ator="Jinx | Powder" imagem="image/Jinx.png"/>     
                        <AtorElenco ator="Jayce Talis" imagem="image/Jayce.png"/>     
                        <AtorElenco ator="Viktor" imagem="image/Viktor.png"/>     
                    </div> 
                </div>

                <div className={styles.alinhaAtor}>
                    <p className={styles.tituloElenco}>Assista em</p>

                    <div className={styles.alinha}>
                        <StreamTV imagem="/image/Netflix.png" alt="Logo Netflix" texto="Netflix"/>

                        <div className={styles.alinhaPremio}>
                            <CardPremiacao Premio1="The Game Awards: Best Adaptation" />
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

            <Comentario perfil="/image/avatar4.jpg" nome="Ryan Santos" 
                rating={4.0}
                comentario="Que série absurda, linda e bem feita! Mas precisava acabar com o meu resto de sanidade mental?"
                estrelas={[true, true, true, true, false]}
            />

            <Comentario perfil="/image/avatar5.jpg" nome="Luciana Van" 
                rating={5.0}
                comentario="Definitivamente a melhor série animada que já vi. Ouso dizer que talvez seja a melhor série da minha vida. Eu simplesmente amei todos os minutos."
                estrelas={[true, true, true, true, true]}
            />

            <Comentario perfil="/image/avatar6.jpg" nome="Cláudia Santos" 
                rating={4.0}
                comentario="Vi, você é a mulher da minha vida, me da um soco."
                estrelas={[true, true, true, true, false]}
            />
        </div>
        

        <Footer />
    </div>
  );
}

export default Arcane;