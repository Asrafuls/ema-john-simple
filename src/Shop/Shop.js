import React, { useState, useEffect } from 'react';
import fakeData from '../fakeData';
import './shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../utilities/databaseManager';

const Shop = () => {

  // data from localstorage
  // data from localstorage
  const just12Item = fakeData.slice(0, 12);
  const [outPutJust12Item, setOutPutJust20Item] = useState(just12Item);

  const [orderdItems, inOrderdItrms] = useState([]);
  //const [orderTotal, inOrderTotal] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart()
    const productKeys = Object.keys(savedCart)
    const prevusCart = productKeys.map( exestingKey => {
      const product = fakeData.find(pd => pd.key === exestingKey)
      product.quantaty = savedCart[exestingKey]
      return product;
    })

    inOrderdItrms(prevusCart)
  } , [])





  const clickdAddToCartBtn = (AddToCartBtnWork) => {
    const toBeAddedKey = AddToCartBtnWork.key;
    const sameProduct = orderdItems.find(pd => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;

    if(sameProduct){
      count = sameProduct.quantaty + 1;
      sameProduct.quantaty = count;
      const others = orderdItems.filter(pd => pd.key !== toBeAddedKey)
      newCart = [...others, sameProduct]
    }else{
      AddToCartBtnWork.quantaty = 1;
      newCart = [...orderdItems, AddToCartBtnWork]
    }
    inOrderdItrms(newCart)
    addToDatabaseCart(AddToCartBtnWork.key, count)
  }

  return (
    <div id="productSection">
      <div id="fullProductSection">
        {
          outPutJust12Item.map(products => <Product
            key={products.key}
            ShowHideAddToCartBtn={true}
            product={products}
            clickdAddToCartBtn={clickdAddToCartBtn}
          ></Product>)
        }
      </div>
      <div className="smallProductSection">
        <Cart orderdItems={orderdItems}>
          <Link to="/review"><button id="add_to_cart" style={{marginLeft: "12px"}}> Review Your Order</button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;