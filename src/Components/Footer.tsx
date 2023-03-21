import * as React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css'

export function Footer () {
    return (
        <div className="Footer">
            <Link to="/LeaderBoard">
        <button>LeaderBoards</button>
        </Link>
        <Link to="/Dropdown">
        <button>Reset</button>
        </Link>
        <Link to="/Login">
        <button>New Player</button>
        </Link>
        <button>How To Play</button>
        </div>
    )
}