import React from 'react';
import { useCart } from '../context/CartContext';
import { Button } from 'react-bootstrap';

const ProductPage = ({ product }) => {
  const { addToCart, cart } = useCart();

  const cartItem = cart.find(item => item.id === product.id);

  const qtyInCart = cartItem && cartItem.quantity;
  
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <Button onClick={() => addToCart(product)}>Add to Cart {qtyInCart}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
