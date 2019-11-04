import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

class Navbar extends React.Component {

  render(){
    return (
      <nav className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
        < Link to='/'>
          <img src={logo} alt='home'/>
        </Link>
        <ul className='navbar-nav align-tems-center'>
          <li classname='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              Products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <button>
            <i className='fas fa-cart-plus' />
             My Cart
          </button>
        </Link>
      </nav>
    )
  }
}

export default Navbar
