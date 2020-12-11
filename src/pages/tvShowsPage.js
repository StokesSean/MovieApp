import React, {useContext} from "react";
import PageTemplate from '../components/templateTvListPage';
import {TvContext} from '../contexts/tvContext';


const TvListPage = () => {
  const context = useContext(TvContext)

  return (
<PageTemplate 
title = 'Tv Shows'
tvshows = {context.tvshows}
/>

  );
};
export default TvListPage;