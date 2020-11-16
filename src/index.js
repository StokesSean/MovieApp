import MovieReviewPage from "./pages/movieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import SiteHeader from './components/siteHeader'
import UpComingMoviesPage from './pages/upcomingMoviesPage' 
import GenresContextProvider from "./contexts/genresContext";
const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <SiteHeader />      {/* New Header  */}
          <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
        <Switch>
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