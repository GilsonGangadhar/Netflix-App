import React, { useState, useEffect } from "react";
import axios from "./axios";
import { useHistory } from 'react-router-dom'
import "./Row.css";

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  console.log(movies, "row.js");

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            onClick={() =>  history.push(`/details/${movie.id}`)}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            style={{cursor: "pointer"}}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
