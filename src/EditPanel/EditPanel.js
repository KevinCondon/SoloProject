import React, { Component } from "react";
import { TimelineMax, TweenMax } from "gsap/all";
import { Transition, TransitionGroup } from "react-transition-group";

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
                <div ref={img => this.logoContainer = img}
                    className=" justify-content-center">

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


                    ><div>
                            {/* <div class="row">
                                <div class="col justify-content-right content-right">
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={() => this.setState({ show: false })}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div> */}

                            <div class="form-row">
                                <div class="form-group col">
                                    <label for="inputName">Nickname</label>
                                    <input type="text" class="form-control" id="inputName"
                                        onChange={(event) => this.handleChangeFor('name', event)} />
                                </div>
                                <div class="form-group col-auto content-right">
                                    <button
                                        type="button"
                                        className="close"
                                        onClick={() => this.setState({ show: false })}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col">
                                    <label for="input" class=" col-form-label">Combination</label>
                                </div>

                                    <div class="form-group col">
                                        <input type="text" class="form-control justify-center" maxLength="2"
                                            onChange={(event) => this.handleChangeFor('keyCombo1', event)} />
                                    </div>
                                    
                                <div class="form-group col">
                                    <input type="text" class="form-control" maxLength="2"
                                        onChange={(event) => this.handleChangeFor('keyCombo1', event)} />
                                </div>

                                <div class="form-group col">
                                    <input type="text" class="form-control" maxLength="2"
                                        onChange={(event) => this.handleChangeFor('keyCombo1', event)} />
                                </div>
                                            {/* <div class="col">
                                        <input type="text" class="form-control" id="inlineFormComb2" maxLength="2"
                                            onChange={(event) => this.handleChangeFor('keyCombo2', event)} />
                                    </div>
                                    
                                        <div class="col">
                                        <input type="text" class="form-control" id="inlineFormComb3" maxLength="2"
                                            onChange={(event) => this.handleChangeFor('keyCombo3', event)} />
                                    </div> */}
                                </div>
                            


                            {/* <div class="row">
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
                                </div> */}

                            {/* </div> */}
                            <div class="form-row align-items-center">
                                <div class="col-sm-1 my-1">
                                    <button onClick={(e) => this.addNewPerson()} class="btn btn-primary" type="submit">Submit form</button>
                                </div>
                            </div>



                        </div>
                    </Transition>

                </div>
            </>
        )
    }

}

export default Tut_Intro;
