import Link from 'next/link';
import React from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import CloseIcon from './CloseIcon';
import MenuIcon from './MenuIcon';

const Navbar = () => {
  const { width } = useWindowSize();

  const [showMenu, setShowMenu] = React.useState(false);

  console.log({ showMenu });

  if (width && width > 500) {
    return (
      <nav className='desktopNav'>
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
  }

  return (
    <nav className='mobileNav'>
      <div className='navMenuContainer'>
        <div className='logo'>
          <img src='./images/logo.svg' alt='logo' />
        </div>
        <button onClick={() => setShowMenu(!showMenu)}>{showMenu ? <CloseIcon /> : <MenuIcon />}</button>
      </div>

      {width && width > 500 ? null : (
        <ul style={{ height: showMenu ? 180 : 0 }}>
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
      )}
    </nav>
  );
};

export default Navbar;
