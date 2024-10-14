import React from 'react';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='logo'>
        <img src='./images/logo.svg' alt='logo' />
        <p>Boldo</p>
      </div>
      <ul>
        <li>
          <a href='/'>Products</a>
        </li>
        <li>
          <a href='/'>Services</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <a className='loginBtn button-primary ' href='/'>
            Log In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
