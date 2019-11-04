import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Navbar'


function App() {
  return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route path='/details' component={Details}/>
          <Route path='/cart' component={Cart}/>
          <Route component={Default} />
        </Switch >
      </>
  )
}

export default App;
