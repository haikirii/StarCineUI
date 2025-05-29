import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import TestePage from '../pages/TestePage';
import NotFound from '../pages/NotFound';
import Cadastro from '../pages/Cadastro/Cadastro';
import GameOfThrones from '../pages/GameOfThrones/GameOfThrones';
import Arcane from '../pages/Arcane/Arcane';
import OnePiece from '../pages/OnePiece/OnePiece';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/onepiece" element={<OnePiece />} />
                <Route path="/gameofthrones" element={<GameOfThrones />} />
                <Route path="/arcane" element={<Arcane />} />
                <Route path="/t" element={<TestePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;