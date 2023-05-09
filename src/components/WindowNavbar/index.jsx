import { useState } from 'react';

function WindowNavbar({
  refs,
  windowInfo,
  handleTransition,
  handleSections,
  setOpenMenu = null
}) {
  const [timeoutId, setTimeoutID] = useState();

  function beforeNavigation(index) {
    setOpenMenu ? setOpenMenu(false) : null;
    if (index == 4) {
      handleTransition.handleFadeIn();
    }
  }

  function tempScrolling(index) {
    clearTimeout(timeoutId);
    handleSections.setIsScrolling(true);
    handleSections.setCurrentSection(index);
    setTimeoutID(
      setTimeout(() => {
        handleSections.setIsScrolling(false);
      }, 600)
    );
  }


  return (
    <>
      <li>
        <a
          className={handleSections.currentSection == 0 ? 'active' : ''}
          onClick={() => {
            beforeNavigation(handleSections.currentSection);
            tempScrolling(0);
            // tempRemoveScroll({current: currentSection, scrollTo: 0});
            refs.containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
            refs.videoRef.current.style.transform = `translateY(0%)`;
            refs.logoRef.current.style.transform = `scale(1) translate(0)`;
            refs.windowBorderRef.current.style.transform = `scale(1) translate(0)`
          }}
        >
          HOME
        </a>
      </li>
      <li>
        <a
          className={handleSections.currentSection == 1 || handleSections.currentSection == 2 ? 'active' : ''}
          onClick={() => {
            beforeNavigation(handleSections.currentSection);
            tempScrolling(1);
            refs.containerRef.current?.scrollTo({ top: 817, behavior: 'smooth' });
            refs.videoRef.current.style.transform = `translateY(-25%)`;
            refs.logoRef.current.style.transform = `scale(0.25) translate(-8vw, -20rem)`;
            refs.windowBorderRef.current.style.transform = `scale(${windowInfo.windowScale}) translateY(-${(windowInfo.initWindowHeight + windowInfo.windowHeightOffset)}px)`
          }}
        >
          FAQ
        </a>
      </li>
      <li>
        <a
          className={handleSections.currentSection == 3 ? 'active' : ''}
          onClick={() => {
            beforeNavigation(handleSections.currentSection);
            tempScrolling(3);
            refs.containerRef.current?.scrollTo({ top: 2451, behavior: 'smooth' });
            refs.videoRef.current.style.transform = `translateY(-75%)`;
            refs.logoRef.current.style.transform = `scale(0.25) translate(-8vw, -20rem)`;
            refs.windowBorderRef.current.style.transform = `scale(${windowInfo.windowScale}) translateY(-${(windowInfo.initWindowHeight + windowInfo.windowHeightOffset)}px)`
          }}
        >
          TIMELINE
        </a>
      </li>
      {document.body.clientWidth < 601 ? null : <li>
        <a
          className={handleSections.currentSection == 4 ? 'active' : ''}
          onClick={() => {
            handleTransition.handleFadeOut();
            tempScrolling(4);
            refs.containerRef.current?.scrollTo({ top: 3519, behavior: 'smooth' });
            // videoRef.current.style.transform = `translateY(-75%)`;
            refs.logoRef.current.style.transform = `scale(0.25) translate(-8vw, -20rem)`;
          }}
        >
          Register
        </a>
      </li>}
    </>
  );
}

export default WindowNavbar;
