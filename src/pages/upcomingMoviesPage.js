import React, { useContext } from "react";
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext'
import PageTemplate from '../components/templateMovieListPage'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const UpComingMoviesPage = () => {
  const context = useContext(UpcomingMoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });

 

  return (
    <PageTemplate
      title="Up Comeing Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default UpComingMoviesPage;