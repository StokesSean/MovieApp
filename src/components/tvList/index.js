import React from "react";
import TvShowCard from "../tvCard/";
import "./tvList.css";

const TvList = ({tvshows, action}) =>{
    const tvShowCard = tvshows.map(t => (
        <TvShowCard key={t.id} tvshow={t} action={action} />
      ));
      return <div className="row movies bg-info">{tvShowCard}</div>;
    };


export default TvList;
