import BotaoVermelho from "../components/BotaoVermelho";
import InputLogin from "../components/InputLogin";
import { FaUser } from 'react-icons/fa';

const TestePage = () => {
    return (
        <div>
            <InputLogin placeholder="Email" Icon={FaUser}/>
            <InputLogin placeholder="Email"/>
        </div>
    )
}

export default TestePage;