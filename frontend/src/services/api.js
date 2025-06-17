const API_KEY = "3bac7c260ac2dfde4f747388743a7b71";
const BASE_URL = "https://www.themoviedb.org";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`);
    const data = await response.json()
    return data.results
};