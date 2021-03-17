import { Link } from 'react-router-dom';
import React from 'react';

function Layout({children}) {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </React.Fragment>

    )
}

export default Layout;
