import Header from "../components/Header";
import Footer from "../components/Footer";
import BotaoVermelho from "../components/BotaoVermelho";
import InputLogin from "../components/InputLogin";
import { FaUser } from 'react-icons/fa';
import CardFilme from '../components/CardFilme';
import TagBranca from "../components/TagBranca";
import AtorElenco from "../components/AtorElenco";
import DescricaoObra from "../components/DescricaoObra";
import StreamTV from "../components/StreamTV";
import CardPremiacao from "../components/CardPremiacao";
import Comentario from "../components/Comentário";

const TestePage = () => {
    return (
        <div>
            <Comentario perfil="/image/avatar1.png" nome="Felipe Lima"
          rating={4.0}
          comentario="Muito boa, história muito complexa, mas com um final ruim! De qualquer forma, foi uma boa experiencia assistir."
          estrelas={[
            true, true, true, false, false
          ]} />
            {/* <CardPremiacao Premio1="Primetime Emmy Awards" Premio2="Golden Globe Awards"/> */}
            {/* <StreamTV imagem="/image/PlaceholderMax.png" alt="" texto="Max"/> */}
            {/* <DescricaoObra Escritor1="D.B. Weiss" Escritor2="David Benioff" descricao="A épica série Game of Thrones tece uma complexa tapeçaria de intrigas políticas, guerras brutais e famílias nobres ambiciosas lutando pelo controle do Trono de Ferro dos Sete Reinos de Westeros. Em meio a alianças instáveis e traições chocantes, uma ameaça ancestral de criaturas sobrenaturais surge do Norte, testando a própria sobrevivência da humanidade. Dragões majestosos, magia proibida e personagens inesquecíveis colidem em uma narrativa onde poder, lealdade, honra e moralidade são constantemente questionados." /> */}
            {/* <AtorElenco imagem="/image/Placeholder.png" ator="Emilia Clark"/> */}
            {/* <TagBranca texto="Comédia" /> */}
            {/* <Header />
            <Footer /> */}
            {/* <CardFilme categoria="Série" ano="2011 - 2028" temporadas="8 temporadas"classif="image/Classificacao16.png" titulo="Game Of Thrones" imagem="image/Game_of_Thrones_Cover.png"/> */}
        </div>
    )
}

export default TestePage;