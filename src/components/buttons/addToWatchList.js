import React, { useContext } from "react";
import {UpcomingMoviesContext} from '../../contexts/upcomingMoviesContext.js'

const AddToWatchListButton = ({ movie }) => {
  const context = useContext(UpcomingMoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Watch List
    </button>
  );
};

export default AddToWatchListButton;