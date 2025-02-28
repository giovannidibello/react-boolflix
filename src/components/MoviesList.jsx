// MoviesList.jsx

// importiamo il contesto globale e la parte React di utilizzo dello stesso
import { useContext } from "react";
import GlobalContext from '../contexts/GlobalContext'

// importo componente card listato
import MovieCard from "./MovieCard";

export default function MoviesList() {

    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { movies, tvSeries } = useContext(GlobalContext);

    return (
        <>
            {movies.length > 0 && <h1 className="category">Film</h1>}
            <div className="movieContainerCard">

                {
                    movies.map((movie) => (

                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </div>

            {tvSeries.length > 0 && <h1 className="category">Serie TV</h1>}
            <div className="movieContainerCard">

                {
                    tvSeries.map((tvSerie) => (

                        <MovieCard key={tvSerie.id} tvSerie={tvSerie} />
                    ))
                }
            </div>
        </>
    );
}