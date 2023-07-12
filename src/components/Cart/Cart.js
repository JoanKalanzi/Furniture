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
    <div className='empty-cart'>
    <p>Your shopping cart is empty!
      <Link to="/show">
       <button className='cart-empty'>Back to Store </button>
       </Link>
    </p>
    </div>

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
          <Link to="/checkout">
            <button>Checkout</button>
            
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className="section-head col-sm-12">
    <h4>Your Shopping
    <span> Cart</span> 
   </h4>
   {isEmpty ? <EmptyCart /> : <FilledCart />}
   </div>

  )
};

export default Cart;

