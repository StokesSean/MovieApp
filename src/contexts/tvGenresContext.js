import React, { useState, useEffect, createContext } from "react";
import { getTvGenres } from "../api/tmdb-api";


export const TvGenresContext = createContext(null)

const TVGenresContextProvider = props => {
    const [genres, setTvGenres] = useState([{ id: "0", name: "All" }]);
    useEffect(() => {
        getTvGenres().then(allGenres => {
        setTvGenres([genres[0], ...allGenres]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TvGenresContext.Provider
          value={{
            genres
          }}
        >
          {props.children}
        </TvGenresContext.Provider>    
    )
}

export default TVGenresContextProvider;