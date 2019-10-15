import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import TransitionCard from "./transition-card";
class TransitionList extends Component {

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
			<div className="row">

				<div className="col-12">
					<h3 className="text-center">List of Items</h3>
					{/* <p className="lead">Just like the previous sample, this animates the mount/unmount of a collection of components or elements wrapped in a <strong>&lt;Transition&gt;</strong> tag.</p> */}
					<p className="lead">In this we don't pass the <strong>in</strong> property to the component. The <strong>&lt;TransitionGroup&gt;</strong> component handles and passes the in boolean to each <strong>&lt;Transition&gt;</strong> element. Then in every transition child, we can access the <strong>'in'</strong> boolean on it's props.</p>
					<hr/>
				</div>
				{/* form */}
				<div className="col-12 col-md-6 mb-5">
					<form onSubmit={this.addNewPerson}>
						<div className="input-group">
							<input
								type="text"
								id="personName"
								name="personName"
								className="form-control"
								onChange={this.updateNameHandler}
								value={this.state.value}
							/>
							<div className="input-group-append">
								<button className="btn gsap-btn" type="submit">Add Person</button>
							</div>
						</div>
					</form>
				</div>
			
			</div>

			
			<TransitionGroup className="row">
				{this.state.cards.map((card, index) => 
					<TransitionCard
						key={card.id}
						index={index}
						card={card}
						remove={this.removePerson}
					/>
				)}
			</TransitionGroup>
			
		</div>;
	}

}

export default TransitionList;
