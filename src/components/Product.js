import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const updateProduct = () => {
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      price: prevProduct.price + 10,
      inStock: !prevProduct.inStock,
    }));
  };

  return (
    <div>
      <h2>Product</h2>
      <p>Name: {updatedProduct.name}</p>
      <p>Price: {updatedProduct.price}</p>
      <p>In Stock: {updatedProduct.inStock ? 'Yes' : 'No'}</p>
      <button onClick={updateProduct}>Update Product</button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
  }).isRequired,
};

Product.defaultProps = {
  product: {
    name: 'Default Product',
    price: 0,
    inStock: false,
  },
};

export default Product;
