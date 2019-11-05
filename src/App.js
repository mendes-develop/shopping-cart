import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'
import { storeProducts , detailProduct } from './data'


export default class App extends React.Component {

  state = {
    products: [],
    detailProduct: null
  }

  // selected product to be displayed
  handleDetail = () => {
    console.log('More Details')
    // this.setState({detailProduct})
  }

  addToCart = () => {
    console.log('Add To Cart')
    // this.setState({detailProduct})
  }

  render(){
    return (
        <div>
          <Navbar/>
          <Switch>
            <Route exact path='/' render={(props) => <ProductList {...props} products={this.state.products} handleDetail={this.handleDetail} addToCart={this.addToCart}/>}/>
            <Route path='/details' render={(props) => <Details {...props}/>}/>
            <Route path='/cart' render={(props) => <Cart {...props}/>}/>
            <Route component={Default}/>
          </Switch >
        </div>
    )
  }

  // Perform FETCH from the DATABASE
  componentDidMount(){
    this.setState({products: storeProducts})
  }

}
