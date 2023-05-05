import React, { useEffect, useRef, useState } from 'react'

import './styles.scss'

import dfLogo from './dfLogo.svg'
import brr from './brr.svg'
import boardingPass from './boardingPass.svg'
import boardingPass2 from './boardingPass2.svg'
import FullBoardingPass from './fullBoardingPass.svg'

const formLink = 'https://www.youtube.com/shorts/CbWFZ5eroXM'

function FormSubmission() {
	const [winWidth, setWinWidth] = useState(window.innerWidth)

	useEffect(() => {
		addEventListener('resize', _ => {
			setWinWidth(window.innerHeight)
		})
	}, [])

	const [fly, setFly] = useState(false)
	const brrRef = useRef()

	const openLink = _ => {
		window.open(formLink, '_blank')
	}

	const handleClick = _ => {
		if (!fly) {
			setFly(true)
			brrRef.current.beginElement()

			setTimeout(openLink, 1000)
		} else {
			openLink()
		}
	}

	return (
		<section className="form-submit">
			<div className='scroll-page'>
				<div
					role='link'
					tabIndex={0}
					className='register-button'
					onClick={handleClick}
					onKeyDown={e => {
						if (e.key === ' ' || e.key === 'Enter') handleClick()
					}}
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
				<div id='brr-box'>
					<svg
						id='brrr-path'
						viewBox='0 0 1600 500'
						fill='none'
					>
						<image
							href={brr}
							width={winWidth > 600 ? 225 : 350}
							x={fly ? undefined : winWidth > 600 ? -225 : -350}
						>
							<animateMotion
								ref={brrRef}
								dur='1s'
								repeatCount='1.5s'
								fill='freeze'
								path={`M${winWidth > 600 ? -225 : -350} 35 0.986237 10.2569C159.503 -6.56894 365.153 -1.31778 537.307 147.458C709.462 296.234 883.014 313.122 1100 313.122`}
								begin='indefinite'
								rotate='auto'
								calcMode='spline'
								keyTimes='0;1'
								keySplines='0.9 0.7 0.6 0.7'
							/>
						</image>
						{/* <path
							d={`M${winWidth > 600 ? -225 : -350} 35 0.986237 10.2569C159.503 -6.56894 365.153 -1.31778 537.307 147.458C709.462 296.234 883.014 313.122 1100 313.122`}
							stroke='#E8178A'
							stroke-width='3.22854'
							stroke-dasharray='15 15'
						/> */}
					</svg>
				</div>
				<div className="fullboarding-pass1">
					<img
						src={FullBoardingPass}
						aria-hidden={true}
						id='boarding-pass1'
					/>
				</div>
				<div className="fullboarding-pass2">
					<img
						src={FullBoardingPass}
						aria-hidden={true}
						id='boarding-pass2'
					/>
				</div>
			</div>
		</section>
	)
}

export default FormSubmission
