import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const Request = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        Request.data.results[
          Math.floor(Math.random() * Request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          'url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path")',
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.orginal_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">MyList</button>
        </div>
        <h1 className="banner_description">
          {movie?.overview}
          {truncate(movie?.overview, 150)}
        </h1>
        <div className="banner--fadebottom"></div>
      </div>
    </header>
  );
}

export default Banner;
