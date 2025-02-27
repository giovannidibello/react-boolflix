// App.jsx

// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo il contesto creato (Global)
import GlobalContext from './contexts/GlobalContext';

// gestione dati moviedb per listato
import { useState, useEffect } from 'react';
import axios from "axios";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import Homepage from './pages/Homepage'
// import './App.css'

function App() {

  //  settaggio dello stato del componente
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);

  // salvataggio key dell'api  
  const api_key = "662c34639a2badff1ad7cf4b1b7299b6";

  // funzione di gestione chiamata all'API
  function fetchData(query) {
    axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: api_key,
        query: query
      }
    })
      .then((res) =>
        setMovies(res.data.results)
      )


      .catch((err) => console.error("Errore:", err));

    // seconda chiamata all'API per ricerca serie tv
    axios.get("https://api.themoviedb.org/3/search/tv", {
      params: {
        api_key: api_key,
        query: query
      }
    })
      .then((res) =>
        setTvSeries(res.data.results)
      )


      .catch((err) => console.error("Errore:", err));

  }


  useEffect(
    () => fetchData(),
    [])

  return (
    <>
      <GlobalContext.Provider value={{ movies, tvSeries, fetchData }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<Homepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
