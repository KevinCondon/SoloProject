import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import Ball from "../Ball/Ball";
class BallList extends Component {

	constructor(props){
		super(props);
		this.state = {
			value: "",
			cards: [],
			init: false
		};
		this.addNewPerson = this.addNewPerson.bind(this);
		this.removePerson = this.removePerson.bind(this);
		this.updateNameHandler = this.updateNameHandler.bind(this);
	}

	static getDerivedStateFromProps(props, state){
		// getDerivedStateFromProps https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
		// "Deriving state leads to verbose code and makes your components difficult to think about."
		// "Make sure you’re familiar with simpler alternatives"
		// if the length is 0 and state.init is false
		// set state of card to be true 
		if ( state.cards.length === 0 && !state.init /* <--- what happens? */ ) {
			return {
				cards: props.cards,
				init: true
			};
		}
		return null;
	}

	updateNameHandler(e){
		this.setState({ value: e.target.value });
	}

	removePerson(id){
		this.setState({
			cards: this.state.cards.filter(card => card.id !== id)
		});
	}

	addNewPerson(e){
		e.preventDefault();
		if ( this.state.value !== "" ) {
			this.setState({
				cards: [].concat( this.state.cards, {
					id: new Date().getTime(),
					name: this.state.value,
				}),
				value: ""
			});
		}
	}

	render(){
    console.log(this.state.cards);
		return <div className="container">

			
			<TransitionGroup className="row">
				{this.state.cards.map((card, index) => (
															
					<Ball
						key={card.id}
						index={index}
						card={card}
						remove={this.removePerson}
					/>
				))}
				
			</TransitionGroup>
			
		</div>;
	}

}

export default BallList;
