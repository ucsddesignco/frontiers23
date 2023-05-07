import React, { useState } from 'react'
import './styles.scss'

import DcoLogo from '../../assets/images/dco_logo.svg';
import HamburgerMenu from '../../assets/images/hamburgerMenu.svg';

function MobileNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
    <nav className="mobile-navbar">
      <ul>
        <li>
          <a href="">
            <img src={DcoLogo} alt="" />
          </a>
        </li>
        <li>
            <img onClick={() => setOpenMenu(!openMenu)} src={HamburgerMenu} alt="" />
        </li>
      </ul>
      {openMenu ? <div>wahoo</div> : null}
    </nav>
    </>
  )
}

export default MobileNavbar