import React, { useState } from "react";
import TvList from "../tvList";
import Header from "../headerMovieList";
const TvListPageTemplate = ({tvshows, title}) => {
let displayedtvshows = tvshows
    return (
        <>
       <Header title={title} numMovies={displayedtvshows.length} />
       <TvList
       tvshows={displayedtvshows}
       ></TvList>
       </>
    );
};
export default TvListPageTemplate;