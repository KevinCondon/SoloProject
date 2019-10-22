/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import './TutStyle.css';

const ModalExample = (props) => {
    const {
        buttonLabel,
        className
    } = props;
    const [modal, setModal] = useState(false);
    const [backdrop, setBackdrop] = useState(true);

    const toggle = () => setModal(!modal);

    const changeBackdrop = e => {
        let value = e.target.value;
        if (value !== 'static') {
            value = JSON.parse(value);
        }
        setBackdrop(value);
    }

    return (
        <div>
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <FormGroup>
                    <Label for="backdrop">Backdrop value</Label>
                    <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
                        <option value="true">true</option>
                        <option value="false">false</option>
                        <option value="static">"static"</option>
                    </Input>
                </FormGroup>
               
                <Button color="danger" onClick={toggle}>yoyo</Button>
            </Form>



            <Modal isOpen={modal} toggle={toggle} className={className} backdrop={backdrop} >

                <ModalHeader className='ModalHeader' toggle={toggle}>Modal title</ModalHeader>
                {/* <div class='Modal'> */}
                <ModalBody className='ModalBody'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Do Something</Button>
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                {/* </div> */}

            </Modal>
        </div>
    );
}

export default ModalExample;

// import React, { Component } from "react";
// import { TimelineMax, TweenMax } from "gsap/all";
// import { Transition, TransitionGroup } from "react-transition-group";
// import './TutStyle.css';

// class Tut_Intro extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             keyCombo1: '',
//             keyCombo2: '',
//             keyCombo3: '',
//             cards: [],
//             init: false
//         };
//         this.logoContainer = null;
//         // logo tween
//         this.logoTween = null;
//     }

//     componentDidMount() {


//     }

//     render() {

//         return (

//                 <div ref={img => this.logoContainer = img}
//                     className=" justify-content-center">
//                 <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

//                         <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
//                             <div class="modal-dialog modal-lg">
//                                 <div class="modal-content">
//                                     ...
//                                 </div>
//                             </div>
//                         </div>

//                 </div>

//         )
//     }

// }

// export default Tut_Intro;
