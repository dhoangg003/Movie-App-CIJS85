import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import APIServices from "../../services/APIServices";
import Loading from "../../components/Loading/Loading";
import "./MovieDetail.css"
import { FaStar } from "react-icons/fa";
const MovieDetail = () => {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const fetchMovieDetail = async () => {
    setLoading(true);
    try {
      const data = await APIServices.getMovieDetailById(params.movieId);
      setMovieDetail(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  //   Call API fetching file detail by id
  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const { title,overview,vote_average, poster_path, backdrop_path } = movieDetail;
  const imageURL = `https://image.tmdb.org/t/p/original${poster_path}`;
  const cardStyle = {backgroundImage: `url(${imageURL})`,};

  if (loading) {
    return <Loading />;
  }

  return (
    // <div>
    //   <h1>{title}</h1>
    // </div>
    <div class="blog-card " style={cardStyle}>
    <div class="title-content">
      <h3><a href="#">{title}</a></h3>
      
    </div>
    <div class="card-info">{overview} <a href="#">play video<span class="licon icon-arr icon-black"></span></a>
    </div>
    <div class="utility-info">
      <ul class="utility-list">
        <li>{vote_average}<FaStar/></li>    
      </ul>
    </div>
    <div class="gradient-overlay"></div>
    <div class="color-overlay"></div>
  </div>
  
  
  );
};

export default MovieDetail;


