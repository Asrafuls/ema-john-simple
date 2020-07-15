import React from 'react';
import './Product.css'

const Product = (props) => {
    const floatLeft = {
        float: "left",
    }
    const floatRight = {
        float: "left",
        marginLeft: "260px"
    }
    const homeProductStyle = {
        display: "block"
    }
    const { img, url, name, seller, price, stock, features } = props.product;
    console.log("Full products", props.product);
    return (

        <div className="home_product" style={homeProductStyle}>

            <div className="home_product_left_images">
                <img src={img} alt="" />
            </div>
            <div className="home_product_right_content">
                <a href={url}><h2 className="home_product_right_content_title">{name}</h2></a>
                <span>By: {seller}</span><br></br><br></br>
                <div className="price_stock_add" style={floatLeft}>
                    <p className="price">$ {price}</p>
                    <p className="stock">only {stock} left in stock - order soon</p>
                    <button id="add_to_cart" onClick={() => props.clickdAddToCartBtn(props.product)}>
                        <svg width=".9em" height=".9em" viewBox="0 0 16 16" class="bi bi-cart-fill cart_img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                        <span> Add To Cart</span>
                    </button>
                </div>
                <div className="star_features" style={floatRight}>
                    <div className="star">
                        <img src="https://img.icons8.com/office/16/000000/filled-star.png" />
                        <img src="https://img.icons8.com/office/16/000000/filled-star.png" />
                        <img src="https://img.icons8.com/office/16/000000/filled-star.png" />
                        <img src="https://img.icons8.com/office/16/000000/filled-star.png" />
                        <img src="https://img.icons8.com/office/16/000000/star-half-empty.png" />
                    </div>
                    <div className="features">
                        <h4>Features</h4>
                        {/* {
                            features.description.map(featuresDescription => <li>{featuresDescription}</li>)
                        } */}
                    </div>
                </div><br /><br />
            </div>
        </div>
    );
};

export default Product;