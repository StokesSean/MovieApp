import { GenresContext } from '../../contexts/genresContext' 
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./siteHeader.css";


const SiteHeader  = props => {

    const context = useContext(GenresContext);
  
    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value);
    };
    const handleTextChange = e => {
      handleChange(e, "name", e.target.value);
    };
    const handleGenreChange = e => {
      handleChange(e, "genre", e.target.value);
    };
    
  return (
    <nav className="navbar fixed-top  bg-dark navbar-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/tvshows">
              TV Shows
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Up Coming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Watch List
            </Link>
          </li>
          <li className="nav-item" id = "test">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">

      <span className="Select-Text"></span>
      <select id="genre" className="Select-Genre" onChange={handleGenreChange}>
         {context.genres.map(genre => {
         return (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
              );
                 })}
              </select>
          </li>
          <li className="nav-item">

          <span className="Search-Text"></span>
          <input
            className="Search-Movie"
            type="text"
            placeholder="Search Our Movie Database...."
            onChange={handleTextChange}
          />
          </li>
          <li className="nav" >
            <Link className="nav-link text-white" to="/movies/favorites">
              Login/signup
            </Link>
          </li>
          <li className="nav-item"></li>
        </ul>
      </nav>
    </nav>
  );
};


export default SiteHeader;