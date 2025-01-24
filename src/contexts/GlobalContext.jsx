// Creazione della GlobalContext che conterrà tutte le chiamate API al server
import { createContext } from "react";
import axios from "axios";
import { use } from "react";

const GlobalContext = createContext();  //crea il Context e gli do il nome GlobalContext

// Creo il provider customizzato:
const GlobalProvider = ({ children }) => {
}

// Oggetto contenente i dati da passare al value per offrirli ai Consumer (i componenti racchiusi nel Provider di GLobalContext):
const collectionData = {

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