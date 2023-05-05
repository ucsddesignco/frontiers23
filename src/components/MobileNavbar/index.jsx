import React from 'react'
import './styles.scss'

import DcoLogo from '../../assets/images/dco_logo.svg';
import HamburgerMenu from '../../assets/images/hamburgerMenu.svg';

function MobileNavbar() {
  return (
    <nav className="mobile-navbar">
      <ul>
        <li>
          <a href="">
            <img src={DcoLogo} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={HamburgerMenu} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNavbar