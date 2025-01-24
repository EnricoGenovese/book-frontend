function Card({ data }) {
    const imgPath = "http://localhost:3000/img/books" + data.image;
    return (
        <>
            <div className=" container">
                <div className=" row row-col-3">
                    {data.map((ele) => {
                        <div className="card col">
                            <img className="card-img-top" src={imgPath} alt={ele.title} />
                            <div className="card-body">
                                <h5 className="card-title">{ele.title}</h5>
                                <h5 className="card-title">{ele.author}</h5>
                                <p className="card-text">{ele.abstract}</p>
                                <a href="#" className="btn btn-primary">più info</a>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}

export default Card;