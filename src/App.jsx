import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import MovieDetails from "./Components/MovieDetails/MovieDetails.jsx";
import PageNotFound from "./Components/PageNotFound/PageNotFound.jsx";
import Home from "./Components/Home/Home.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <div className="container">
                <Routes>
                    <Route exact path="/CineScope/" element={<Home/>} />
                    <Route path="/CineScope/movie/:imdbID" element={<MovieDetails/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
