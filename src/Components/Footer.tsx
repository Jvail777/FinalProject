import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


import {Button, Modal, ModalBody, ModalHeader} from "reactstrap";

import '../css/Footer.css'


export function Footer () {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const closeBtn = (
        <button className="close" onClick={toggle} type="button">
          &times;
        </button>
      );

    return (
        <div className="Footer">
            <Link to="/LeaderBoard">
        <button>LeaderBoards</button>
        </Link>
        <Link to="/Dropdown">
        <button>Reset</button>
        </Link>
        <Link to="/Login">
        <button>New Player</button>
        </Link>
        <button onClick={toggle}>How To Play</button>
        <Modal isOpen = {modal} toggle = {toggle} backdrop = {true} backdropClassName = "Modal" centered = {true}>
        <ModalHeader toggle = {toggle} close={closeBtn} >How To Play</ModalHeader>
        <ModalBody contentClassName = "modalBody">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</ModalBody>
        </Modal>
        </div>
    )
}