import * as React from 'react';
import '../css/Header.css';

export function Header () {
  return (
    <div className="Header">
      <section>
      <h1>React Fast Trivia!</h1>
      <p>Test Your knowledge with React Fast Trivia!</p>
      </section>
      <footer>
        <button>LeaderBoards</button>
        <button>Reset</button>
        <button>New Player</button>
        </footer>
    </div>
  );
}