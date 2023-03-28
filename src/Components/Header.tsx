import '../css/Header.css';
import { Authentication } from './New Components/Authentication';

export function Header () {
  return (
    <div className="Header">
      <section>
      <h1 className="Title">React Fast Trivia!</h1>
      <p>Test Your knowledge with React Fast Trivia!</p>
      {<Authentication/>}
      </section>
    </div>
  );
}