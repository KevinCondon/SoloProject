import React, { Component } from 'react';
import { render } from 'react-dom';
import Tut_Intro from "./Tut_Intro/Tut_Intro.js";
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
        <Tut_Intro cards={cards}/>
        <TransitionList cards={cards} />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
