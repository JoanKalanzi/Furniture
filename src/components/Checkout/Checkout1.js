import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './checkout.css';

const Checkout = ({ cart }) => {
  const cartTotal = cart ? cart.subtotal.formatted_with_symbol : '';

  useEffect(() => {
    const stripePromise = loadStripe('pk_test_51NSf5YBBaFN8duh0uDHm5NemXdpUTqaaWwkofTF3qPUzLJ7QgyjsOUWKA0BrAmXw3UFXya8LKof9H2I3yDiwIgtX008KVQUtXz');

    const initStripeElements = async () => {
      const stripe = await stripePromise;
      const elements = stripe.elements();

      const card = elements.create('card', {
        hidePostalCode: true,
        style: {
          base: {
            iconColor: '#666EE8',
            color: '#31325F',
            lineHeight: '40px',
            fontWeight: 300,
            fontFamily: 'Helvetica Neue',
            fontSize: '15px',

            '::placeholder': {
              color: '#CFD7E0',
            },
          },
        },
      });
      card.mount('#card-element');

      const setOutcome = (result) => {
        const successElement = document.querySelector('.success');
        const errorElement = document.querySelector('.error');
        successElement.classList.remove('visible');
        errorElement.classList.remove('visible');

        if (result.token) {
          successElement.querySelector('.token').textContent = result.token.id;
          successElement.classList.add('visible');
          
        } else if (result.error) {
          errorElement.textContent = result.error.message;
          errorElement.classList.add('visible');
        }
      };

      card.on('change', (event) => {
        setOutcome(event);
      });

      document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const options = {
          name: `${document.getElementById('first-name').value} ${document.getElementById('last-name').value}`,
          address_line1: document.getElementById('address-line1').value,
          address_line2: document.getElementById('address-line2').value,
          address_city: document.getElementById('address-city').value,
          address_state: document.getElementById('address-state').value,
          address_zip: document.getElementById('address-zip').value,
          address_country: document.getElementById('address-country').value,
        };
        stripe.createToken(card, options).then(setOutcome);
      });
    };

    initStripeElements();
  }, []);

  return (
    <form action="//httpbin.org/post" method="POST">
      <input type="hidden" name="token" />
      <div className="group">
        <label>
          <span>Card</span>
          <div id="card-element" className="field"></div>
        </label>
      </div>
      <div className="group">
        <label>
          <span>First name</span>
          <input id="first-name" name="first-name" className="field" placeholder="John" />
        </label>
        <label>
          <span>Last name</span>
          <input id="last-name" name="last-name" className="field" placeholder="Smith" />
        </label>
      </div>
      <div className="group">
        <label>
          <span>Address</span>
          <input id="address-line1" name="address_line1" className="field" placeholder="1 Lodge Lane" />
        </label>
        <label>
          <span>Address (cont.)</span>
          <input id="address-line2" name="address_line2" className="field" placeholder="" />
        </label>
        <label>
          <span>City</span>
          <input id="address-city" name="address_city" className="field" placeholder="Oxford" />
        </label>
        <label>
          <span>County</span>
          <input id="address-state" name="address_state" className="field" placeholder="Oxfordshire" />
        </label>
        <label>
          <span>Post Code</span>
          <input id="address-zip" name="address_zip" className="field" placeholder="OX1 1AB" />
        </label>
        <label>
          <span>Country</span>
          <select name="address_country" id="address-country" className="field">
            <option value="UK" selected>United Kingdom</option>
          </select>
        </label>
      </div>
      <button className="checkout-button" type="submit">Pay {cartTotal}</button>
      <div className="outcome">
        <div className="error"></div>
        <div className="success">
          Success! Payment complete, please find your order no: <span className="token"></span>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
