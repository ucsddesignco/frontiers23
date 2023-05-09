import './styles.scss';

import Logo from '../../assets/images/logo.svg';
import MobileNavbar from '../../components/MobileNavbar';
import ScrollingWindow from '../../components/ScrollingWindow';
import FormSubmission from '../../components/FormSubmission';
import { useEffect, useRef, useState } from 'react';

const FaqList1 = [
  {
    question: 'Who can participate?',
    answer:
      'Registration is open to current UCSD students only. Anyone of any skill level can join!',
  },
  {
    question: 'When is the deadline to register?',
    answer:
      'Saturday, May 7th @ 11:59PM. We will cap the event at 60 participants, so register early!',
  },
  {
    question: 'Where is the Design & Innovation Building?',
    answer:
      'DIB is located next to the Pepper Canyon Trolley Station, with entrances located across from the Structural Materials and Engineering building or next to the Regents Loop shuttle stop. Design Frontiers will be hosted in Room 208 on the second floor.',
  },
];

const FaqList2 = [
  {
    question: 'How long is Design Frontiers?',
    answer:
      'It’ll be a one day event on Saturday, May 20th @ 9AM-5PM. Lunch will be provided! See the Timeline for a more detailed breakdown of the day.',
  },
  {
    question:
      'How should I prepare for Design Frontiers if I have no design experience?',
    answer:
      'We’ll be hosting a Navigating Design Frontiers workshop on Wednesday, May 12 at 6:30 PM in DIB 208.',
  },
  {
    question: 'How big can my team be?',
    answer:
      'Teams can be a min of 3 and a max of 4. Teams will not be assigned, so feel free to make your own in advance or on the day of the event. You can also join one on Design Co’s Discord channel #frontiers-22.',
  },
];

const TimelineList = [
  {
    time: '9 AM',
    heading: 'EVENT KICKOFF',
    description:
      'Registration & Icebreakers, Opening Remarks, Brief Introduction, Keynote Speaker',
    id: '',
  },
  {
    time: '10 AM',
    heading: 'SPRINT STARTS',
    description: 'Design Sprint, Lunch',
    id: '',
  },
  {
    time: '2 PM',
    heading: 'SPRINT ENDS',
    description: 'Judging Begins, Finalist Presentations Begin',
    id: '',
  },
  {
    time: '4:40 PM',
    heading: 'CLOSING CEREMONY',
    description:
      '3 Winners are announced, 2 honorable mentions, Prize Distribution',
    id: '',
  },
  {
    time: '5 PM',
    heading: 'EVENT ENDS',
    description: '',
    id: 'last',
  },
];

function Home() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const mobileDateRef = useRef(null);
  const registerRef = useRef(null);
  const faq1Ref = useRef(null);
  const faq2Ref = useRef(null);
  const timelineRef = useRef(null);
  const formRef = useRef(null);
  const [availableSpace, setAvailableSpace] = useState(0);
  const [timelineSpace, setTimelineSpace] = useState(0);
  const [sectionTops, setSectionTops] = useState([]);

  const openLink = () => {
    document.getElementById('arrow-right').classList.add('animate-click')
		setTimeout(() => {window.open('https://forms.gle/aGnQraeJjjvx29mF8', '_blank'), document.getElementById('arrow-right').classList.remove('animate-click')}, 300)
	}

  useEffect(() => {
    const estimatedImageHeight = (document.body.clientWidth - 2*(document.body.clientWidth/10))/1.68 + 16;
    //Calculate space available for window in other sections based on smallest section
    const smallestSpace = Math.min(
      faq1Ref.current.getBoundingClientRect().top - 1*document.body.clientHeight,
      faq2Ref.current.getBoundingClientRect().top - 2*document.body.clientHeight,
      timelineRef.current.getBoundingClientRect().top - 3*document.body.clientHeight)
      console.log(timelineRef.current.getBoundingClientRect().top)
    if (smallestSpace < 230) {
      setTimelineSpace(smallestSpace- 80);
    } else {

      setTimelineSpace(smallestSpace - 115);
    }
    //Calculate space available for window in first section
    setAvailableSpace((registerRef.current.getBoundingClientRect().top - (mobileDateRef.current.getBoundingClientRect().bottom + estimatedImageHeight)) * 0.85)
    const section1Top = 0;
    const section2Top = faq1Ref.current.getBoundingClientRect().top;
    const section3Top = faq2Ref.current.getBoundingClientRect().top;
    const section4Top = timelineRef.current.getBoundingClientRect().top;
    const section5Top = formRef.current.getBoundingClientRect().top;
    setSectionTops([section1Top, section2Top, section3Top, section4Top, section5Top]);
  }, [])

  
  const spaceInfo = {timelineSpace, availableSpace}
  const refs = {containerRef, logoRef}
  return ( 
    <div ref={containerRef} className="container">
      {availableSpace == 0 ? null : <ScrollingWindow spaceInfo={spaceInfo} refs={refs} sectionTops={sectionTops}/> }
      <div className="home">
        <section id="testLanding" className="landing">
          <div className="landing-container">
            <div className="left-container">
              <img ref={logoRef} src={Logo} className="logo" alt="" />
              <img src={Logo} className="mobile-logo" alt="" />
              <h3>
                SAT, MAY 20TH | 9AM–5PM | DIB 208
              </h3>
              <div ref={mobileDateRef} className="mobile-h3-container">
                <h3>
                  SAT, MAY 20TH <br />
                  9AM–5PM
                </h3>
                <h3>
                  DIB ROOM 208
                </h3>
              </div>
              <p>
                Design Frontiers is Design Co’s annual one-day design sprint
                where collaborative teams of creative, innovative individuals
                can explore design solutions to real problems.
              </p>
              <div
                ref={registerRef}
                role='link'
                className='register-button'
                onClick={() => openLink()}
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
              </div>
            </div>
          </div>
        </section>
        <section className="faq">
          <div ref={faq1Ref} className="faq-container">
            <h2>FAQ</h2>
            {FaqList1.map((item) => (
              <div className="block">
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="faq">
          <div ref={faq2Ref} className="faq-container">
            <h2>FAQ</h2>
            {FaqList2.map((item) => (
              <div className="block">
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="timeline">
          <div ref={timelineRef}  className="timeline-container">
            <h2 className='timeline-title'>TIMELINE</h2>
            {TimelineList.map((item) => (
              <div className="block">
                <div className="grid-container">
                  <h5>{item.time}</h5>
                  <div className="middle">
                    <div className="circle" />
                  </div>
                  <h3>{item.heading}</h3>
                  <div></div>
                  <div className="middle">
                    <div id={item.id} className="line" />
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div ref={formRef}>
        <FormSubmission  />
        </div>
      </div>
    </div>
  )
}

export default Home