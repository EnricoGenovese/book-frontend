// Importo il GlobalContext per poter accedere alla variabile di stato movies contenente tutti i movies richiamati dalla API e porterli far consumare al componente Details
import { useGlobalContext } from "../contexts/GlobalContext.jsx";
import BookDetails from "../components/BookDetails.jsx";

// Hook usato per accedere a rotte dinamiche (consente di estrarre i parametri dalla URL, in questo caso mi serve il parametro dell'id):
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function Details() {

    const { singleBook, getSingleBook } = useGlobalContext();
    const { id } = useParams();     //Destrutturo useParames e ricavo l'id
    console.log("id: ", id);



    useEffect(() => {
        getSingleBook(id);
    }, [id]);

    return (
        <section className="container py-4">
                <BookDetails dataBooks={singleBook} />
        </section>
    );
}