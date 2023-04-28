import React from 'react'
import './styles.scss'

import Logo from '../../assets/images/logo.svg'

const FaqList1 = [
  {
    question: 'Who can participate?',
    answer: 'Registration is open to current UCSD students only. Anyone of any skill level can join!',
  },
  {
    question: 'When is the deadline to register?',
    answer: 'Saturday, May 7th @ 11:59PM. We will cap the event at 60 participants, so register early!',
  },
  {
    question: 'Where is the Design & Innovation Building?',
    answer: 'DIB is located next to the Pepper Canyon Trolley Station, with entrances located across from the Structural Materials and Engineering building or next to the Regents Loop shuttle stop. Design Frontiers will be hosted in Room 208 on the second floor.',
  },
]

const FaqList2 = [
  {
    question: 'How long is Design Frontiers?',
    answer: 'It’ll be a one day event on Saturday, May 20th @ 9AM-5PM. Lunch will be provided! See the Timeline for a more detailed breakdown of the day.',
  },
  {
    question: 'How should I prepare for Design Frontiers if I have no design experience?',
    answer: 'We’ll be hosting a Navigating Design Frontiers workshop on Wednesday, May 12 at 6:30 PM in DIB 208.',
  },
  {
    question: 'How big can my team be?',
    answer: 'Teams can be a min of 3 and a max of 4. Teams will not be assigned, so feel free to make your own in advance or on the day of the event. You can also join one on Design Co’s Discord channel #frontiers-22.',
  },
]

const TimelineList = [
  {
    time: '9 AM',
    heading: 'EVENT KICKOFF',
    description: 'Registration & Icebreakers, Opening Remarks, Brief Introduction, Keynote Speaker',
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
    description: '3 Winners are announced, 2 honorable mentions, Prize Distribution',
    id: '',
  },
  {
    time: '5 PM',
    heading: 'EVENT ENDS',
    description: '',
    id: 'last',
  },
]

function Home() {
  return (
    <div className="home">
      <div className='landing'>
        <div className="landing-container">
          <div className="left-container">
            <img src={Logo} className='logo' alt="" />
            <h3>
              SAT, MAY 20TH <br />
              9AM–5PM <br />
              DIB ROOM 208
            </h3>
            <p>
              Design Frontiers is Design Co’s annual 
              one-day design sprint where 
              collaborative teams of creative, 
              innovative individuals can explore 
              design solutions to real problems.
            </p>
          </div>
        </div>
      </div>
      <div className="faq">
          <img className='logo' src={Logo} alt="" />
          <div className="faq-container">
            <h2>FAQ</h2>
            {FaqList1.map((item) => (
              <div className='block'>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
      </div>
      <div className="faq">
          <img className='logo' src={Logo} alt="" />
          <div className="faq-container">
            <h2>FAQ</h2>
            {FaqList2.map((item) => (
              <div className='block'>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
      </div>
      <div className="timeline">
          <img className='logo' src={Logo} alt="" />
          <div className="timeline-container">
            <h2>TIMELINE</h2>
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
      </div>
    </div>
  )
}

export default Home