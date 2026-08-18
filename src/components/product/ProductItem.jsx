import { Link } from 'react-router-dom';

const ProductItem = ({ item }) => {
    const { id, photo, name, description, price } = item;

    return (
        <article className="product-card">
            <Link to={String(id)}>
                <div className="product-image">
                    <img src={photo} alt={name} />
                </div>
                <div className="product-info">
                    <h3>{name}</h3>
                    <p className="product-description">{description}</p>
                    <strong className="product-price">{price.toLocaleString()}원</strong>
                </div>
            </Link>
        </article>
    );
};

export default ProductItem;
