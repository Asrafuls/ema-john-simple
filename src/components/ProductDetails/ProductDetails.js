import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';


const ProductDetails = () => {
    const { ProductDetail } = useParams();
    const product = fakeData.find(pd => pd.key === ProductDetail)
    
    console.log(product)
    return (
        <div className="container productFullDetails">
            <Product ShowHideAddToCartBtn={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;