import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <h1 id="homepage-text">Errore 404</h1>
            <p className="pt-sm-5" id="homepage-p">Pagina non trovata, torna alla <i><Link to="/">Homepage!</Link></i></p>
        </>
    );
}

export default NotFoundPage;