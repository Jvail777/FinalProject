import * as React from 'react';
import { Link } from 'react-router-dom';

export function Header () {
  return (
    <div className="Header">
      <section>
      <h1>React Fast Trivia!</h1>
      <p>Test Your knowledge with React Fast Trivia!</p>
      </section>
      <footer>
        <Link to="/LeaderBoard">
        <button>LeaderBoards</button>
        </Link>
        <button>Reset</button>
        <button>New Player</button>
        <p></p>
        </footer>
    </div>
  );
}