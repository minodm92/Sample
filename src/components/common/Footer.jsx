const Footer = () => {
    const footerMenus = [
        {
            title: 'MEMBERSHIP',
            items: ['멤버십 혜택', '임직원 회원가입'],
        },
        {
            title: 'SUPPORT',
            items: ['매장안내', 'A/S 안내', '고객센터', 'APP 다운로드', 'GIFT CARD', '단체주문'],
        },
        {
            title: 'INFO',
            items: ['이용약관', '공지사항', '뉴스', '브랜드 가이드'],
        },
        {
            title: 'SOCIAL',
            items: ['FACEBOOK', 'YOUTUBE', 'INSTAGRAM'],
        },
        {
            title: 'FAMILY SITE',
            items: ['MONT-BELL'],
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="footer" className="footer">
            <div className="footer-inner">
                <section className="footer-company" aria-label="고객센터 및 회사 정보">
                    <h2 className="footer-brand">RUNWAY</h2>
                    <p className="footer-contact">
                        구매 / 배송 문의 <strong>080-710-1020</strong>
                        <br />
                        상품정보 / A/S문의 <strong>080-023-1020</strong>
                    </p>
                    <p className="footer-hours">
                        MON - FRI 09:00 ~ 17:00
                        <br />
                        BREAK TIME : 12:30 ~ 13:30 (주말, 공휴일 휴무)
                    </p>
                    <address className="footer-address">
                        (주)런웨이 | 대표이사 최동민 | 사업자등록번호 622-81-04805
                        <br />
                        통신판매업신고번호 2026-경남김해-0229 | 개인정보관리 책임자 유승호
                        <br />
                        마케팅/제휴 문의 <a href="mailto:runway@example.com">runway@example.com</a>
                    </address>
                    <div className="footer-guarantee">
                        <strong>SGI 서울보증안내</strong>
                        <p>현금 등으로 결제하신 경우 소비자피해보상보험 서비스로 안전한 거래가 보장됩니다.</p>
                    </div>
                    <p className="footer-copyright">COPYRIGHT © RUNWAY. ALL RIGHTS RESERVED.</p>
                </section>

                <nav className="footer-nav" aria-label="푸터 메뉴">
                    <div className="footer-menu footer-policy">
                        <h3>개인정보처리방침</h3>
                    </div>
                    {footerMenus.map((menu) => (
                        <div className="footer-menu" key={menu.title}>
                            <h3>{menu.title}</h3>
                            <ul>
                                {menu.items.map((item) => (
                                    <li key={item}>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                <button className="footer-top" type="button" onClick={scrollToTop} aria-label="맨 위로 이동">
                    <span aria-hidden="true">⌃</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;
