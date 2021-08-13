import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <ul className="nav-rm">
                <Link to="/character">
                    <li>Characters</li>
                </Link>
                <Link to="/episode">
                    <li>Episodes</li>
                </Link>
                <Link to="/location">
                    <li>Location</li>
                </Link>
            </ul>
        </div>
    )
}
