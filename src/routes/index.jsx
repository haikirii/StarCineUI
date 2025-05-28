import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import TestePage from '../pages/TestePage';
import NotFound from '../pages/NotFound';
import Obras from '../pages/Obras/Obras';
import Cadastro from '../pages/Cadastro/Cadastro';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/obra" element={<Obras />} />
                <Route path="/t" element={<TestePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;