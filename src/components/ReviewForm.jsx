import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

function ReviewForm({ book_id }) {

    const { postReview } = useGlobalContext();
    const initialForm = {
        name: "",
        text: "",
        vote: ""
    };

    const [formData, setFormData] = useState(initialForm);

    const onHandelInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === "vote" ? parseInt(value) : value });
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();

        //axios 
        console.log(formData);
        postReview({ ...formData }, book_id);
        setFormData(initialForm);
    };

    return (
        <>
            <form onSubmit={onHandleSubmit} >
                <div className="form-group mb-3">
                    <label htmlFor="name" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Scrivi il tuo nome..." value={formData.name} onChange={onHandelInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Scrivi il tuo commento...</label>
                    <textarea className="form-control" id="text" name="text" rows="3" value={formData.text} onChange={onHandelInput}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Inserisci un voto</label>
                    <input type="number" className="form-control w-25" id="vote" name="vote" min="0" max="5" step="1" value={formData.vote} onChange={onHandelInput} />
                    <div className="form-text">Inserisci un valore compreso tra 0 e 5.</div>
                </div>
                <button type="submit" className="btn " style={{ backgroundColor: "#c6a664" }}>Invia commento</button>
            </form>
        </>
    );
}

export default ReviewForm;