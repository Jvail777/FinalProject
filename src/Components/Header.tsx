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
    </div>
  );
}