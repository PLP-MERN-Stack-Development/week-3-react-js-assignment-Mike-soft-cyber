import MovieCard from "../components/MovieCard";
import {useState, useEffect} from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err)
                setError("Failed to get movie...")
            } finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
        setSearchQuery("") 
    }


    return(
        <div className="bg-gray-900 min-h-screen p-4 text-white">

            <form onSubmit={handleSearch} className="flex justify-center items-center mb-20 ">
                <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded ml-4 ">Search</button>
            </form>

            <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 mt-4 mx-auto">
                {movies.map((movie) =>
                (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    )
}

export default Home