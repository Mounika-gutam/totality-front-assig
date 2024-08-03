import React from 'react';
import "./index.css"

const Cart = ({ cartItems, onRemove, onIncrease, onDecrease }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2 className='cart-heading'>Cart</h2>
      <hr className='bar-line' />
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h3 className='cart-title'>{item.title}</h3>
          <p className='cart-price'>Price: ${item.price}</p>
          <p className='cart-quantity'>Quantity: {item.quantity}</p>
          <button onClick={() => onIncrease(item)} className='buttons'>+</button>
          <button onClick={() => onDecrease(item)} className='buttons'>-</button>
          <button onClick={() => onRemove(item)} className='remove-button'>Remove</button>
        </div>
      ))}
      <h3 className='total'>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
