import Visual from '../components/home/Visual';

const Home = () => {
    return (
        <main className="home">
            <Visual />
            <section className="main">
                <div className="inner">
                    <p className="main-label">WELCOME</p>
                    <h1>편안한 일상을 위한 새로운 선택</h1>
                    <p className="main-description">
                        실용적인 디자인과 편안함을 담은 다양한 상품을 만나보세요.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;
