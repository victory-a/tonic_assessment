import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='footerLeft'>
        <div className='logo'>
          <img src='./images/logo.svg' alt='logo' />
          <p>Boldo</p>
        </div>
        <p className='date'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
        <p className='date'>All rights reserved.</p>
      </div>
      <div className='footerRight'>
        <dl>
          <dt>Landings</dt>
          <dd className='date'>
            <a href=''>Products</a>
          </dd>
          <dd className='date'>
            <a href=''>Home</a>
          </dd>
          <dd className='date'>
            <a href=''>Services</a>
          </dd>
        </dl>
        <dl>
          <dt>Company</dt>
          <dd className='date'>
            <a href=''>Home</a>
          </dd>
          <dd className='date'>
            <a href=''>Career </a>
            <span className='hiringBadge'>Hiring!</span>
          </dd>
          <dd className='date'>
            <a href=''>Services</a>
          </dd>
        </dl>
        <dl>
          <dt>Resources</dt>
          <dd className='date'>
            <a href=''>Blog</a>
          </dd>
          <dd className='date'>
            <a href=''>Products</a>
          </dd>
          <dd className='date'>
            <a href=''>Services</a>
          </dd>
        </dl>
      </div>
    </footer>
  );
};

export default Footer;
