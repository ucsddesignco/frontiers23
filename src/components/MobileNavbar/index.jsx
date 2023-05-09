import { useState } from 'react'
import './styles.scss'

import DcoLogo from '../../assets/images/dco_logo.svg';
import HamburgerMenu from '../../assets/images/hamburgerMenu.svg';
import CloseButton from '../../assets/images/close-button.svg';
import PaperAirplane from '../../assets/images/paper_airplane.svg';
import WindowNavbar from '../WindowNavbar';

function MobileNavbar({refs, windowInfo, handleTransition, handleSections, sectionTops}) {
  const [openMenu, setOpenMenu] = useState(false);
  const openLink = () => {
    document.getElementById('arrow-right').classList.add('animate-click')
		setTimeout(() => {window.open('https://forms.gle/aGnQraeJjjvx29mF8', '_blank'), document.getElementById('arrow-right').classList.remove('animate-click')}, 300)
	}
  return (
    <>
    <nav className="mobile-navbar" aria-expanded={openMenu}>
      <ul className='normal-navbar'>
        <li>
          <a href="">
            <img width={30} height={30} src={DcoLogo} alt="Design Co Logo" />
          </a>
        </li>
        <li>
            {openMenu ? <img width={25} height={25} onClick={() => setOpenMenu(false)} src={CloseButton} alt="" /> :<img width={25} height={25} onClick={() => setOpenMenu(true)} src={HamburgerMenu} alt="" />}
        </li>
        
      </ul>
      {openMenu ? 
        <ul className="expanded-navbar" >
          <WindowNavbar windowInfo={windowInfo} setOpenMenu={setOpenMenu} refs={refs} handleTransition={handleTransition} handleSections={handleSections} sectionTops={sectionTops}/>
          <li>
            <div role='link'
                className='register-button'
                onClick={openLink}
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
            </div>
          <img className='paper-airplane' src={PaperAirplane} alt="Paper Airplane" />
          </li>
        </ul> : null}
    </nav>
    </>
  )
}

export default MobileNavbar