import React from 'react';
import './App.css';
import Shop from './Shop/Shop';
import Footer from './Footer/Footer';
import Header from './Header/Header'
import Review from './Review/Review';
import Error from './Error/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetails from './ProductDetails/ProductDetails';
import Search from './Search/Search';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
            <Search></Search>
            <Shop></Shop>
          </Route>
          <Route path="/Review">
            <Review></Review>
          </Route>
          <Route exact path="/">
            <Search></Search>
            <Shop></Shop>
          </Route>
          <Route exact path="/product/:ProductDetail">
            <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;