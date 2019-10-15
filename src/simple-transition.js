import React, { Component } from "react";
import { TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";

class SimpleTransition extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.toggleComponent = this.toggleComponent.bind(this);
  }

  toggleComponent() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { show } = this.state;
    return <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">Green Sock Transition</h3>
          <p className="lead">This sample uses Transition to mount and unmount a component.</p>
          <hr />
        </div>
        <div className="col-12">
          <div className="btn-group">
            <button
              className="btn gsap-btn"
              onClick={this.toggleComponent}
            >Toggle Component</button>
          </div>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        <Transition
          timeout={1000}
          mountOnEnter
          unmountOnExit
          in={show}
          addEndListener={(node, done) => {
            TweenMax.to(node, 0.5, {
              x: show ? 0 : 100,
              autoAlpha: show ? 1 : 0,
              onComplete: done
            });
          }}
        >
          <div className="card col-6 transition-card simple">
            <div className="card-body">
              <h5 className="card-title">
                Animating React with GSAP
								<button
                  type="button"
                  className="close"
                  onClick={() => this.setState({ show: false })}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </h5>
              <p className="card-text">This entire panel is mounted before the in animation starts and unmounted</p>
            </div>
          </div>
        </Transition>
      </div>

    </div>;
  }

}

export default SimpleTransition;
