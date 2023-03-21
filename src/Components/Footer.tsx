import * as React from 'react';
import { Link } from 'react-router-dom';

export function Footer () {
    return (
        <div className="Footer">
            <Link to="/LeaderBoard">
        <button>LeaderBoards</button>
        </Link>
        <button>Reset</button>
        <Link to="/Login">
        <button>New Player</button>
        </Link>
        <button>How To Play</button>
        </div>
    )
}