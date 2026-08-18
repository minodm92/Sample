import { Route, Routes } from 'react-router-dom';

import './components/style.css';
import Layout from './components/common/Layout';
import About from './pages/About';
import Board from './pages/Board';
import BoardDetail from './pages/BoardDetail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="products">
                        <Route index element={<Products />} />
                        <Route path=":productID" element={<ProductDetail />} />
                    </Route>
                    <Route path="board">
                        <Route index element={<Board />} />
                        <Route path=":boardID" element={<BoardDetail />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
