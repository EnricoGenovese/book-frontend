import { useGlobalContext } from "../contexts/GlobalContext";
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";
export default function Books() {
    const { books, isLoading } = useGlobalContext();
    return (
        <section className="container py-4">
            {isLoading && <Loader />}
            <div className="row g-3">
                {books.map((book) => (
                    <div className="col-12 col-md-6 col-lg-4" key={book.id}>
                        <Card data={book} />
                    </div>
                ))}
            </div>
        </section>
    );
}