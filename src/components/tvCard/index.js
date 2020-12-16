import React from "react";
import { Link } from "react-router-dom";
import "./tvCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TvShowCard = ({tvshow, action}) => {

  return (
    <div className="col-sm-2">
      <div className="card  bg-dark">
        <Link to = {`/tvshow/${tvshow.id}`}>
        <img
          className="card-img-tag center "
          alt={tvshow.title}
          src={
            tvshow.poster_path
              ? `https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{tvshow.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {tvshow.vote_average}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TvShowCard;