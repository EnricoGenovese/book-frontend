import { useGlobalContext } from "../contexts/GlobalContext"

export default function Pagination() {
    const { handlePageChange, page, numPages } = useGlobalContext();

    return (
        <nav className="col-12">
            <ul className="pagination">
                <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(page - 1)}
                    >
                        Previous
                    </button>
                </li>
                {new Array(numPages).fill("").map((num, index) => (
                    <li
                        className={`page-item ${page === index + 1 ? "active" : ""} `}
                        aria-current="page"
                        key={index + 1}
                    >
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${page >= numPages ? "disabled" : ""}`}>
                    <button
                        className="page-link"
                        onClick={() => handlePageChange(page + 1)}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}