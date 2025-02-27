// MoviesCard.jsx

// import { Link } from "react-router-dom";

export default function MovieCard({ movie, tvSerie }) {

    // // destructuring dell'oggetto props
    // const { movie, tvSerie } = props;

    // gestione lingua con bandierine    
    const defaultFlag = "/flags/00.png";


    return (
        <>
            {movie && (
                <div className='movieCard' key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <h1>Titolo: {movie.title}</h1>
                    <h2>Titolo originale: {movie.original_title}</h2>
                    <img
                        src={`/flags/${movie.original_language}.png`}
                        alt={movie.original_language}
                        onError={(e) => e.target.src = defaultFlag}
                    />
                    <h2>Voto: {movie.vote_average}</h2>
                </div>
            )}

            {tvSerie && (
                <div className='movieCard' key={tvSerie.id}>
                    <img src={`https://image.tmdb.org/t/p/w342${tvSerie.poster_path}`} alt={tvSerie.title} />
                    <h1>Titolo: {tvSerie.name}</h1>
                    <h2>Titolo originale: {tvSerie.original_name}</h2>
                    <img
                        src={`/flags/${tvSerie.original_language}.png`}
                        alt={tvSerie.original_language}
                        onError={(e) => e.target.src = defaultFlag}
                    />
                    <h2>Voto: {tvSerie.vote_average}</h2>
                </div>
            )}
        </>
    );
}