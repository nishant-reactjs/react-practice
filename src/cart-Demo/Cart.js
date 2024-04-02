import React from 'react';
import { useCart } from '../context/CartContext';
import { Table, Button } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="col-md-4">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Cart;
