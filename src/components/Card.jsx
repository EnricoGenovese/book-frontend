import { Link } from "react-router-dom";
// Importo i CSS Modules delle Card
import style from "./Card.module.css";

function Card({ data }) {
    const imgPath = "http://localhost:3000/img/" + data.image;
    // Destrutturo data così da usare direttamente le variabili destrutturate. Es: title invece di data.title
    const { title, author, abstract, id } = data;
    return (
        <>
            <div className="card" id={style.idcards}>
                <img className="card-img-top" src={imgPath} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">{author}</h5>
                    <p className="card-text">{abstract}</p>
                    <Link to={`/books/${id}`} className="btn btn-primary">Dettagli</Link>
                </div>
            </div>
        </>
    );
}

export default Card;