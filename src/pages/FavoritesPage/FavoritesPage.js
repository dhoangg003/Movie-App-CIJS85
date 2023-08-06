import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import Slider from "react-slick";
import "./FavoritesPage.css"
const FavoritesPage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const settings = {
    dots: false,
   
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "24px",
  };

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem('favorites');
    const favorites = favoritesFromStorage ? JSON.parse(favoritesFromStorage) : [];
    setFavoriteMovies(favorites);
  }, []);

  return (
    <div className="favorites-list">
      <h1>Favorite Movies</h1>
      <Slider {...settings}>
      {favoriteMovies.map((movie) => (
        
        <MovieCard data={movie} key={movie.id} />
       
      ))}
      </Slider>
    </div>
  );
};

export default FavoritesPage;