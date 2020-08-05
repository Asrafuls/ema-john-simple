import React, { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../utilities/databaseManager';
import { useEffect } from 'react';
import fakeData from '../fakeData';
import AllCartItems from '../AllCartItems/AllCartItems';
import Cart from '../Cart/Cart';
import "./Review.css";
import happyImages from "../images/giphy.gif"

const Review = () => {
    const [cart, setCart] = useState([]);
    const [happyImg, setHappyImg] = useState(false);
    const handalePlaceOrder = () => {
        setCart([])
        setHappyImg(true)
        processOrder()
    }

    const removeFromCart = (productz) => {
        const newCart = cart.filter(pd => pd.key !== productz)
        setCart(newCart)
        removeFromDatabaseCart(productz)
    }
    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart();
        const getKeys = Object.keys(savedCart);
        const cartProduct = getKeys.map(key => {
            const pd = fakeData.find(keyz => keyz.key === key)
            pd.quantaty = savedCart[key];
            return (pd)
        })
        setCart(cartProduct)
    }, [])

    let happyImgUrl;
    if (happyImg) {
        happyImgUrl = <img src={happyImages} alt="" />
    }

    return (

        <div className='review'>
            <div className="reviewCartItems">
                {
                    cart.map(pd => <AllCartItems
                        product={pd}
                        removeFromCart={removeFromCart}
                        key={pd.key}
                    ></AllCartItems>)
                }
                {happyImgUrl}
            </div>
            <div className="reviewCartChackOut">
                <Cart orderdItems={cart}>
                    <button onClick={handalePlaceOrder} id="add_to_cart" style={{ marginLeft: "40px" }}> Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;