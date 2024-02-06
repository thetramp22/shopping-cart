import PropTypes from 'prop-types';

const ProductCard = ({ title, price, description, image }) => {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>price: {price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default ProductCard;
