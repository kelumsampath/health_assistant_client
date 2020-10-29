import React from "react";
import "./styles/Navbar.css";
import NavLogo from "../assets/images/logo.png";

function Nav() {
    return (
        <header className='Nav'>
            <img src={NavLogo} className='Nav-logo' alt='logo' />

            <nav>
                <ul className='Nav-link'>
                    <li>Services</li>
                    <li>Project</li>
                    <li>About</li>
                </ul>
            </nav>

            <button>Contact</button>
        </header>
    );
}

export default Nav;