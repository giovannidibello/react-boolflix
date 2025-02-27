// MoviesCard.jsx

// import { Link } from "react-router-dom";

export default function MovieCard(props) {

    // destructuring dell'oggetto props
    const { movie } = props;

    // gestione lingua con bandierine    
    const defaultFlag = "/flags/00.png";


    return (
        <>
            {

                <div className='movieCard' key={movie.id}>
                    <h1>Titolo: {movie.title}</h1>
                    <h2>Titolo originale: {movie.original_title}</h2>
                    <img src={`/flags/${movie.original_language}.png`} alt="{movie.original_language}" onError={(e) => e.target.src = defaultFlag} />
                    <h2>Voto: {movie.vote_average}</h2>
                </div >

            }
        </>
    );
}