import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const { ProductDetail } = useParams();
    const product = fakeData.find(pd => pd.key === ProductDetail)
    // const { img, name, price, seller, features, stock, } = product;
    return (
        <div className="container productFullDetails">
            <Product ShowHideAddToCartBtn={false} product={product}></Product>

            
            {/* <img src={img} alt="" />
            <h2>{name}</h2>
            <p className="productFullDetailsPrice"><b>Price: </b>{price}$ </p>
            <span>{seller}</span>
            <p className="availableProduct">Available: <b>{stock}</b> Pec</p> */}
        </div>
    );
};

export default ProductDetails;