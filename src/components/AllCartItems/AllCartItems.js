import React from 'react';
import { Link } from 'react-router-dom';

const AllCartItems = (props) => {
    function round(property) {
        const rounding = property.toFixed(2);
        return (rounding)
    }
    const { name, key, img, quantaty, price, } = props.product;
    const TotalPrice = round(price * props.product.quantaty);
    return (
        <div className="allCartItem">
            <img className="allCartItemsLeft" src={img} alt="" />
            <div className="allCartItemsRight">
                <Link to={"/product/" + key}><h2 className="">{name}</h2></Link>
                <p className="allCartItemsRightPrice">Price: $ {price}</p>
                <span>Items Added: <strong><input className="form_control_in_review" type="text" value={quantaty} /></strong> Pec</span>
                <p className="allCartItemsRightTotalPrice">Total {quantaty} pec Price: <strong>$ {TotalPrice}</strong></p>
                <button id="add_to_cart" onClick={() => props.removeFromCart(key)}>
                    <span> Remove from Cart</span>
                </button>
                <div className="allCartItemsRightFeatures">
                    <h3>Features:</h3>
                    {/* {
                        features.map(mp => <li>{features}</li>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default AllCartItems;