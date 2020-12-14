import React, {useState, useEffect } from "react";
import { Link, Route, withRouter } from "react-router-dom"
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvShowPage";
import TvShowReviews from "../components/tvShowReviews"


const TvShowPage = props => {
    const { id2 } = props.match.params;
    const [tvshow, setTvshow] = useState(null);
    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/tv/${id2}?api_key=${process.env.REACT_APP_TMDB_KEY}`
      ).then(res => res.json())    
      .then(tvshow => {
        setTvshow(tvshow);
      })
    }, [id2])

    return (
        <>
     {tvshow ? (
       <>
          <PageTemplate tvshow={tvshow}>
            <TvShowDetails tvshow={tvshow} />
          </PageTemplate>
          <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tvshow/${id2}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tvshow/${id2}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/tvshow/:id/reviews`}
          render={props => <TvShowReviews tvshow={tvshow} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
    )};
  

   export default withRouter(TvShowPage);
