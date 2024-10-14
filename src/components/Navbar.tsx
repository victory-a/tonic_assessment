import Link from 'next/link';
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
          <Link href='/'>Products</Link>
        </li>
        <li>
          <Link href='/'>Services</Link>
        </li>
        <li>
          <Link href='/'>About</Link>
        </li>
        <li>
          <Link className='loginBtn button-primary ' href='/'>
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
