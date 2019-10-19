import React, { Component } from "react";
import { TimelineMax, TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";
import BallList from "../BallList/BallList.js";

class SimpleTransition extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.logoContainer = null;
        // logo tween
        this.logoTween = null;
    }

    componentDidMount() {
        this.setState({ show: !this.state.show });
        this.logoTween = new TimelineMax({ paused: false, repeat: -1, yoyo: true })
            .to(this.logoContainer, 3, { y: -5, x: 8, transformOrigin: "left top" })
            .to(this.logoContainer, 3.5, { y: -4, x: 4, transformOrigin: "left top" })
            .to(this.logoContainer, 2, { y: -1, x: 0, transformOrigin: "left top" })
            .to(this.logoContainer, 3.5, { y: 6, x: 5, transformOrigin: "left top" })


    }

    render() {


        const { show } = this.state;
        return (
            <>
                <div ref={img => this.logoContainer = img}
                    className="row justify-content-center">

                    <Transition
                        timeout={1000}
                        mountOnEnter
                        unmountOnExit

                        in={show}
                        addEndListener={(node, done) => {
                            TweenMax.to(node, 2.5, {
                                y: show ? 0 : 100,
                                autoAlpha: show ? 1 : 0,
                                onComplete: done
                            });

                        }}


                    >
                        <div className="col-10 tutorial-card simple">
                            <BallList cards={this.props.cards} />
                            <button
                                type="button"
                                className="close"
                                onClick={() => this.setState({ show: false })}>
                                <span aria-hidden="true">&times;</span>
                            </button>


                            <div>
                                <form>
                                    <div class="form-group row">
                                        <label for="inputEmail3" class="col-sm-2 col-form-label">User ID</label>
                                        <div class="col-auto">
                                            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                                        </div>
                                    </div>
                                    
                                    <div class="form-row align-items-center">
                                        <label for="input" class="col-sm-2 col-form-label">Combination</label>

                                        <div class="col-sm-1 my-1">
                                            <label class="sr-only" for="inlineFormInputName"></label>
                                            <input type="text" class="form-control" id="inlineFormInputName" />
                                        </div>
                                        -
                                            <div class="col-sm-1 my-1">
                                            <label class="sr-only" for="inlineFormInputGroupUsername"></label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="inlineFormInputGroupUsername" />
                                            </div>
                                        </div>
-
                                        <div class="col-sm-1 my-1">
                                            <label class="sr-only" for="inlineFormInputGroupUsername"></label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="inlineFormInputGroupUsername" />
                                            </div>
                                        </div>

                                    </div>
                                    <div class="form-row align-items-center">
                                        <div class="col-sm-1 my-1">
                                        <button class="btn btn-primary" type="submit">Submit form</button>
                                        </div>
                                    </div>


                                </form>

                            </div>
                        </div>

                    </Transition>

                </div>
            </>
        )
    }

}

export default SimpleTransition;
