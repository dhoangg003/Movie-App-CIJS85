import "./Homepage.css";
import MovieListSlider from "../../components/MovieListSlider/MovieListSlider";
import useFetchMovieByType from "../../hooks/useFetchMoviesByType";
import SectionHero from "../../components/SectionHero.css/SectionHero";

const Homepage = () => {
  const { loading: popularLoading, data: popularMovies } =
    useFetchMovieByType("popular");
  const { loading: upcomingLoading, data: upcomingMovies } =
    useFetchMovieByType("upcoming");
  const { loading: topRatedLoading, data: topRatedMovies } =
    useFetchMovieByType("top_rated");

  return (
    <div className="container">
      <SectionHero />
      <MovieListSlider
        movies={popularMovies}
        movieCategoryTitle="Popular movies"
        loading={popularLoading}
      />
      <MovieListSlider
        movies={topRatedMovies}
        movieCategoryTitle="Top rated movies"
        loading={topRatedLoading}
      />
      <MovieListSlider
        movies={upcomingMovies}
        movieCategoryTitle="Upcoming movies"
        loading={upcomingLoading}
      />
    </div>
  );
};

export default Homepage;
