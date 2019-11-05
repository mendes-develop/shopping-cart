import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default class Product extends React.Component {

  render(){
    const {id, title, img, price, inCart} = this.props.product

    return (
      <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className='card'>
          <div className='img-container p-5' onClick={this.props.handleDetail}>
            <Link to='/details'>
              <img src={img} alt='Product' className='card-img-top'/>
            </Link>
            <button className='cart-btn' disabled={inCart ? true : false} onClick={this.props.addToCart}>
              {inCart ? <p className='text-capitalize mb-0' >in cart</p> : <i className='fas fa-cart-plus'/>}
            </button>
          </div>
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>{title}</p>
            <h5 className='text-blue font-italic mb-0'>
              $<span className="mr-1">{price}</span>.00
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div`

`
