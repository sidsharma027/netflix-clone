import React from "react";
import "./App.css";
import Row from "./Row";
import Request from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />

      <Row
        title="Netflix Originals"
        fetchUrl={Request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={Request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Request.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={Request.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={Request.fetchComedyMovies} />
      <Row title="Horror Movie" fetchUrl={Request.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={Request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Request.fetchDocumentaries} />
    </div>
  );
}

export default App;
