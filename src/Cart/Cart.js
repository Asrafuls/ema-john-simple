import React from 'react';
import './cart.css'

const Cart = (props) => {
    const cart = props.orderdItems;
    let orderTotal = 0;
    console.log(props.orderdItems);

    for (let i = 0; i < cart.length; i++) {
        const total = cart[i];
        orderTotal = orderTotal + total.price;
    }

    return (
        <div className="cartOption">
            <h2 id="order_summary">Order Summary</h2>
            <p id="orderd_itrms">Orderd Items: <b>{props.orderdItems.length}</b></p><br />
            {/* <span id="items">Items: <b>{items.length}</b></span><br />
            <span id="shipping">Shipping: <b>{shipping.length}</b></span><br />
            <span id="Total-tax">Total Tax: <b>{totalTax.length}</b></span><br />
            <span>Estimate Tax: <b>{estimateTax.length}</b></span><br />*/}
            <h3>Order Total: <b>{orderTotal}</b></h3><br />
            {/*<button id="add_to_cart"> Review Your Order</button> */}
        </div>
    );
};

export default Cart;