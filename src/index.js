import TvContextProvider from './contexts/tvContext'
import TvListPage from './pages/tvShowsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import MoviesContextProvider from "./contexts/moviesContext";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import TvShowPage from './pages/tvShowDetailsPage'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import SiteHeader from './components/siteHeader'
import UpComingMoviesPage from './pages/upcomingMoviesPage' 
import GenresContextProvider from "./contexts/genresContext"
import TvGenresContextProvider from "./contexts/tvGenresContext"
import AddMovieReviewPage from './pages/addMovieReviewPage'
const App = () => {
  return (
      <BrowserRouter>
        <div className="jumbotron">
          <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
          <GenresContextProvider>    {/* NEW */}
          <TvContextProvider>       {/* PROJECT NEW */}
          <TvGenresContextProvider> {/* PROJECT NEW */}
          <SiteHeader />      {/* New Header  */}
        <Switch>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />
        <Route path="/tvshows" component={TvListPage} />{/* PROJECT NEW */}
        <Route path="/reviews/:id" component={MovieReviewPage} />
        <Route exact path="/movies/upcoming" component={UpComingMoviesPage} />
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/tvshow/:id2" component={TvShowPage} />{/* PROJECT NEW */}
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </TvGenresContextProvider>{/* PROJECT NEW */}
        </TvContextProvider>        {/* PROJECT NEW */}
        </GenresContextProvider>    {/* NEW */}
        </MoviesContextProvider>     {/* NEW */}
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));