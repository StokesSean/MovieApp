import React, {useState, useEffect} from "react";
import { getTvShows } from "../api/tmdb-api";

export const TvContext = React.createContext(null)

const TvContextProvider = props => {
    const [tvshows, setTvShows] = useState([]);


useEffect(() => {
    getTvShows().then(tvshows => {
        setTvShows(tvshows);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
return (
    <TvContext.Provider
    value={{
        tvshows: tvshows
    }}
    >
        {props.children}
    </TvContext.Provider>
);
};
export default TvContextProvider