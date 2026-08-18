const About = () => {
    return (
        <main className="about">
            <div className="inner">
                <p className="about-label">ABOUT US</p>
                <h2>더 나은 경험을 만듭니다.</h2>
                <p className="about-intro">
                    사용하기 쉽고 보기 좋은 웹 서비스를 만들기 위해 고민하고 실행합니다.
                </p>
                <ul className="about-list">
                    <li>
                        <strong>Simple</strong>
                        <span>누구나 쉽게 사용할 수 있는 화면</span>
                    </li>
                    <li>
                        <strong>Useful</strong>
                        <span>필요한 기능에 집중한 서비스</span>
                    </li>
                    <li>
                        <strong>Reliable</strong>
                        <span>안정적으로 동작하는 웹 경험</span>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default About;
