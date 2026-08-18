import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className="not-found inner">
            <h2>페이지를 찾을 수 없습니다.</h2>
            <Link to="/">홈으로 이동</Link>
        </main>
    );
};

export default NotFound;
