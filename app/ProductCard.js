'use client';

import { useState } from 'react';

const ProductCard = ({ imageUrl, price, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt="Product" data-test-id="product-image" />

      <div data-test-id="product-price">{price}</div>

      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(e.target.value)}
        data-test-id="product-quantity"
      />

      <button onClick={handleAddToCart} data-test-id="product-add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
