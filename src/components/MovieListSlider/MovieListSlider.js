import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Loading from "../Loading/Loading";
import "./MovieListSlider.css"
import Slider from "react-slick";


const MovieListSlider = (props) => {
  const { movies = [], movieCategoryTitle, loading } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "24px",
  };


  if (loading) {
    return <div>
      <Loading />
    </div>
  }

  return (
    <div>
      <h1 className="section-title" s>{movieCategoryTitle}</h1>
      <div className="movie-list">
        <Slider {...settings} >
          {
            movies.map((movie) => {
              return <MovieCard data={movie} key={movie.id} />;
            })
          }
        </Slider>
      </div>
    </div>
  );
};

export default MovieListSlider;
