import React, { Component } from "react";
import { TimelineMax } from "gsap/all";

class BallRouter extends Component {

    constructor({props}) {
        super(props);
        console.log(this.props);
        
        // logo container
        this.logoContainer = null;
        // logo tween
        this.logoTween = null;
    }

    componentDidMount() {

        // create logo tween
        this.logoTween = new TimelineMax({ paused: true, repeat: -1, yoyo:true})
        this.logoTween.to(this.logoContainer, .5, { y: 10, transformOrigin: "left top" });
    }

    render() {
        const url = `/imagines/${this.props.key}_ball`;
        return <div className="container">

            <div className="row justify-content-center">
                <form >
                    <img className='jump'
                        alt=""
                        ref={img => this.logoContainer = img}
                        onMouseEnter={() => {
                            this.logoTween.play()
                        }}
                        onMouseLeave={() => {
                            
                            this.logoTween.tweenTo(1)
                        }}
                        src={url}>
                    </img>
                </form>

            </div>

        </div>;
    }

}

export default BallRouter;
