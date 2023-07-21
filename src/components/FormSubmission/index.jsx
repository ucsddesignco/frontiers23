import { useEffect, useRef, useState } from 'react'

import './styles.scss'

import brr from './brr.svg'
import FullBoardingPass from './fullBoardingPass.png'



function FormSubmission() {
	const arrowRef = useRef();
	
	const [winWidth, setWinWidth] = useState(window.innerWidth)

	useEffect(() => {
		addEventListener('resize', _ => {
			setWinWidth(window.innerHeight)
		})
	}, [])

	const openLink = (timeout) => {
		arrowRef.current.classList.add('animate-click')
			setTimeout(() => {window.open('https://forms.gle/aGnQraeJjjvx29mF8', '_blank'), arrowRef.current.classList.remove('animate-click')}, timeout)
		}

	const [fly, setFly] = useState(false)
	const brrRef = useRef()

	const handleClick = _ => {
		if (!fly) {
			setFly(true)
			brrRef.current.beginElement()

			openLink(1000);
		} else {
			openLink(300)
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
					HI
					<svg
					ref={arrowRef}
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
