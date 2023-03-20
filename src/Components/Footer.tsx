import * as React from 'react';
import { Link } from 'react-router-dom';

export function Footer () {
    return (
        <div className="Footer">
            <Link to="/LeaderBoard">
        <button>LeaderBoards</button>
        </Link>
        <button>Reset</button>
        <button>New Player</button>
        <button>How To Play</button>
        </div>
    )
}