import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

export function Header () {
  return (
    <div className="Header">
      <section>
      <h1 className="Title">React Fast Trivia!</h1>
      <p>Test Your knowledge with React Fast Trivia!</p>
      </section>
      <footer>
        <Link to="/LeaderBoard">
        <button>LeaderBoards</button>
        </Link>
        <button>Reset</button>
        <button>New Player</button>
        <button>How To Play</button>
        <p></p>
        </footer>
    </div>
  );
}