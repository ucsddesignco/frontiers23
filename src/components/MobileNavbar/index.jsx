import React, { useState } from 'react'
import './styles.scss'

import DcoLogo from '../../assets/images/dco_logo.svg';
import HamburgerMenu from '../../assets/images/hamburgerMenu.svg';
import CloseButton from '../../assets/images/close-button.svg';
import PaperAirplane from '../../assets/images/paper_airplane.svg';

function MobileNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
    <nav className="mobile-navbar" aria-expanded={openMenu}>
      <ul className='normal-navbar'>
        <li>
          <a href="">
            <img src={DcoLogo} alt="" />
          </a>
        </li>
        <li>
            {openMenu ? <img onClick={() => setOpenMenu(false)} src={CloseButton} alt="" /> :<img onClick={() => setOpenMenu(true)} src={HamburgerMenu} alt="" />}
        </li>
        
      </ul>
      {openMenu ? 
        <ul className="expanded-navbar" >
          <li >HOME</li>
          <li >FAQ</li>
          <li >TIMELINE</li>
          <li role='link'
                className='register-button'
                onClick={() => window.open('https://www.google.com/search?q=svw+vs+vw+react&rlz=1C1CHBF_enUS1013US1013&oq=svw+vs+vw+react&aqs=chrome..69i57j33i160l3.4931j0j7&sourceid=chrome&ie=UTF-8', '_blank')}
                aria-label='Open registration form in new tab.'
                
              >
                REGISTER FOR
                <br />
                DESIGN FRONTIERS
                <svg
                  fill='black'
                  height={60}
                  width={60}
                  viewBox='0 0 490 490'
                  id='arrow-right'
                >
                  <g>
                    <polygon points='247.773,8.081 175.407,82.05 295.118,199.145 0,199.145 0,306.14 279.496,306.14 175.407,407.949 247.773,481.919 490,245.004' />
                  </g>
                </svg>
          </li>
          <img className='paper-airplane' src={PaperAirplane} alt="Paper Airplane" />
        </ul> : null}
    </nav>
    </>
  )
}

export default MobileNavbar