import React from 'react';
import './cartStyles.css';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom'

const Cart = ({ cart , handleUpdateCart ,handleRemoveFromCart,handleEmptyCart}) => {
  console.log(cart , 'in cart file --->')

  if (!cart || !cart.line_items) {
    return <p>Loading...</p>; // Add a loading state while the cart is being fetched
  }

  const isEmpty = !cart.line_items.length;

  const EmptyCart = () => (
    <p>Your shopping cart is empty,
      <Link to="/show">Start adding some..</Link>!
    </p>

  );

  const FilledCart = () => (
    <>
      <div>
        {cart.line_items.map((item) => (
          <div key={item.id}>
            < CartItem item ={item} onUpdateQty ={handleUpdateCart} onRemoveQty={handleRemoveFromCart}/>
          </div>
        ))}
      </div>
      <div className="item-details">
        <p>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
        <div className="button-container">
          <button onClick ={handleEmptyCart}>Empty Cart</button>
          <button>Checkout</button>
        </div>
      </div>
    </>
  );

  return (
    <div className="container">
      <p>Your Shopping Cart</p>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </div>
  );
};

export default Cart;

