import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import FormStyle from "../style/ReviewForm.module.css";

function ReviewForm({ book_id }) {
    const { postReview } = useGlobalContext();
    const initialForm = {
        name: "",
        text: "",
        vote: ""
    };

    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const onHandelInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === "vote" ? parseInt(value) : value });
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        postReview({ ...formData }, book_id);
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        Object.keys(newErrors).length === 0 
        ? (setFormData(initialForm), console.log('Recensione inviata con successo!'))
        : console.log("L'invio del form non è riuscito a causa di errori di convalida!");
    };

    const validateForm = (formData) => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Il nome è richiesto';
        } else if (formData.name.length < 4) {
            errors.name = 'Il nome deve contenere almeno 4 caratteri';
        }
        if (!formData.text.trim()) {
            errors.text = 'Commento richiesto';
        }
        if (!formData.vote) {
            errors.vote = 'Voto richiesto';
        }
        return errors;
    };

    return (
        <>
            <form onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Scrivi il tuo nome..." value={formData.name} onChange={onHandelInput} />
                    {errors.name && (
                        <span className={`error-message ${FormStyle.errorMessage}`}>
                            {errors.name}
                        </span>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Scrivi il tuo commento...</label>
                    <textarea className="form-control" id="text" name="text" rows="3" value={formData.text} onChange={onHandelInput}></textarea>
                    {errors.text && (
                        <span className={`error-message ${FormStyle.errorMessage}`}>
                            {errors.text}
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Inserisci un numero</label>
                    <input type="number" className="form-control w-25" id="vote" name="vote" min="0" max="5" step="1" value={formData.vote} onChange={onHandelInput} />
                    <div className="form-text">Inserisci un valore compreso tra 0 e 5.</div>
                    {errors.vote && (
                        <span className={`error-message ${FormStyle.errorMessage}`}>
                            {errors.vote}
                        </span>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">Inserisci commento</button>
            </form>
        </>
    );
}

export default ReviewForm;