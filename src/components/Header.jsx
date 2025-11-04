import './header.css'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="profile">
                <div className="profile-icon">MG</div>
                <p className="name">Martina Gonzales</p>
            </div>

            <button id="menuBtn" aria-label="Menu Button" type="button">
                <img src="/icons8-menu-50.png" alt="menu" />
            </button>

            <nav>
                <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}