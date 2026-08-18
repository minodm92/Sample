import { useNavigate, useParams } from 'react-router-dom';
import data from '../assets/api/data.js';

const ProductDetail = () => {
    const { productID } = useParams();
    const navigate = useNavigate();
    const product = data.find((item) => item.id === Number(productID));
    const onGo = () => navigate('/products');

    if (!product) {
        return (
            <main className="product-not-found">
                <h2>상품을 찾을 수 없습니다.</h2>
                <button type="button" onClick={onGo}>
                    상품 목록으로
                </button>
            </main>
        );
    }

    return (
        <main className="view">
            <div className="inner">
                <div className="detail-image">
                    <img src={product.photo} alt={product.name} />
                </div>
                <section className="detail-info">
                    <p className="detail-label">PRODUCT DETAIL</p>
                    <h2>{product.name}</h2>
                    <p className="detail-description">{product.description}</p>
                    <dl className="detail-meta">
                        <div>
                            <dt>상품 번호</dt>
                            <dd>{product.id}</dd>
                        </div>
                        <div>
                            <dt>판매 가격</dt>
                            <dd className="detail-price">{product.price.toLocaleString()}원</dd>
                        </div>
                    </dl>
                    <button className="detail-button" type="button" onClick={onGo}>
                        상품 목록으로
                    </button>
                </section>
            </div>
        </main>
    );
};

export default ProductDetail;
