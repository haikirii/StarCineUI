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


const GameOfThrones = () => {
    return (
    <div className={styles.page}>
        <Header />

        <div className={styles.alinha}>
            <div>
                <CardFilme categoria="Série" ano="2011 - 2028" temporadas="8 temporadas"classif="image/Classificacao16.png" titulo="Game Of Thrones" imagem="image/Game_of_Thrones_Cover.png"/>
                <button className={styles.favoriteButton}>
                    Favorite <FaBookmark className={styles.icon} />
                </button>
                <button className={styles.favoriteButton}>
                    Avaliar: <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    <FaStar className={styles.iconStar} />
                    4,7
                </button>
                
            </div>

            <div className={styles.alinhatag}>
                <TagBranca texto="Comédia"/>
                <TagBranca texto="Fantasia"/>
                <TagBranca texto="Tragédia"/>
                <TagBranca texto="Ação"/>

                <DescricaoObra Escritor1="D.B. Weiss" Escritor2="David Benioff" descricao="A épica série Game of Thrones tece uma complexa tapeçaria de intrigas políticas, guerras brutais e famílias nobres ambiciosas lutando pelo controle do Trono de Ferro dos Sete Reinos de Westeros. Em meio a alianças instáveis e traições chocantes, uma ameaça ancestral de criaturas sobrenaturais surge do Norte, testando a própria sobrevivência da humanidade. Dragões majestosos, magia proibida e personagens inesquecíveis colidem em uma narrativa onde poder, lealdade, honra e moralidade são constantemente questionados." />
                <div className={styles.alinhaAtor}>
                    <p className={styles.tituloElenco}>Elenco Principal</p>

                    <div className={styles.alinha}>
                        <AtorElenco ator="Emilia Clark" imagem="image/EmiliaClark.png"/>     
                        <AtorElenco ator="Kit Harington" imagem="image/Kit.png"/>     
                        <AtorElenco ator="Lena Headey" imagem="image/Lena.png"/>     
                        <AtorElenco ator="Nikolaj Coster" imagem="image/Nikolas.png"/>     
                    </div> 
                </div>

                <div className={styles.alinhaAtor}>
                    <p className={styles.tituloElenco}>Assista em</p>

                    <div className={styles.alinha}>
                        <StreamTV imagem="/image/Max.png" alt="Logo Max" texto="Max"/>
                        <StreamTV imagem="/image/ClaroTV.png" alt="Logo ClaroTV" texto="ClaroTV"/>

                        <div className={styles.alinhaPremio}>
                            <CardPremiacao Premio1="Primetime Emmy Awards" Premio2="Golden Globe Awards"/>
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

            <Comentario perfil="/image/avatar1.png" nome="Helena Silva" 
                rating={4.0}
                comentario="A melhor série já feita! Amei demais, assistam!"
                estrelas={[true, true, true, true, false]}
            />

            <Comentario perfil="/image/avatar2.png" nome="Felipe Lima" 
                rating={3.0}
                comentario="Muito boa, história muito complexa, mas com um final ruim! De qualquer forma, foi uma boa experiencia assistir."
                estrelas={[true, true, true, false, false]}
            />

            <Comentario perfil="/image/avatar3.jpg" nome="Cláudia Santos" 
                rating={5.0}
                comentario="Péssimo final, mas série de qualidade! Recomendo se você não se importar com finais ruins."
                estrelas={[true, true, true, true, true]}
            />
        </div>
        

        <Footer />
    </div>
  );
}

export default GameOfThrones;