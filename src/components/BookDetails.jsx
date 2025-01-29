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
                    <div className="bg-book-detail">
                        <div id="book-detail" className="" key={id}>
                            <div className=" mb-5 d-flex flex-column flex-md-row gap-3 gap-lg-5">
                                <img className="card-img-top card-img-details mb-3 align-self-center " src={imgPath + dataBooks.image} alt={dataBooks.title} />

                                <div className=" d-flex flex-column text-center text-md-start">
                                    <h5 className="fs-1">{dataBooks.title}</h5>
                                    <h5 className="text-secondary">By {dataBooks.author}</h5>
                                    <p className="text-secondary">{dataBooks.abstract}</p>
                                </div>
                                {/* <Link to="/books/" className="btn btn-primary w-25 small-text">
                                    Torna alla lista dei film
                                </Link> */}

                            </div>
                        </div>
                        <section>
                            <div className="d-flex justify-content-between">
                                <h3 className="d-none d-md-block">Recensioni:</h3>
                                <h3 className="w-100 text-center text-md-end">
                                    Media voto: <Star num={dataBooks.vote_average} />
                                </h3>
                            </div>
                            {dataBooks.reviews.map((review, index) => (
                                <div key={review.id}>
                                    <div className={`card d-flex flex-column mb-3 ${index% 2 === 0 && "bg-secondary-subtle"}`}>
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
                    </div>
                </>
                : isLoading && <Loader />
            }
        </>
    );
}