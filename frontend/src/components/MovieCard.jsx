function MovieCard({movie}){


    function favouriteClick(){
        alert("Clicked");
    }

    return (
        <div className="movie-card relative bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 py-50 gap-10 px-10 text-center">
            <div className="movie-poster">
                <img src= {movie.url} alt={movie.title} className="absolute top-0 left-0" />
                <div className="absolute top-0 right-0">
                    <button onClick={favouriteClick}>❤️</button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 text-left ml-2">
                <h3>{movie.title}</h3>
                <p>{movie.released}</p>
            </div>
        </div>
    )
}

export default MovieCard;