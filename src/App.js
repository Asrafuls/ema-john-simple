import React, { createContext, useState } from 'react';
import './App.css';
import Shop from './components/Shop/Shop';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Review from './components/Review/Review';
import Error from './components/Error/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Search from './components/Search/Search';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { AuthProvider, PrivateRoute, useAuth } from './components/Login/useAuth';
import Checkout from './components/Checkout/Checkout';
import OrderHistory from './components/OrderHistory/OrderHistory';
import Login2 from './components/Login/Login2';
import fakeData from './fakeData';

export const UserContext = createContext()

function App() {
  // const auth = useAuth();
  
  const [searchedData , setSearchedData] = useState([])


  return (
    <div className="App">
      <AuthProvider>
        <Header/>
        <Router>
          <Switch>
            <Route path="/shop">
              <Search searchedData={searchedData} setSearchedData={setSearchedData}/>
              <Shop/>
            </Route>
            <Route path="/Review">
              <Review/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/loginForCheckout">
              <Login2/>
            </Route>
            <PrivateRoute path="/checkout">
              <Checkout/>
            </PrivateRoute>
            <Route path='/pt'>
              <Checkout/>
            </Route>
            <Route path='/orderHistory'>
              <OrderHistory/>
            </Route>
            <Route exact path="/">
              <Search/>
              <Shop/>
            </Route>
            <Route exact path="/product/:ProductDetail">
              <ProductDetails />
            </Route>
            <Route path="*">
              <Error/>
            </Route>
          </Switch>
        </Router>
        <Footer/>
      </AuthProvider>
    </div>
  );
}




//     ________________________________________________________
//    |        ___                                             |
//    |       /   \                                            |
//    |      /     \                                           |
//    |     /  / \  \                                          |
//    |    /  /___\  \                                         |
//    |   /  _______  \                                        |
//    |  /  /       \  \                                       |
//    | /__/         \__\                                      |
//    |________________________________________________________|
export default App;