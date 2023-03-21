import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css'

export function Login () {
  return (
    <div className="Login">
    <form>
      <label>
        Insert Name to Begin!
        <input type="text" name="name" />
      </label>
        <input type="submit" value="Submit" />
    </form>
    <Link to="/LeaderBoard">
        <button>LeaderBoards</button>
        </Link>
        <Link to="/Home">
        <button>Reset</button>
        </Link>
        <Link to="/Login">
        <button>New Player</button>
        </Link>
    </div>
  );
}
