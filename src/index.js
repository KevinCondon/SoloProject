import React, { Component } from 'react';
import { render } from 'react-dom';
import ModalExample from "./TutorialStart/TutorialStart.js";


import './modules/bootstrap.min.css';
// import './style.css';



class App extends Component {

  render() {
    return (
      <>

        <ModalExample />
        {/* <Tut_Intro cards={cards}/> */}
        {/* <TransitionList cards={cards} /> */}

      </>
    );
  }
}

render(<App />, document.getElementById('root'));
