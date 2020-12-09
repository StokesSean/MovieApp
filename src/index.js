import MovieReviewPage from "./pages/movieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import SiteHeader from './components/siteHeader'
import UpComingMoviesPage from './pages/upcomingMoviesPage' 
import GenresContextProvider from "./contexts/genresContext"
import AddMovieReviewPage from './pages/addMovieReviewPage'
const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
          <SiteHeader />      {/* New Header  */}
        <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpComingMoviesPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>    {/* NEW */}
        </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));