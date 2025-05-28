import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import TestePage from '../pages/TestePage';
import NotFound from '../pages/NotFound';
import Cadastro from '../pages/Cadastro/Cadastro';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
<<<<<<< HEAD
=======
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/t" element={<TestePage />} />
                <Route path="*" element={<NotFound />} />
>>>>>>> e8f886a640918b31f8ab86bc9e12a2896d649d7b
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;