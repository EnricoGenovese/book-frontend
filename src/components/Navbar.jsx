import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Stato per gestire il toggle del menu

    const handleToggle = () => {
        setIsOpen(!isOpen); // Cambia lo stato al clic sull'icona hamburger
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    HomePage
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse ${isOpen ? "show hamburgo-right" : ""}`} // Aggiungi la classe "show" quando il menu è aperto
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/books"
                                className="nav-link"
                                style={({ isActive }) => (isActive ? { color: "red" } : {})}
                                end
                            >
                                Lista dei posts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className="nav-link"
                                style={({ isActive }) => (isActive ? { color: "red" } : {})}
                                end
                            >
                                Chi siamo
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contacts"
                                className="nav-link"
                                style={({ isActive }) => (isActive ? { color: "red" } : {})}
                                end
                            >
                                Contatti
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
