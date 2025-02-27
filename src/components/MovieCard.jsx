// MoviesCard.jsx

// importo fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function MovieCard({ movie, tvSerie }) {

    // gestione lingua con bandierine    
    const defaultFlag = "/flags/00.png";

    // funzione per mostrare le stelle in base al voto
    const renderStars = (vote) => {
        const numOfStars = Math.ceil(vote / 2);
        let stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < numOfStars) {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "#FFD43B" }}
                    />
                );
            } else {
                stars.push(
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        style={{ color: "#ccc" }}
                    />
                );
            }
        }

        return stars;
    };


    return (
        <>
            {movie && (
                <div className='movieCard' key={movie.id}>
                    <img className='posterImg' src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <div className="movieTextCard">
                        <h2>Titolo: {movie.title}</h2>
                        <h3>Titolo originale: {movie.original_title}</h3>
                        <img
                            src={`/flags/${movie.original_language}.png`}
                            alt={movie.original_language}
                            onError={(e) => e.target.src = defaultFlag}
                        />
                        <h3 className="stars">
                            Voto: {renderStars(movie.vote_average)}
                        </h3>
                        <h4>Overview: {movie.overview}</h4>
                    </div>
                </div>
            )}

            {tvSerie && (
                <div className='movieCard' key={tvSerie.id}>
                    <img className='posterImg' src={`https://image.tmdb.org/t/p/w342${tvSerie.poster_path}`} alt={tvSerie.title} />
                    <div className="movieTextCard">
                        <h2>Titolo: {tvSerie.name}</h2>
                        <h3>Titolo originale: {tvSerie.original_name}</h3>
                        <img
                            src={`/flags/${tvSerie.original_language}.png`}
                            alt={tvSerie.original_language}
                            onError={(e) => e.target.src = defaultFlag}
                        />
                        <h3 className="stars">
                            Voto: {renderStars(tvSerie.vote_average)}
                        </h3>
                        <h4>Overview: {tvSerie.overview}</h4>
                    </div>
                </div>
            )}
        </>
    );
}