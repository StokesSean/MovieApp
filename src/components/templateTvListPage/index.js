import React, { useState } from "react";
import TvList from "../tvList";
import Header from "../headerMovieList";
import TvSiteHeader from "../tvSiteHeader";
const TvListPageTemplate = ({tvshows, title , action}) => {
    const [nameFilter, setNameFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("0");
    const genre = Number(genreFilter)
    let displayedtvshows = tvshows
    .filter(t => {
      return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(t => {
      return  genre > 0
        ? t.genre_ids.includes(Number(genreFilter))
        : true;
    });

const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
};
    
    return (
        <>
       <Header title={title} numMovies={displayedtvshows.length} />
       <TvSiteHeader onUserInput={handleChange} numMovies={displayedtvshows.length}/>
       <TvList
       tvshows={displayedtvshows}
       ></TvList>
       </>
    );
};
export default TvListPageTemplate;