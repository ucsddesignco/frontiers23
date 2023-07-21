import { useEffect, useRef, useState } from 'react'

import './styles.scss'

import postcardv1 from './postcardv1.png'
import postcardv2 from './postcardv2.png'
import postcardv3 from './postcardv3.png'
import arrow from './arrow.png';
import airplane1 from './airplane1.png';
import airplane2 from './airplane2.png';


function RecapPage() {
  const arrowRef = useRef();

  const [winWidth, setWinWidth] = useState(window.innerWidth)

  const recapPage = document.getElementById("recap-page");

  const [hiddenOne, setHiddenOne] = useState(false);
  const [hiddenTwo, setHiddenTwo] = useState(true);

  const [visibleOne, setVisibleOne] = useState(true);
  const [visibleTwo, setVisibleTwo] = useState(false);

  const teamsList = [
    {
      teamNum: "TEAM 1",
      teamName: "Craggles meow meow meow",
      caseStudy: "https://incongruous-product-84d.notion.site/1-Design-Frontiers-2023-635edafbbd43433c93a00014553bb8a9",
      slideDeck: "https://docs.google.com/presentation/d/1MlgteUvi-UHRiWQr5SmEANg_UCDj3ODKXM4ZJNOlByg/edit?usp=sharing",
    },
    {
      teamNum: "TEAM 2",
      teamName: "Munchies ← NAMES",
      caseStudy: "https://incongruous-product-84d.notion.site/2-Design-Frontiers-2023-bc9e17610dd14fb282c6c657048aa5ea",
      slideDeck: "https://docs.google.com/presentation/d/1HBNsvdovUMkOjTeur1lSsX6BMnA2ZmmZ0dqNSVgiEqg/edit",
    },
    {
      teamNum: "TEAM 3",
      teamName: "3Cars",
      caseStudy: "https://incongruous-product-84d.notion.site/3-Design-Frontiers-2023-ee015ec20dad42ef8df5b468b23e14c0",
      slideDeck: "https://docs.google.com/presentation/d/1wKMn8SAW0eZv8FbWYFwtWnRxFjgUlA1LE9hsx69CKs4/edit",
    },
    {
      teamNum: "TEAM 4",
      teamName: "Phrogs",
      caseStudy: "https://incongruous-product-84d.notion.site/4-Design-Frontiers-2023-853b314d4b794e16bd6ecb806c64d382",
      slideDeck: "https://docs.google.com/presentation/d/1z6yQfjKNONKzyJLebjT_yREISg6u2HIih8H9M4rQIIo/edit",
    },
    {
      teamNum: "TEAM 5",
      teamName: "Sl4yyyy",
      caseStudy: "https://incongruous-product-84d.notion.site/5-Design-Frontiers-2023-2b535e4de4404a0a8b02d2a87ea63821",
      slideDeck: "https://www.figma.com/proto/6t4DjX4CHHKAH4bwaMGELt/design-frontiers?type=design&node-id=8-8138&scaling=contain&page-id=12%3A4015&starting-point-node-id=8%3A8138",
    },
    {
      teamNum: "TEAM 6",
      teamName: "100",
      caseStudy: "https://incongruous-product-84d.notion.site/6-Design-Frontiers-2023-39030b2f558f46ddae2be18ee3ea38f0",
      slideDeck: "https://docs.google.com/presentation/d/13topGVUMZ0yRGe5ye5e2MdY7DcRsvsU9kMAoUxzNK94/edit#slide=id.g22521ee0f26_0_14",
    },
    {
      teamNum: "TEAM 7",
      teamName: "Eternal Sunshine",
      caseStudy: "https://incongruous-product-84d.notion.site/7-Design-Frontiers-2023-353a81f4967242bc9dca3957e13bd5ac",
      slideDeck: "https://www.canva.com/design/DAFjYa-CqxQ/q0t9LX6aZ5OJNvVbhR8fiw/edit?utm_content=DAFjYa-CqxQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      teamNum: "TEAM 8",
      teamName: "Econauts",
      caseStudy: "https://incongruous-product-84d.notion.site/8-Design-Frontiers-2023-8aeaccd4b1fc4931bf8bfdcf64268162",
      slideDeck: "https://docs.google.com/presentation/d/1XSwPCvi_m3cSoIExd2soy4PRLil2kj78dNyFI37pSLU/edit#slide=id.g35f391192_00",
    },
    {
      teamNum: "TEAM 9",
      teamName: "Grease Monkeys",
      caseStudy: "https://incongruous-product-84d.notion.site/9-Design-Frontiers-2023-5cdc6054f3e04cd6acc4a3d82c765c42",
      slideDeck: "https://docs.google.com/presentation/d/1_7_g2iCZRFYr3yHkbS2SSPQ4AKAsxNCnjWtM1O9KGFw/edit",
    },
    {
      teamNum: "TEAM 10",
      teamName: "Parks & Rec",
      caseStudy: "https://incongruous-product-84d.notion.site/10-Design-Frontiers-2023-6df5374c8187499ba794baffb3aff239",
      slideDeck: "https://docs.google.com/presentation/d/1jgufP6-FxkMiJ-AmGPshZO-R_rzsyACwFw75HZnddS4/edit",
    },
    {
      teamNum: "TEAM 11",
      teamName: "EZ Eventz",
      caseStudy: "https://incongruous-product-84d.notion.site/11-Design-Frontiers-2023-38ef0e6fc1514c6e895839ed715aa88f",
      slideDeck: "https://www.canva.com/design/DAFje51Z4Jo/UzbseYQNW6L1y6LM-Qc6Qg/edit?utm_content=DAFje51Z4Jo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      teamNum: "TEAM 12",
      teamName: "Rapid",
      caseStudy: "https://incongruous-product-84d.notion.site/13-Design-Frontiers-2023-744b807ca0cc48729c0aa81109a1e3ee",
      slideDeck: "https://docs.google.com/presentation/d/1Q0PgM1X2Hbrq4Qr9w4rhb1KdSMoiy93Pk2pF1WPuMv0/edit#slide=id.gbf7f698039_0_225",
    },
    {
      teamNum: "TEAM 13",
      teamName: "MobileHub",
      caseStudy: "https://incongruous-product-84d.notion.site/14-Design-Frontiers-2023-78f461d2c02b46f88cd9e0c0cef084b8",
      slideDeck: "https://docs.google.com/presentation/d/1fHmyV8uSE3ff4KBffH9tVALmm5uzTeLQSaPeRDQ0WKo/edit#slide=id.g20731eb8b89_0_88",
    },
    {
      teamNum: "TEAM 14",
      teamName: "zero X",
      caseStudy: "https://incongruous-product-84d.notion.site/11-Design-Frontiers-2023-38ef0e6fc1514c6e895839ed715aa88fhttps://incongruous-product-84d.notion.site/15-Design-Frontiers-2023-e7950a7391c34a18b2fbd6379bd8d3c7",
      slideDeck: "https://docs.google.com/presentation/d/1AnAGQ_3v0co6FUsVwetLu4Nq7-uyjqa_HgpfHQdCRY0/edit",
    },
    {
      teamNum: "TEAM 15",
      teamName: "wait time not included",
      caseStudy: "https://incongruous-product-84d.notion.site/16-Design-Frontiers-2023-b37caea4d6e146f19fad6557c09b667c",
      slideDeck: "https://docs.google.com/presentation/d/1R8HutQ9TPBbi-Pm-dU7pg-mjFazlJROp7KPigjweE3E/edit#slide=id.p",
    },
  ]

  useEffect(() => {
    addEventListener('resize', _ => {
      setWinWidth(window.innerHeight)
    })
  }, [])

  return (
    <section className="recap-page"
  >
      {visibleOne && <div className="scroll-page"
      style= {{
        animation: hiddenOne ? "disappear 0.5s ease" : "appear 0.5s ease",
        }}>
        <div id="header">
          THANK YOU FOR ATTENDING
          DESIGN FRONTIERS 2023!
        </div>
        <div id='subtitle'>
          Missed out on the event? Check out all the student projects below!
        </div>
        <div 
          role='link'
          tabIndex={0}
          className='recap-button'
          aria-label='Open list of teams.'
          id="header"
          >
            CASE STUDIES
            <svg
					    ref={arrowRef}
              fill='black'
              height={60}
              width={60}
              
              viewBox='0 0 490 490'
              id='arrow-right'
              onClick={()=> {
                setHiddenOne(true);
                setVisibleTwo(true);
                setTimeout(()=>{setVisibleOne(false)
              }
                , 500)   
              setHiddenTwo(false);   
              }}
						>
              <g>
							<polygon points='247.773,8.081 175.407,82.05 295.118,199.145 0,199.145 0,306.14 279.496,306.14 175.407,407.949 247.773,481.919 490,245.004' />
						</g>
            </svg>
        </div>

        <div className='postcard-one'>
          <img
						src={postcardv1}
						aria-hidden={true}
						id='postcardone'
          />
        </div>
       
        <div className='postcard-two'>
          <img
						src={postcardv2}
						aria-hidden={true}
						id='postcardtwo'
          />
        </div>
        <div className='postcard-three'>
        <img
						src={postcardv3}
						aria-hidden={true}
						id='postcardthree'
          />
        </div>
      </div>}

      {visibleTwo && <div className="scroll-page-two"
      style= {{
        animation: hiddenTwo ? "disappeartwo 1s ease" : "appeartwo 1s ease",
        }}>
        <div className='table'>
          <div className='nav'>
            <h5 className='one' 
              onClick={()=> {
                setHiddenTwo(true);
                setVisibleOne(true);
                setTimeout(()=>{setVisibleTwo(false);
                 } , 500)    
                setHiddenOne(false);  
              }}
            >RECAP</h5>
            <h5 className='two'>&gt;</h5>
            <h5 className='three'>CASE STUDIES</h5>
          </div>
          <h2 className='table-header'>
              CASE STUDIES
          </h2>
          <div className='table-data'>
            {teamsList.map((item) => (
              <div className="tile">
                <h5 className='left'>{item.teamNum}</h5>
                <div className='right'>
                  <h3>{item.teamName}</h3>
                  <div className='bottom'>
                    <a className='case-study' target="_blank" href={item.caseStudy}>
                      <p>Case Study</p>
                      <img className="arrow" src={arrow} />
                    </a>
                    <a className='slide-deck' target="_blank" href={item.slideDeck}>
                      <p>Slide Deck</p>
                      <img className="arrow" src={arrow} />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
        <img
          className='airplane-one'
          src={airplane1}
          aria-hidden={true}
          id='postcardthree'
        />
        <img
          className='airplane-two'
          src={airplane2}
          aria-hidden={true}
          id='postcardthree'
        />
        
      </div>}
    </section>
  )
}

export default RecapPage
