import React from 'react';
import './CartItem.css';

const CartItem = ({ item, onUpdateQty, onRemoveQty }) => {
  return (
    <div className='card-item'>
      <div className='card-image'>
        <img src={item.image.url} alt={item.name} />
      </div>
      <div className='item-content'>
        <p className='item-name'>{item.name}</p>
        <p className='item-price'>{item.line_total.formatted_with_symbol}</p>
      </div>
      <div className='card-actions'>
        <div className='button-actions'>
          <button className='quantity-button minus-button'onClick={()=> onUpdateQty(item.id, item.quantity - 1)}>-</button>
          <p className='item-quantity'>{item.quantity}</p>
          <button className='quantity-button plus-button'onClick={()=> onUpdateQty(item.id, item.quantity + 1)}>+</button>
        </div>
        <button className="add-to-cart-button"onClick={()=> onRemoveQty(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;

