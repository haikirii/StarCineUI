import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound';
import Cadastro from '../pages/Cadastro/Cadastro';
import GameOfThrones from '../pages/GameOfThrones/GameOfThrones';
import Arcane from '../pages/Arcane/Arcane';
import OnePiece from '../pages/OnePiece/OnePiece';
import Anime from '../pages/Anime/Anime';
import Perfil from '../pages/Perfil';
import CategoriaAnime from '../pages/CategoriaAnime';
import CategoriaFilme from '../pages/CategoriaFilme';
import CategoriaSerie from '../pages/CategoriaSerie';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/anime" element={<Anime />} />
                <Route path="/onepiece" element={<OnePiece />} />
                <Route path="/gameofthrones" element={<GameOfThrones />} />
                <Route path="/arcane" element={<Arcane />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/CategoriaAnime" element={<CategoriaAnime />} />
                <Route path="/CategoriaFilme" element={<CategoriaFilme />} />
                <Route path="/CategoriaSerie" element={<CategoriaSerie />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
