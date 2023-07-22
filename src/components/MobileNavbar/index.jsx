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
        </ul> : null}
    </nav>
    </>
  )
}

export default MobileNavbar