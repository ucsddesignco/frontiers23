import { useRef, useState } from 'react';
import './styles.scss';
import { useEffect } from 'react';
import WindowNavbar from '../WindowNavbar';
import MobileNavbar from '../MobileNavbar';

function ScrollingWindow({timelineSpace, availableSpace, containerRef, logoRef}) {
  const windowBorderRef = useRef(null);
  const videoRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [initWindowHeight, setInitWindowHeight] = useState(0);
  const [windowHeightOffset, setWindowHeightOffset] = useState(0);
  const [windowScale, setWindowScale] = useState(0);

  function handleFadeIn() {
    if (currentSection == 4) {
      if (document.body.clientWidth < 601) {
        windowBorderRef.current.style.transform = `scale(${windowScale}) translateY(-${(initWindowHeight + windowHeightOffset)}px)`
      } else {
        windowBorderRef.current.classList.remove('fade-out')
        windowBorderRef.current.classList.add('fade-in');
      }
    }
    
  }

  function handleFadeOut() {
    if (currentSection != 4) {
      if (document.body.clientWidth < 601) {
        windowBorderRef.current.style.transform = `scale(${windowScale}) translateY(-200vh)`
      } else {
        windowBorderRef.current.classList.remove('fade-in')
        windowBorderRef.current.classList.add('fade-out');
      }
    }
    
  }

  function handleScroll() {
    if (isScrolling) return false;

    const scrollPercent =
      (containerRef.current.scrollTop /
        (containerRef.current.getBoundingClientRect().height  * 4)) *
      100;
    
    if (0 <= scrollPercent && scrollPercent <= 12.5) {
      videoRef.current.style.transform = `translateY(-0%)`;
      if (document.body.clientWidth < 601) {
        windowBorderRef.current.style.transform = `scale(1) translateY(0)`
        
      }
      setCurrentSection(0);
    } else if (12.5 < scrollPercent && scrollPercent <= 37.5) {
      videoRef.current.style.transform = `translateY(-25%)`;
      setCurrentSection(1);
    } else if (37.5 < scrollPercent && scrollPercent <= 62.5) {
      videoRef.current.style.transform = `translateY(-50%)`;
      setCurrentSection(2);
    } else if (62.5 < scrollPercent && scrollPercent <= 85) {
      handleFadeIn();
      videoRef.current.style.transform = `translateY(-75%)`;
      setCurrentSection(3);
    } else if (scrollPercent > 85) {
      handleFadeOut();

      setCurrentSection(4);
    }

    if (scrollPercent > 12.5) {
      logoRef.current.style.transform = `scale(0.25) translate(-8vw, -20rem)`;
    } else {
      logoRef.current.style.transform = `scale(1) translate(0, 0)`;
    }

    //Mobile view
    if (document.body.clientWidth < 601) {
      
      if (scrollPercent > 12.5 && scrollPercent < 85) {
        // windowBorderRef.current.style.transform = `scale(0.7) translateY(${documentHeight * -0.65}px)`
        windowBorderRef.current.style.transform = `scale(${windowScale}) translateY(-${(initWindowHeight + windowHeightOffset)}px)`
      }
      else if (scrollPercent <= 12.5) {
        windowBorderRef.current.style.transform = `scale(1) translateY(0)`
      }
    }

  }

  useEffect(() => {
    //To account for mobile search bar
    window.addEventListener('resize', () => {
      setDocumentHeight(window.innerHeight);
      if (windowBorderRef.current.getBoundingClientRect().top < 80) {
        setWindowHeightOffset(0);
      } else {
        setWindowHeightOffset(100);
      }
      
    })
    containerRef.current?.addEventListener('scroll', handleScroll, {
      passive: false,
    });
    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll, {
        passive: false,
      });
    };
  }, [isScrolling, currentSection, documentHeight]);


  useEffect(() => {
    const scaleFactor = timelineSpace/windowBorderRef.current.getBoundingClientRect().height;
    setWindowScale(scaleFactor)
    setInitWindowHeight(windowBorderRef.current.getBoundingClientRect().top/scaleFactor  - 100);
    setDocumentHeight(window.innerHeight);
  }, [])

  const refs = {containerRef, videoRef, logoRef, windowBorderRef};
  const handleTransition = {handleFadeIn, handleFadeOut}
  const handleSections = {currentSection, setCurrentSection, setIsScrolling}
  const windowInfo = {windowScale, initWindowHeight, windowHeightOffset}
  return (
    <>
      <div style={{"--available-space": availableSpace}} className="window-container">
        <div ref={windowBorderRef} className="window-border">
          <div className="video-mask">
            <video
              ref={videoRef}
              width={800}
              className="window-video"
              muted
              autoPlay
              loop
              playsInline
              >
              <source src="DCO_DF23_Animation.mp4" />
            </video>
          </div>
        </div>
        <nav className="navbar">
          <ul>
        <WindowNavbar refs={refs} windowInfo={windowInfo} handleTransition={handleTransition} handleSections={handleSections}/>
          </ul>
          </nav>
      </div>
      <MobileNavbar refs={refs} windowInfo={windowInfo} handleTransition={handleTransition} handleSections={handleSections} />
    </>
  );
}

export default ScrollingWindow;
