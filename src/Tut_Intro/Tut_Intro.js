import React, { Component } from "react";
import { TimelineMax, TweenMax } from "gsap/all";
import { Transition, TransitionGroup } from "react-transition-group";
import BallList from "../BallList/BallList.js";
import MyComboList from "../MyComboList/MyComboList.js";
import EditPanel from "../EditPanel/EditPanel.js";

class Tut_Intro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            keyCombo1: '',
            keyCombo2: '',
            keyCombo3: '',
            cards: [],
            init: false
        };
        this.logoContainer = null;
        // logo tween
        this.logoTween = null;
        this.addNewPerson = this.addNewPerson.bind(this);
        this.removePerson = this.removePerson.bind(this);
    }

    componentDidMount() {
        this.setState({ show: !this.state.show });
        // this.logoTween = new TimelineMax({ paused: false, repeat: -1, yoyo: true })
        //     .to(this.logoContainer, 3, { y: -5, x: 8, transformOrigin: "left top" })
        //     .to(this.logoContainer, 3.5, { y: -4, x: 4, transformOrigin: "left top" })
        //     .to(this.logoContainer, 2, { y: -1, x: 0, transformOrigin: "left top" })
        //     .to(this.logoContainer, 3.5, { y: 6, x: 5, transformOrigin: "left top" })


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
    addNewPerson(e) {
        if (this.state.value !== "") {
            this.setState({
                cards: [].concat(this.state.cards, {
                    id: new Date().getTime(),
                    name: this.state.name,
                    Combo: this.state.keyCombo1 + '-' + this.state.keyCombo2 + '-' + this.state.keyCombo3
                }),
            });
        }
    }
    removePerson(id) {
        this.setState({
            cards: this.state.cards.filter(card => card.id !== id)
        });
    }
    handleChangeFor = (propertyName, event) => {
        this.setState({
            [propertyName]: event.target.value
        });
    }

    submitSimpleKey = () => {
        console.log(this.state);
    }

    render() {


        const { show } = this.state;
        return (
            <>
                {/* <div ref={img => this.logoContainer = img}> */}

                <Transition
                    timeout={1000}
                    mountOnEnter
                    unmountOnExit

                    in={show}
                    addEndListener={(node, done) => {
                        TweenMax.to(node, 2.35, {
                            y: show ? 0 : 100,
                            autoAlpha: show ? 1 : 0,
                            onComplete: done
                        });

                    }}


                >
                    <div className="tutorial-card" ref={img => this.logoContainer = img}>

                        <div class="row">
                            <div class="col-auto">
                                <BallList cards={this.props.cards} />
                            </div>
                            <div class="col justify-content-right content-right">
                                <button
                                    type="button"
                                    className="close"
                                    onClick={() => this.setState({ show: false })}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <div class="form-group row">
                                    <label for="inputEmail3" class="col-sm-2 col-form-label">Nickname</label>
                                    <div class="col-auto">
                                        <input type="text" class="form-control" placeholder="Autopopulate"
                                            onChange={(event) => this.handleChangeFor('name', event)} />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-auto">
                                        <label for="input" class=" col-form-label">Combination</label>
                                    </div>

                                    <div class="col-2">
                                        <input type="text" class="form-control" id="inlineFormComb1" maxLength="2"
                                            onChange={(event) => this.handleChangeFor('keyCombo1', event)} />
                                    </div>
                                    -
                                            <div class="col-2">
                                        <input type="text" class="form-control" id="inlineFormComb2" maxLength="2"
                                            onChange={(event) => this.handleChangeFor('keyCombo2', event)} />
                                    </div>
                                    -
                                        <div class="col-2">
                                        <input type="text" class="form-control" id="inlineFormComb3" maxLength="2"
                                            onChange={(event) => this.handleChangeFor('keyCombo3', event)} />
                                    </div>

                                </div>
                                <div class="form-row align-items-center">
                                    <div class="col-sm-1 my-1">
                                        <button onClick={(e) => this.addNewPerson()} class="btn btn-primary" type="submit">Submit form</button>
                                    </div>
                                </div>



                            </div>
                            <div class="col">
                                <EditPanel cards={this.props.cards} />
                            </div>

                        </div>
                        <TransitionGroup class="row">
                            {this.state.cards.map((card, index) =>
                                <MyComboList
                                    key={card.id}
                                    index={index}
                                    card={card}
                                    remove={this.removePerson}
                                />
                            )}
                        </TransitionGroup>
                    </div>
                </Transition>

                {/* </div> */}
            </>
        )
    }

}

export default Tut_Intro;
