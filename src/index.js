import React, { Component } from 'react';
import { render } from 'react-dom';
import SimpleTransition from "./simple-transition.js";
import TransitionList from "./Transition-Card/transition-list.js";
import BallList from "./BallList/BallList.js";
import { TransitionGroup } from "react-transition-group";

import './modules/bootstrap.min.css';
import './style.css';
import cards from "./Transition-Card/data.json";



class App extends Component {

  render() {
    return (
      <div>

          <SimpleTransition />
        <BallList cards={cards} />

        {/* <div className="">
          <TransitionGroup>
          {cards.map((card, index) => {
            return (


              <BallRouter index={index} card={card}/>

            )
          })}
          </TransitionGroup>
          </div> */}
        <TransitionList cards={cards} />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
