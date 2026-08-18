import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            {/* 변경되는 컴포넌트는 그 사이 */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
