import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';
import { useAuth } from '../Login/useAuth';
import './cart.css';

const Cart = (props) => {
    function round(property) {
        const rounding = property.toFixed(2);
        return (rounding)
    }

    const user = useContext(UserContext)

    const cart = props.orderdItems;
    // let orderTotal = 0;
    // console.log(user);

    const orderTotal = cart.reduce((orderTotal, product) => orderTotal + product.price * product.quantaty, 0)
    let shipping = 0;
    if (orderTotal < 15) {
        shipping = 0;
    } else if (orderTotal > 0) {
        shipping = 12.99;
    } else if (orderTotal > 15) {
        shipping = 9.99;
    }



    const estimateTax = orderTotal / 10;

    let TotalTaxBeforeShippingAndTax = orderTotal;
    // for (let i = 0; i < cart.length; i++) {
    //     const total = cart[i];
    //     orderTotal = orderTotal + total.price;
    // }
    const fullPrice = round(orderTotal + shipping + estimateTax)
    return (
        <div className="cartOption">
            <h2 id="order_summary">Order Summary</h2>
            <p id="orderd_itrms">Orderd Items: <b> {props.orderdItems.length}</b></p><br />
            {/* <span id="items">Items: <b>$ {items.length}</b></span><br />*/}
            <span id="shipping">Shipping: <b>$ {shipping}</b></span><br />
            <span id="Total_tax_before_shipping_and_tax"><small>Before shipping and tax:</small><b>$ {round(TotalTaxBeforeShippingAndTax)}</b></span><br />
            <span>Estimate Tax: <b>$ {round(estimateTax)}</b></span><br />
            <h3 className="cartTotalPrice">Order Total: <b>$ {fullPrice}</b></h3><br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;