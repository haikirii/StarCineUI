import styles from "./index.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardFilme from "../../components/CardFilme";
import TagBranca from "../../components/TagBranca";
import DescricaoObra from "../../components/DescricaoObra";
import AtorElenco from "../../components/AtorElenco";
import StreamTV from "../../components/StreamTV";
import CardPremiacao from "../../components/CardPremiacao";
import { FaBookmark, FaStar } from 'react-icons/fa';


const Obras = () => {
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
                        <AtorElenco ator="Emilia Clark" imagem="image/Placeholder.png"/>   
                        <AtorElenco ator="Emilia Clark" imagem="image/Placeholder.png"/>   
                        <AtorElenco ator="Emilia Clark" imagem="image/Placeholder.png"/>   
                        <AtorElenco ator="Emilia Clark" imagem="image/Placeholder.png"/>   
                    </div> 
                </div>

                <div className={styles.alinhaAtor}>
                    <p className={styles.tituloElenco}>Assista em</p>

                    <div className={styles.alinha}>
                        <StreamTV imagem="/image/PlaceholderMax.png" alt="" texto="Max"/>
                        <StreamTV imagem="/image/PlaceholderMax.png" alt="" texto="Max"/>

                        <div className={styles.alinhaPremio}>
                            <CardPremiacao Premio1="Primetime Emmy Awards" Premio2="Golden Globe Awards"/>
                        </div>
                    </div>
                </div>

                

            </div>

        </div>

        <Footer />
    </div>
  );
}

export default Obras;