import React, { useContext } from "react";
import {MoviesContext} from '../contexts/moviesContext'
import PageTemplate from '../components/templateMovieListPage'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const UpComingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });

 

  return (
    <PageTemplate
      title="Up Comeing Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpComingMoviesPage;