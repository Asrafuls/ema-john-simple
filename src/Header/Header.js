import React from 'react';
import logo from './../images/logo.png';

const Header = () => {
    return (
        <div>
            
            <header className="ema-john-app-header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="shop">Shop</a></li>
                        <li><a href="review">Order Review</a></li>
                        <li><a href="manage">Manage Inventory here</a></li>
                        <li><a href="https://asrafulweb.com">AsrafulWeb</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;