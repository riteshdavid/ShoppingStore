import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useSelector } from 'react-redux';


export const Navbar = () => {

  const name = useSelector((store) => store.cart.cartItems);
  return (
     <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light lh-lg fixed-top" style={{paddingTop:'1rem'} }>
  <div className="container-fluid">
    <Link to="/" className="navbar-brand bg-info rounded-pill fw-bolder fst-italic text-light" >Shopping</Link>
    <Link to="cart" className='fs-3 position-relative ms-5 float-end' > 
     <span><i class="fa-solid fa-cart-arrow-down"></i></span>
     <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-success fs-6">
    {name.length}
    <span class="visually-hidden">unread messages</span>
    </span>

    </Link>
  
  


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" >Profile</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item">Men</Link></li>
            <li><Link className="dropdown-item">Women</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item">Children</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" tabindex="-1" aria-disabled="true">Login</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
     </>   
    
  )
}

