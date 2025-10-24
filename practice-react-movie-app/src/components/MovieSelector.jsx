import { useState } from 'react'

const MovieSelector = () => {

    const [ selectedGenre, setSelectedGenre ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState("");
    const [ movies, setMovies ] = useState([]);

    const movieDatabase = {
        Action: ["Mad Max: Fury Road", "Die Hard", "John Wick"],
        Comedy: ["Superbad", "Step Brothers", "The Hangover"],
        Drama: ["The Shawshank Redemption", "Forrest Gump", "The Godfather"]
    };

    const fetchMovies = () => {
        if (!selectedGenre) {
                setError("Please select a Genre"); // show error if no genre is selected
                return;
            }

        setError(""); // clear error message
        setIsLoading(true); // show loading message when loading

        setTimeout(() => {   // simulate API call with setTimeout (waits 1 second)
                setMovies(movieDatabase[selectedGenre]); // Set movies for the selected genre
                setIsLoading(false); // hide loading message
            }, 1000);

    }

    return (
        <div className="movie-selector-container">
            <h1>Movie Selector</h1>
            <label>
                Select a Genre:
                <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                    <option value="">Select a Genre</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                </select>
            </label>
            <button className="fetch-button" onClick={fetchMovies}>Fetch Movies</button>
            {isLoading && <p>Loading Movies...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {movies.length > 0 && (
                <div>
                    <h2>Movies in {selectedGenre} Genre:</h2>
                    <ul>
                        {movies.map((movie, index) => (
                            <li key={index}>{movie}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
    

}

export default MovieSelector;