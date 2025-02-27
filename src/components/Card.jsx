import { Link } from "react-router-dom";
// Importo i CSS Modules delle Card
import style from "./Card.module.css";

function Card({ data }) {
    const imgPath = "http://localhost:3000/img/" + data.image;
    // Destrutturo data così da usare direttamente le variabili destrutturate. Es: title invece di data.title
    const { title, author, abstract, id } = data;
    return (
        <>
            <div className="card h-100 position-relative bg-secondary-subtle card-hover" id={style.idcards}>
                <div>
                    <img className="card-img-top" src={imgPath} alt={title} />
                </div>
                <div className="card-body card-description h-100">
                    <h3 className="card-title fw-bolder">{title.length > 20 ? title.substring(0, 20) + "..." : title}</h3>
                    <h5 className="card-title fw-bold"><span className=" fw-light fst-italic">By &nbsp; </span>{author}</h5>
                    <p className="card-text truncate-text">{abstract}</p>
                    <Link to={`/books/${id}`} className="btn text-decoration-none" style={{ backgroundColor: "#c6a664" }}>Dettagli</Link>
                </div>
            </div>
        </>
    );
}

export default Card;