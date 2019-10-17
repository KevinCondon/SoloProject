import React from "react";
import { TweenMax, TimelineMax } from "gsap/all";
import { Transition } from "react-transition-group";

const Ball = props => {
	const url = `/imagines/${props.index + 1}_ball.png`;
	const { in: show, remove, card } = props;
	this.logoTween = new TimelineMax({ paused: true, repeat: -1, yoyo: true })

	function mousein () {

		this.logoTween.to(this.logoContainer, .25, { y: -10, transformOrigin: "left top" });		
	}

	return <Transition
		timeout={1000}
		mountOnEnter
		unmountOnExit
		appear
		in={show}
		addEndListener={(node, done) => {
			TweenMax.to(node, 0.35, {
				y: 0,
				autoAlpha: show ? 1 : 0,
				onComplete: done,
				delay: !show ? 0 : card.init ? props.index * 0.5 : 0
			});
		}}
	>
		<div className="card-container">
			{/* <div className="card transition-card2">  */}
						<img type="img" className="jump1"
							alt=""
							// ref={img => this.logoContainer = img}
							onMouseEnter={() => {
								mousein()
								// this.logoTween.play()
							}}
							onMouseLeave={() => {

								// this.logoTween.tweenTo(0)
							}}
							src={url}>
						</img>
						{/* </div> */}
		</div>
{/* 
			</div>
		</div> */}
		{/* <img type="img" className="jump1"
			alt=""
			// ref={img => this.logoContainer = img}
			// onMouseEnter={() => {
			// 	this.logoTween.play()
			// }}
			// onMouseLeave={() => {

			// 	this.logoTween.tweenTo(0)
			// }}
			src={url}>
		</img> */}

	</Transition>;
};

export default Ball;
