import React from "react";
import { TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";


const MyComboList = props => {
    const { in: show, remove, card } = props;
    console.log('Props', props);
    let src = "/imagines/BasicLock.gif"
    if(props.index == 1)
        src = "/imagines/AirLock.gif"
    return <Transition
        timeout={1000}
        mountOnEnter
        unmountOnExit
        appear
        in={show}
        addEndListener={(node, done) => {
            TweenMax.to(node, 1.35, {
                y: 0,
                autoAlpha: show ? 1 : 0,
                onComplete: done,
                delay: !show ? 0 : card.init ? props.index * 0.15 : 0
            });
        }}
    >
        <div class="card myComboList justify-content-center">
            <div>
                <button
                    type="button" className="close "
                    onClick={remove.bind(null, card.id)}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <img class="card-img-top" src={src} alt="Card image cap" />

            <div class="card-body">
                <p class="card-text- text-center">{card.name}</p>
            </div>

            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary">Edit</button>
            </div>
        </div>
    </Transition>;
};

export default MyComboList;
