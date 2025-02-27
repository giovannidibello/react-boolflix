
// import { Link } from "react-router-dom";

export default function MovieCard(props) {

    // destructuring dell'oggetto props
    const { movie } = props;


    return (
        <>
            {
                <div className='movieItem' key={movie.id}>
                    <h1>{movie.title}</h1>
                    <h2>{movie.original_title}</h2>
                    <h2>{movie.original_language}</h2>
                    <h2>{movie.vote_average}</h2>
                    {/* <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link> */}
                </div >
            }
        </>
    );
}