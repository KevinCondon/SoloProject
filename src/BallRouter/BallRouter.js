import React, { Component } from "react";
import { TimelineMax } from "gsap/all";

class BallRouter extends Component {

    constructor({props}) {
        super(props);
        
        // logo container
        this.logoContainer = null;
        // logo tween
        this.logoTween = null;
    }

    componentDidMount() {

        // create logo tween
        this.logoTween = new TimelineMax({ paused: true, repeat: -1, yoyo:true})
        this.logoTween.to(this.logoContainer, .25, { y: -10, transformOrigin: "left top" });
    }

    render() {
        const url = `/imagines/${this.props.index + 1}_ball.png`;
        return (
            // <button type="button"
            //     className="img" onClick={() => console.log('hi')}>
                <img type="img" className="jump1"
                        alt=""
                        ref={img => this.logoContainer = img}
                        onMouseEnter={() => {
                            this.logoTween.play()
                        }}
                        onMouseLeave={() => {
                            
                            this.logoTween.tweenTo(0)
                        }}
                        src={url}>
                    </img>
        )
    }

}

export default BallRouter;
