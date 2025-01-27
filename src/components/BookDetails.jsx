// Hook usato per accedere a rotte dinamiche (consente di estrarre i parametri dalla URL, in questo caso mi serve il parametro dell'id):
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import axios from "axios";
import Star from "./Star";
import Loader from "./Loader";
// Importo il CSS Modules di BooksDetails
import style from "./BookDetails.module.css"

export default function BookDetails({ dataBooks }) {
    const { id } = useParams();     //Destrutturo useParames e ricavo l'id
    console.log("dataBooks: ", dataBooks);

    const imgPath = "http://localhost:3000/img/";

    return (
        <>
            {dataBooks ?
                <>
                    <div className="col-12 col-md-6 col-lg-4" key={id}>
                        <div className="card" id={style.idcards}>
                            <img className="card-img-top" src={imgPath + dataBooks.image} alt={dataBooks.title} />
                            <div className="card-body">
                                <h5 className="card-title">{dataBooks.title}</h5>
                                <h5 className="card-title">{dataBooks.author}</h5>
                                <p className="card-text">{dataBooks.abstract}</p>
                                <Link to='/books/' className="btn btn-primary">Torna alla lista dei film</Link>
                            </div>
                        </div>
                    </div>
                    <section className="py-4">
                        <div className="py-4 d-flex justify-content-between "><h3 >Recensioni:</h3><h3 >Media voto: {<Star num={dataBooks.vote_average} />}</h3></div>


                        {dataBooks.reviews.map((review) => (
                            <div key={review.id}>
                                <div className={"card d-flex flex-column mb-3"}>
                                    <div className="card-body">
                                        <p className="card-text">{review.text}</p>
                                        <h5 className="card-title">Vote: {<Star num={review.vote} />}</h5>
                                        <p className={`card-text ${style["text-name"]}`}>By {review.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </>
                : <Loader />
            }
        </>
    );
}