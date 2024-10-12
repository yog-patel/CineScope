import MovieListing from "../MovieListing/MovieListing.jsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/movieSlice.jsx";

function Home() {
    const movieText = "Harry";
    const showText = "Friends";
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    }, [dispatch]);
    return (
        <div>

           <div className="banner-img"></div>
            <MovieListing/>
        </div>
    );
}

export default Home;