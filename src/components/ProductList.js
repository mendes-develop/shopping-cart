import React from 'react'
import Product from './Product'

export default class ProductList extends React.Component{

//Renders ProductList container and loops through the Data colected in its parent component
  render(){
    return (
      <div className='py-5'>
        <div className='container'>
          <h3>Our Products</h3>
          <div className='row'>
            { this.props.products.map(product => <Product key={product.id} product={product} handleDetail={this.props.handleDetail} addToCart={this.props.addToCart}/>) }
          </div>
        </div>
      </div>

    )
  }
}
