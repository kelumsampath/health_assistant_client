import React from "react";
import "./Nav.css";
import NavLogo from "./images/HealthAssistantLogo.png";

function Nav() {
    return (
        <header className='Nav'>
            <img src={NavLogo} className='Nav-logo' alt='logo' />

            <nav>
                <ul className='Nav-link'>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Project</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
            </nav>

            <a href='#'><button>Contact</button></a>
        </header>
    );
}

export default Nav;