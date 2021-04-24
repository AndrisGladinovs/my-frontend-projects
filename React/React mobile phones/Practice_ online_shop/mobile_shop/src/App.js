import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import ProductsList from './components/productsList/ProductsList';
import Add from './components/add/Add';
import Cart from './components/cart/Cart';
import ProductView from './components/productView/ProductView';



function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={ProductsList} />
          <Route path="/products/:id" component={ProductView} />
          <Route path="/add" component={Add} />
          <Route path="/cart" component={Cart} />
          <Route path="*" render={() => <div style={{ color: 'red' }}>404 not found</div>} />
        </Switch>
      </div>
    </div>
  );
}


export default App;
