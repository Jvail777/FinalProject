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
        <button className='footer-button'>LeaderBoards</button>
        </Link>
        {/* <Link to="/Dropdown">
        <button className='footer-button'>Reset</button>
        </Link> */}
        <Link to="/">
        <button className='footer-button'>New Player</button>
        </Link>
        <button className='footer-button' onClick={toggle}>How To Play</button>
        <Modal isOpen = {modal} toggle = {toggle} backdrop = {true} backdropClassName = "Modal" centered = {true}>
        <ModalHeader toggle = {toggle} close={closeBtn} >How To Play</ModalHeader>
        <ModalBody contentClassName = "modalBody">Select the category you would like to play. Select a difficulty. Complete all 10 questions to see how many you can get right! Play again to beat your score and move up on the leaderboard! </ModalBody>
        </Modal>
        </div>
    )
}