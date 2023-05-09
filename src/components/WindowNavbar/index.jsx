import { useState } from "react";

function WindowNavbar({currentSection,setisScrolling, setcurrentSection, handleFadeIn, handleFadeOut, containerRef, videoRef, logoRef,}) {
  const [timeoutId, setTimeoutID] = useState();

    function beforeNavigation(index) {
        if (index == 4) {
          handleFadeIn();
        }
      }
    
      function tempScrolling(index) {
        clearTimeout(timeoutId);
        setisScrolling(true);
        setcurrentSection(index);
        setTimeoutID(
          setTimeout(() => {
            setisScrolling(false);
          }, 600)
        );
      }

    return (
    <nav className="navbar">
          <ul>
            <li>
              <a
                className={currentSection == 0 ? 'active' : ''}
                onClick={() => {
                  beforeNavigation(currentSection);
                  tempScrolling(0);
                  // tempRemoveScroll({current: currentSection, scrollTo: 0});
                  containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                  videoRef.current.style.transform = `translateY(0%)`;
                  logoRef.current.style.transform = `scale(1) translate(0)`;
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={
                  currentSection == 1 || currentSection == 2 ? 'active' : ''
                }
                onClick={() => {
                  beforeNavigation(currentSection);
                  tempScrolling(1);
                  containerRef.current?.scrollTo({ top: 817, behavior: 'smooth' });
                  videoRef.current.style.transform = `translateY(-25%)`;
                  logoRef.current.style.transform = `scale(0.25) translate(-8vw, -20rem)`;
                }}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/#page-4"
                className={currentSection == 3 ? 'active' : ''}
                onClick={() => {
                  beforeNavigation(currentSection);
                  tempScrolling(3);
                  containerRef.current?.scrollTo({ top: 2451, behavior: 'smooth' });
                  videoRef.current.style.transform = `translateY(-75%)`;
                  logoRef.current.style.transform = `scale(0.25) translate(-8vw, -20rem)`;
                }}
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                href="/#page-5"
                className={currentSection == 4 ? 'active' : ''}
                onClick={() => {
                  handleFadeOut();
                  tempScrolling(4);
                  containerRef.current?.scrollTo({ top: 3519, behavior: 'smooth' });
                  // videoRef.current.style.transform = `translateY(-75%)`;
                  logoRef.current.style.transform = `scale(0.25) translate(-8vw, -20rem)`;
                }}
              >
                Register
              </a>
            </li>
          </ul>
        </nav>)
}

export default WindowNavbar;