import '@fortawesome/fontawesome-free/css/all.css';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {

  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () => {
      header.classList.toggle("sticky", window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    let menu = document.querySelector('.menu-icon');
    let navlist = document.querySelector('.navlist');

    const handleMenuClick = () => {
      menu.classList.toggle('bx-x');
      navlist.classList.toggle('active');
    };

    const handleMenuScroll = () => {
      menu.classList.remove('bx-x');
      navlist.classList.remove('active');
    };

    menu.addEventListener('click', handleMenuClick);
    window.addEventListener('scroll', handleMenuScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      menu.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleMenuScroll);
    };
  }, []);

  const closeMenu = () => {
    let navlinks = document.querySelectorAll('.navlist .navlink');
    navlinks.forEach(link => {
      link.addEventListener('click', () => {
        let navlist = document.querySelector('.navlist');
        navlist.classList.remove('active');
      });
    });
  };

  useEffect(() => {
    closeMenu();
  }, []);

  return (
    <header>
      <a href='#' className='logo'></a>
      <div className='menu-icon'>
        <i className='fas fa-bars'></i>
      </div>
      <ul className='navlist'>
        <li>
          <Link to={'/home'} className='navlink'>Home</Link>
        </li>
        <li>
          <Link to={'/about'} className='navlink'>About</Link>
        </li>
        <li>
          <Link to={'/skills'} className='navlink'>Skills</Link>
        </li>
        <li>
          <Link to={'/portfolio'} className='navlink'>Portfolio</Link>
        </li>
        <li>
          <Link to={'/contact'} className='navlink'>Contact</Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
