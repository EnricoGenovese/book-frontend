import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Star from "./Star";
// Importo il GlobalContext per poter accedere alla variabile di stato  isLoading
import { useGlobalContext } from "../contexts/GlobalContext.jsx";
// Importo il componente Loader:
import Loader from "./Loader";
import style from "./BookDetails.module.css";
import ReviewForm from "./ReviewForm";


export default function BookDetails({ dataBooks }) {
    const { id } = useParams();     //Destrutturo useParames e ricavo l'id
    const { isLoading } = useGlobalContext();   // Destrutturo per ricavarmi la variabile di stato isLoading
    const imgPath = "http://localhost:3000/img/";
    
    console.log("dataBooks: ", dataBooks);
    return (
        <>
            {dataBooks ?
                <>
                    <div className="col-12 col-md-6 col-lg-4" key={id}>
                        <div className="d-flex mb-5">
                            <img className="card-img-top me-5 w-50" src={imgPath + dataBooks.image} alt={dataBooks.title} />

                            <div className="d-flex flex-column justify-content-between">
                                <div className="card-detail-review">
                                    <h5 className="fs-1">{dataBooks.title}</h5>
                                    <h5 className="text-secondary">By {dataBooks.author}</h5>
                                    <p className="text-secondary">{dataBooks.abstract}</p>
                                </div>
                                {/* <Link to="/books/" className="btn btn-primary w-25 small-text">
                                    Torna alla lista dei film
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="d-flex justify-content-between">
                            <h3>Recensioni:</h3>
                            <h3>
                                Media voto: <Star num={dataBooks.vote_average} />
                            </h3>
                        </div>

                        {dataBooks.reviews.map((review) => (
                            <div key={review.id}>
                                <div className={"card d-flex flex-column mb-3"}>
                                    <div className="card-body">
                                        <p className="card-text">{review.text}</p>
                                        <h5 className="card-title">
                                            Vote: <Star num={review.vote} />
                                        </h5>
                                        <p className={`card-text ${style["text-name"]}`}>By {review.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    <section>
                        <ReviewForm book_id={id} />
                    </section>
                </>

                : isLoading && <Loader />
            }
        </>
    );
}

