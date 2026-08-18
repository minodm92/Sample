import data from '../assets/api/data';
import ProductItem from '../components/product/ProductItem';

const Products = () => {
    return (
        <main className="proList">
            <div className="inner">
                <div className="products">
                    <p className="products-label">PRODUCTS</p>
                    <h2>상품 목록</h2>
                    <p className="products-intro">원하는 상품을 선택해 상세 정보를 확인하세요.</p>
                    <div className="product-grid">
                        {data.map((item) => (
                            <ProductItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Products;
