// Creazione della GlobalContext che conterrà tutte le chiamate API al server
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import NotFoundPage from "../pages/NotFoundPage";
//Api url e endpoint per axios
const apiUrl = import.meta.env.VITE_APIURL;
const endpoint = "/books/"

const GlobalContext = createContext();  //crea il Context e gli do il nome GlobalContext

// Creo il provider customizzato:
const GlobalProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [singleBook, setSingleBook] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [numPages, setNumPages] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(getBooks, [page]);

    function handlePageChange(page) {
        console.log(page);
        setPage(page);
    }

    /* Configuro lo useEffect per chiamare l'API per i film popolari solo al caricamento della pagina: */
    useEffect(() => {
        getBooks();
    }, []);

    function getBooks() {
        setIsLoading(true);     // Attivo il Loader fino all'arrivo dei dati tramite chiamata axios
        axios.get(apiUrl + "/books", { params: { page } })
            .then((res) => {
                console.log(res.data.limit);

                setNumPages(Math.ceil(res.data.count / res.data.limit));
                setBooks(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Finito: ", books);
                setIsLoading(false);
            });
    }

    function getSingleBook(id) {
        setIsLoading(true);     // Attivo il Loader fino all'arrivo dei dati tramite chiamata axios
        axios.get(apiUrl + "/books/" + id)
            .then((res) => {
                console.log("Scheda libro intero: ", res.data);
                setSingleBook(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Finito libri");
                console.log("singleMovie: ", singleBook);
                setIsLoading(false);    // Disattivo il Loader dopo l'arrivo dei dati (sia che siano arrivati, sia in caso di errore)
            });
    }

    function postReview(formData, book_id) {
        setIsLoading(true);     // Attivo il Loader fino all'arrivo dei dati tramite chiamata axios
        axios.post(`${apiUrl}${endpoint}${book_id}/reviews`, formData)
            .then((res) => {
                console.log(`Chiamata axios: ${res}`);
                getSingleBook(book_id);
            }).catch((error) => {
                console.log(error);

            }).finally(() => {
                console.log("Done");
                setIsLoading(false);    // Disattivo il Loader dopo l'arrivo dei dati (sia che siano arrivati, sia in caso di errore)
            })
    }

    // Oggetto contenente i dati da passare al value per offrirli ai Consumer (i componenti racchiusi nel Provider di GLobalContext):
    const collectionData = {
        books,
        setBooks,
        singleBook,
        getSingleBook,
        postReview,
        isLoading,
        setIsLoading,
        page,
        numPages,
        handlePageChange
    }

    return (
        <GlobalContext.Provider value={collectionData}>
            {children}
        </GlobalContext.Provider>
    );
}
// Creo una hook personalizzata per accedere al Context:
function useGlobalContext() {
    const context = useContext(GlobalContext);

    // Se per sbaglio non dovessi inserire correttamente il Provider nel file App.jsx, allora genero un errore per facilitare il debug:
    if (!context) {
        throw new Error("useGlobalContext is not inside the context provider GlobalProvider");
    }
    return context;
}

export { GlobalProvider, useGlobalContext };