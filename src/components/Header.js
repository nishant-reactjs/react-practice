import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

  const amount = useSelector(state => state.amount)
  
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/darkmode'>
          Navbar
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/loadmore'>
                LoadMore
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/readmore'>
                Read More
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/darkmode'>
                Dark Mode
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/LifeCycle'>
                Life Cycle
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/twoapi'>
                Two Api
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/searchfilter'>
                Search Filter
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/otp-login'>
                Otp-login
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/cartdemo'>
              Cart
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/ReduxHome'>
              Redux
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/todo'>
              todo
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/movie'>
              Movie
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary me-4">{amount}</button>
      </nav>
    </>
  );
};

export default Header;
