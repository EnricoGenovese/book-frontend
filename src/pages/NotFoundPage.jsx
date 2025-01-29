import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <h1 id="homepage-text">Errore 404</h1>
            <p className="pt-sm-5" id="homepage-p">Pagina non trovata, torna alla <i><Link to="/">Homepage!</Link></i></p>

            <div><h1 id="homepage-text-mobile">Errore 404</h1>
                <p className="pt-sm-5" id="homepage-p-mobile">Pagina non trovata, torna alla <i><Link to="/">Homepage!</Link></i></p></div>
        </>
    );
}

export default NotFoundPage;