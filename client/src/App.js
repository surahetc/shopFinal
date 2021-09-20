import Login from './components/Login'
import Cart from './components/Cart'
import Admin from './components/Admin'
import Wishlist from './components/Wishlist'
import Products from './components/Products'
import Header from './components/Header'
import {Route,Switch} from 'react-router-dom'
import Register from './components/Register'
import './App.css';
import React from 'react'


function App() {





  return (
    <div className="app">
      
      <Header />
      <Switch>
        <Route exact path="/" component={Products}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/admin" component={Admin}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/wishlist" component={Wishlist}></Route>
      </Switch>
    </div>
    
  );
}

export default App;
