import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="header">
            <div className="header-inner">
                <h1 className="logo">
                    <Link to="/" aria-label="RUNWAY 홈으로 이동">
                        <img src="/images/runway-logo.png" alt="RUNWAY" />
                    </Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/board">Board</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
