import React, { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from './../../utilities/databaseManager';
import { useEffect } from 'react';
import AllCartItems from '../AllCartItems/AllCartItems';
import Cart from '../Cart/Cart';
import "./Review.css";
import happyImages from "../images/giphy.gif"
import fakeData from '../../fakeData';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {

    const auth = useAuth()
    const [cart, setCart] = useState([]);
    const [happyImg, setHappyImg] = useState(false);
    const handlePlaceOrder = () => {
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
                {
                    !cart.length && <div style={{ width: '400px', margin: '0 auto', textAlign: 'center' }} className="noProductInCart">
                        <br />
                        <h2>Not have any product in your cart</h2>
                        <br /><br />
                        <a style={{ padding: '5px 15px 10px 15px', background: '#F0C14B', color: '#fff', borderRadius: '3px', fontSize: '18px', border: '1px solid #797979' }} href="/">continue shopping</a>
                    </div>
                }
            </div>

            {
                    cart.length && 
            <div style={{ marginBottom: '20px' }} className="reviewCartChackOut">
                    <Cart orderdItems={cart}>
                        <Link to='checkout'>
                            {
                                auth.user ?
                                    <button id="add_to_cart" style={{ marginLeft: "23px" }}>Proceed to checkout</button>
                                    :
                                    <button id="add_to_cart" style={{ marginLeft: "23px" }}>Login to checkout</button>
                            }
                        </Link>
                    </Cart>
            </div>
                }

        </div>
    );
};

export default Review;