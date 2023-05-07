import { useRef, useState } from 'react';
import './styles.scss';
import { useEffect } from 'react';

import Logo from '../../assets/images/logo.svg';

function ScrollingWindow({containerRef, logoRef}) {
  const windowBorderRef = useRef(null);
  const videoRef = useRef(null);
  const [currentSection, setcurrentSection] = useState(0);
  const [isScrolling, setisScrolling] = useState(false);
  const [timeoutId, setTimeoutID] = useState();
  // let timeoutId = undefined;

  function beforeNavigation(index) {
    if (index == 4) {
      windowBorderRef.current.classList.add('fade-in');
      windowBorderRef.current.style.display = '';
      windowBorderRef.current.onanimationend = () => {
        windowBorderRef.current.classList.remove('fade-in');
      };
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

  function handleScroll() {
    if (isScrolling) return false;
    const scrollPercent =
      (containerRef.current.scrollTop /
        (containerRef.current.getBoundingClientRect().height * 4)) *
      100;

    const containerWidth = containerRef.current.getBoundingClientRect().width;

    if (0 <= scrollPercent && scrollPercent <= 12.5) {
      videoRef.current.style.transform = `translateY(-0%)`;
      setcurrentSection(0);
    } else if (12.5 < scrollPercent && scrollPercent <= 37.5) {
      videoRef.current.style.transform = `translateY(-25%)`;
      setcurrentSection(1);
    } else if (37.5 < scrollPercent && scrollPercent <= 62.5) {
      videoRef.current.style.transform = `translateY(-50%)`;
      setcurrentSection(2);
    } else if (62.5 < scrollPercent && scrollPercent <= 85) {
      if (currentSection == 4) {
        if (windowBorderRef.current.style.display == 'none') {
          windowBorderRef.current.classList.add('fade-in');
          windowBorderRef.current.style.display = '';
          windowBorderRef.current.onanimationend = () => {
            windowBorderRef.current.classList.remove('fade-in');
          };
        }
      }
      videoRef.current.style.transform = `translateY(-75%)`;
      setcurrentSection(3);
    } else if (scrollPercent > 85) {
      if (windowBorderRef.current.style.display == '') {
        windowBorderRef.current.classList.add('fade-out');
        windowBorderRef.current.onanimationend = () => {
          windowBorderRef.current.style.display = 'none';
          windowBorderRef.current.classList.remove('fade-out');
        };
      }
      setcurrentSection(4);
    }

    if (scrollPercent > 12.5) {
      logoRef.current.style.transform = `scale(0.25) translate(-8vw, -20rem)`;
    } else {
      logoRef.current.style.transform = `scale(1) translate(0, 0)`;
    }

    if (containerWidth < 601) {
      if (scrollPercent > 12.5) {
        windowBorderRef.current.style.transform = `scale(0.5) translateY(-100vh)`
      }
      else {
        windowBorderRef.current.style.transform = `scale(1) translateY(0)`
      }
    }

  }

  useEffect(() => {
    containerRef.current?.addEventListener('scroll', handleScroll, {
      passive: false,
    });
    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll, {
        passive: false,
      });
    };
  }, [isScrolling, currentSection]);

  return (
      <div className="window-container">
        <div ref={windowBorderRef} className="window-border">
          <div className="video-mask">
            <video
              ref={videoRef}
              width={800}
              className="window-video"
              muted
              autoPlay
              loop
            >
              <source src="DCO_DF23_Animation.mp4" />
            </video>
          </div>
        </div>
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
                  windowBorderRef.current.classList.add('fade-out');
                  windowBorderRef.current.onanimationend = () => {
                    windowBorderRef.current.style.display = 'none';
                    windowBorderRef.current.classList.remove('fade-out');
                  };
                  tempScrolling(4);
                  containerRef.current?.scrollTo({ top: 3269, behavior: 'smooth' });
                  // videoRef.current.style.transform = `translateY(-75%)`;
                  logoRef.current.style.transform = `scale(0.25) translate(-8vw, -20rem)`;
                }}
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default ScrollingWindow;
