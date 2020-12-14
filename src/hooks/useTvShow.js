import { useEffect, useState } from "react";
import {getTvShow} from '../api/tmdb-api'

const useTvShow = id => {
  const [tvshow, setTvshow] = useState(null);
  
  useEffect(() => {
    getTvShow(id).then(tvshow => {
        setTvshow(tvshow);
    });
  }, [id]);
  return [tvshow, setTvshow];
};

export default useTvShow
