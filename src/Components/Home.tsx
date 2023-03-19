import * as React from 'react';
import '../css/Home.css'

export function Home () {
  return (
    <div className="HomeHeader">
    <section>
    <h1 className="Title">React Fast Trivia!</h1>
    <p>Test Your knowledge with React Fast Trivia!</p>
    </section>
    <form>
      <label>
        Insert Name to Begin!
        <input type="text" name="name" />
      </label>
        <input type="submit" value="Submit" />
    </form>
    </div>
  );
}
