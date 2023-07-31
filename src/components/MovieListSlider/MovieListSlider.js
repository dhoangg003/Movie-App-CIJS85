import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Loading from "../Loading/Loading";

const MovieListSlider = (props) => {
  const { movies = [], movieCategoryTitle, loading } = props;
  const movieListElement = movies.slice(0, 8).map((movie) => {
    return <MovieCard data={movie} key={movie.id} />;
  });
  return (
    <div>
      <h1 className="section-title" style={{
        display: "flex",
        justifyContent: "center",
        background:  " black",
        color: "white",
        padding: "24px",
      }}>~~{movieCategoryTitle}~~ </h1>
      <div className="movie-list">
        {loading ? <Loading /> : movieListElement}
      </div>
    </div>
  );
};

export default MovieListSlider;
