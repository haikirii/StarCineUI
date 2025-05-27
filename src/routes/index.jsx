import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SearchPage from '../pages/SearchResult';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
