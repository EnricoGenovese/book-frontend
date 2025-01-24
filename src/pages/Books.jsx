import { useGlobalContext } from "../contexts/GlobalContext"
import Card from "../components/Card.jsx"

export default function Books() {
    const { books } = useGlobalContext()
    return (
        <section className="container py-4 mx-4">
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    {books.map((book) => {
                        <Card data={book} key={book.id} />
                    })}
                </div>
            </div>
        </section>
    )
}