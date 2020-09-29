import React from 'react';
import { useAuth } from '../Login/useAuth';
import logo from './../images/logo.png';

const Header = () => {
    const auth = useAuth()
    
    return (
        <div>

            <header className="ema-john-app-header">
                <div className="logo" style={{ textAlign: 'center', width: "285px", margin: "0 auto" }}>
                    <img src={logo} alt="" />
                    {/* <h2>Count: {count}</h2><span>Previous: {previous}</span>
                    <br />
                    <button style={{width: '40px', padding: '6px', marginRight: '10px', marginTop: '5px', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', }} onClick={() => setCount(count + 1)}>+</button>
                    <button style={{width: '40px', padding: '6px', marginTop: '5px', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', }} onClick={() => setCount(count - 1)}>-</button> */}
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="shop">Shop</a></li>
                        <li><a href="review">Order Review</a></li>
                        <li><a href="orderHistory">Order History</a></li>
                        <li><a target="blank" href="https://asrafulweb.com">AsrafulWeb</a></li>
                        <li style={{ float: 'right', marginRight: '30px', marginTop: '10px' , marginBottom: '0' }}>{auth.user ? <div style={{ color: '#fff', display: 'flex', width: '' }}><img style={{ width: '35px', height: '35px', borderRadius: '50%', marginTop: '-7px', marginRight: '5px' }} src={auth.user.photo} alt="" /><span>{auth.user.name}</span> <a onClick={auth.singOut} style={{ marginLeft: '20px', marginTop: '-12px', cursor: 'pointer' }}>Sign Out</a></div> : <a style={{ cursor: 'pointer' }} href="/login"><span>Sign In</span></a>}</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;