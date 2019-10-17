import React, { Component } from "react";
import { TimelineMax, TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";


class BallRouter extends Component {

    constructor({props}) {
        super(props);
        this.state = {
            show: true,
            value: "",
            cards: [],
            init: false
        };
        //console.log(this.props.index);

        // logo container
        this.logoContainer = null;
        // logo tween
        this.logoTween = null;
    }

    static getDerivedStateFromProps(props, state) {
        // getDerivedStateFromProps https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // "Deriving state leads to verbose code and makes your components difficult to think about."
        // "Make sure you’re familiar with simpler alternatives"
        // if the length is 0 and state.init is false
        // set state of card to be true 
        if (state.cards.length === 0 && !state.init /* <--- what happens? */) {
            return {
                cards: props.cards,
                init: true
            };
        }
        return null;
    }
    
    toggleComponent() {
        this.setState({ show: !this.state.show });
    }
    
    componentDidMount() {

        // create logo tween
        this.logoTween = new TimelineMax({ paused: true, repeat: -1, yoyo:true})
        this.logoTween.to(this.logoContainer, .25, { y: -10, transformOrigin: "left top" });
    }

    render() {
        const url = `/imagines/${this.props.index + 1}_ball.png`;
        return (
            <Transition
                timeout={1000}
                mountOnEnter
                unmountOnExit
                in={this.state.show}
                addEndListener={(node, done) => {
                    TweenMax.to(node, 0.35, {
                        y: 0,
                        autoAlpha: this.state.show ? 1 : 0,
                        onComplete: done,
                        delay: !this.state.show ? 0 : this.props.card.init ? this.props.index * 0.15 : 0
                    });
                }}>
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
            </Transition>
        )
    }

}

export default BallRouter;
