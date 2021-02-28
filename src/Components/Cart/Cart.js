import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const formatNumber = num => (Number(num.toFixed(2)))

    const cart = props.cart
    const total = formatNumber(cart.reduce((total, prd) => total + prd.price, 0));
    const shippingCost = total > 35 ? 0 : total > 15 ? 4.99 : 12.99;
    const tax = formatNumber(total / 10);
    const grandTotal = formatNumber(total + shippingCost + tax)


    return (
        <div id="cart">
            <h3>Order Summary</h3>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p>Tax & Vat: {tax}</p>
            <p><small>Shipping Cost: {shippingCost}</small></p>
            <p>Total Cost: {grandTotal}</p>

            <p id="dev"><small>Developed by Ishtiak Ahmed</small></p>
        </div>
    );
};

export default Cart;