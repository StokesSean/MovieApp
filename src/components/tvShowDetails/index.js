import React from "react";
import "./tvShowDetails.css";
export default ({ tvshow }) => {
return (
    <>

  <h4>Overview</h4>
  <p>{tvshow.overview}</p>
  <ul className="list-group list-group-horizontal">
    <li key="ruh" className="list-group-item list-group-item-dark">
      Number of episodes
    </li>
    <li key="rut" className="list-group-item ">
      {tvshow.number_of_episodes}
    </li>
    <li key="rdh" className="list-group-item list-group-item-dark">
      Release Date
    </li>
    <li key="rdv" className="list-group-item ">
      {tvshow.first_air_date}
    </li>
  </ul>
  <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {tvshow.genres.map(g => (
          <li key={g.name} className="list-group-item">
            {g.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
          Spoken Languages
        </li>
        {tvshow.spoken_languages.map(lang => (
          <li key={lang.name} className="list-group-item">
            {lang.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Companies
        </li>
        {tvshow.production_companies.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="pch" className="list-group-item list-group-item-dark">
          Production Countries
        </li>
        {tvshow.production_countries.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
      </ul>
  </>
);
};