import React from "react";
import { Link } from 'react-router-dom';

import "./styles/Navbar.css";
import NavLogo from "../assets/images/logo.png";

function Nav() {
    return (
        <header className='Nav'>
            <img src={NavLogo} className='Nav-logo' alt='logo' />

            <nav>
                <ul className='Nav-link'>
                    <li>
                        <Link to="services">Services</Link>
                    </li>
                    <li>
                        <Link to="projects">Project</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>/
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

            <button>Contact</button>
            <nav>
                <ul className='Nav-link'>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;