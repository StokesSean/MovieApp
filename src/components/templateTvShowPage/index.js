import React from "react";
import TvHeader from "../headerTv";
import "./tvShowPage.css"

const TemplateTvShowPage = ({tvshow,children}) => {
    return (
    <>
    <TvHeader tvshow ={tvshow} />
    <div className="row">
        <div className="col-3">
          <img
            src={
              tvshow.poster_path
                ? `https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`
                : "./film-poster-placeholder.png"
            }
            className="movie"
            alt={tvshow.name}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};
export default TemplateTvShowPage;