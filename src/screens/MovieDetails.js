import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import "../Banner.css";
import axios from "../axios";
import "./MovieDetails.css";
import Carousel from '../Carousel/Carousel'

const API_KEY = "9414cd5bdeaee15e8cf8908c46f2ab06";

const MovieDetails = (props) => {
  const movieId = props.match.params.id;
  const [movie, setMovie] = useState({});
  const[video, setVideo] = useState()

  useEffect(() => {
    async function fetchData() {
      const requestResponse = await axios.get(
        `/movie/${movieId}?api_key=${API_KEY}`
      );
      const { data } = requestResponse;
      setMovie(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchVideo() {
      const requestResponse = await axios.get(
        `/movie/${movieId}/videos?api_key=${API_KEY}`
      );
      const { data } = requestResponse;

      console.log(data.results[0]?.key, "trailer-video")
      setVideo(data.results[0]?.key);
    }
    fetchVideo();
  }, []);

  console.log(movie, "requestDataMovie");

  return (
    <>
       <Nav/>
      {movie.hasOwnProperty("backdrop_path") && (
        <div className="movieDetails">
          <header
            className="banner"
            style={{
              backgroundSize: "contain",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="banner_contents">

              <h1 className="movie_banner_title">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              {movie?.tagline !== "" && (
                <div className="movie_details_tagline">
                  <img src="/quote-left.svg" />
                  <span>{movie?.tagline}</span>
                  <img src="/quote-right.svg" />
                </div>
              )}
              <h1 className="movie_banner_description">{movie?.overview}</h1>
              <div className="movie_banner_genre">
                {movie?.genres.map((genre) => {
                  return <button key={genre.id}>{genre.name}</button>;
                })}
              </div>
              <div className="movie_banner_items">
                <div className="each-item">
                  <h4>Release Date</h4>
                  <span>{`${movie?.release_date}`}</span>
                </div>
                <div className="each-item">
                  <h4>Average Vote</h4>
                  <span>{`${movie?.vote_average}/10`}</span>
                </div>
                <div className="each-item">
                  <h4>Popularity</h4>
                  <span>{`${Math.floor(movie?.popularity)}`}</span>
                </div>
                <div className="each-item">
                  <h4> Runtime</h4>
                  <span>{`${Math.floor(movie?.runtime)} min`}</span>
                </div>
              </div>
                <div className="movieDetails-button">
                    <button><a href={`https://www.youtube.com/watch?v=${video}`} target="_blank" >Watch the trailer</a></button>
                </div>
            </div>
            <div className="banner--fadeBottom" />
          </header>
         
          <div className="movieDetails_cast">
            <h4>Top Cast</h4>
            <Carousel id={movieId} />
        </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;

//         <div className="movieDetails_body">
//     <h1>{movieId}</h1>
//   </div>
