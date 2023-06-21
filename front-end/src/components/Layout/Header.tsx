// Header.js
import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    Logo
                </a>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#link">
                            Link
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
