// MoviesList.jsx

// importiamo il contesto globale e la parte React di utilizzo dello stesso
import { useContext } from "react";
import GlobalContext from '../contexts/GlobalContext'

// importo componente card listato
import MovieCard from "./MovieCard";

export default function MoviesList() {

    // destrutturiamo l'esecuzione del useContext (oggetto di ritorno)
    const { movies = [] } = useContext(GlobalContext);

    return (
        <>
            {
                movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            }
        </>
    );
}