import React, { useState } from 'react';
import fakeData from '../fakeData';
import './shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const just12Item = fakeData.slice(0, 12);
  const [outPutJust12Item, setOutPutJust20Item] = useState(just12Item);
  
  const [orderdItems, inOrderdItrms] = useState([])
  const [items, inItrms] = useState([])
  const [shipping, inShipping] = useState([])
  const [totalTax, inTotalTax] = useState([])
  const [estimateTax, inEstimateTax] = useState([])
  const [orderTotal, inOrderTotal] = useState([])

  const clickdAddToCartBtn = (AddToCartBtnWork) => {
    console.log("clickdAddToCartBtn---Result", AddToCartBtnWork);
    const inOrderdItrmsValue = [...orderdItems, AddToCartBtnWork]
    inOrderdItrms(inOrderdItrmsValue)
    
  }


  return (
    <div id="productSection">
      <div id="fullProductSection">
        {
          outPutJust12Item.map(products => <Product product={products} clickdAddToCartBtn={clickdAddToCartBtn}></Product>)
        }
      </div>
      <Cart orderdItems={orderdItems} items={items} shipping={shipping} totalTax={totalTax} estimateTax={estimateTax} orderTotal={orderTotal}></Cart>
    </div>
  );
};

export default Shop;