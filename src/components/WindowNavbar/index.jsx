import { useState } from 'react';

function WindowNavbar({
  refs,
  windowInfo,
  handleTransition,
  handleSections,
  setOpenMenu = null,
  sectionTops
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
    if (index == 0) {
      refs.sponsorRef.current.style.opacity = "1";
    } else {
      refs.sponsorRef.current.style.opacity = "0";
    }
    handleSections.setIsScrolling(true);
    handleSections.setCurrentSection(index);
    setTimeoutID(
      setTimeout(() => {
        handleSections.setIsScrolling(false);
      }, 600)
    );
  }

  const mobileView = document.body.clientWidth < 601;

  return (
    <>
      <li 
        onClick={() => {
            beforeNavigation(handleSections.currentSection);
            tempScrolling(0);
            refs.containerRef.current?.scrollTo({ top: sectionTops[0], behavior: 'smooth' });
            refs.videoRef.current.style.transform = `translateY(0%)`;
            refs.logoRef.current.style.transform = `scale(1) translate(0)`;
            refs.windowBorderRef.current.style.transform = `scale(1) translate(0)`
          }}>
        <a
          className={handleSections.currentSection == 0 ? 'active' : ''}
          
        >
          HOME
        </a>
      </li>
      <li
        onClick={() => {
          beforeNavigation(handleSections.currentSection);
          tempScrolling(1);
          refs.containerRef.current?.scrollTo({ top: sectionTops[1], behavior: 'smooth' });
          refs.videoRef.current.style.transform = `translateY(-25%)`;
          refs.logoRef.current.style.transform = `scale(0.25) translate(-8vw, -28rem)`;
          if (mobileView) {
            refs.windowBorderRef.current.style.transform = `scale(${windowInfo.windowScale}) translateY(-${(windowInfo.initWindowHeight + windowInfo.windowHeightOffset)}px)`
          }
        }}
      >
        <a
          className={handleSections.currentSection == 1 || handleSections.currentSection == 2 ? 'active' : ''}
        >
          FAQ
        </a>
      </li>
      <li
        onClick={() => {
          beforeNavigation(handleSections.currentSection);
          tempScrolling(3);
          refs.containerRef.current?.scrollTo({ top: sectionTops[3], behavior: 'smooth' });
          refs.videoRef.current.style.transform = `translateY(-75%)`;
          refs.logoRef.current.style.transform = `scale(0.25) translate(-8vw, -28rem)`;
          if (mobileView) {
            refs.windowBorderRef.current.style.transform = `scale(${windowInfo.windowScale}) translateY(-${(windowInfo.initWindowHeight + windowInfo.windowHeightOffset)}px)`
          }
        }}
      >
        <a
          className={handleSections.currentSection == 3 ? 'active' : ''}
        >
          TIMELINE
        </a>
      </li>
      {mobileView ? null : 
      <li
        onClick={() => {
          handleTransition.handleFadeOut();
          tempScrolling(4);
          refs.containerRef.current?.scrollTo({ top: sectionTops[4], behavior: 'smooth' });
          // videoRef.current.style.transform = `translateY(-75%)`;
          refs.logoRef.current.style.transform = `scale(0.25) translate(-8vw, -28rem)`;
        }}
      >
        <a
          className={handleSections.currentSection == 4 ? 'active' : ''}
          
        >
          Register
        </a>
      </li>}
    </>
  );
}

export default WindowNavbar;
