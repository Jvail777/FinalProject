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
    </div>
  );
}
