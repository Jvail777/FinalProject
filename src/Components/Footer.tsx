import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

export function Footer() {
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
        <button className="footer-button">Leaderboard</button>
      </Link>
      <Link to="/">
        <button className="footer-button">New Game</button>
      </Link>
      <button className="footer-button" onClick={toggle}>
        How To Play
      </button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        backdrop={true}
        backdropClassName="Modal"
        centered={true}
      >
        <ModalHeader toggle={toggle} close={closeBtn}>
          How To Play
        </ModalHeader>
        <ModalBody contentClassName="modalBody">
          Select the category you would like to play. Select a difficulty.
          Complete all 10 questions to see how many you can get right! Play
          again to beat your score and move up on the leaderboard!
          <br></br>
          Easy Questions = 1 point
          <br></br>
          Medium Questions = 2 points
          <br></br>
          Hard Questions = 3 points
          {" "}
        
        </ModalBody>
      </Modal>
    </div>
  );
}
