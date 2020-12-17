# Assignment 1 - ReactJS app.

Name: Sean Stokes

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 = Tv Shows
 + Feature 2 = Tv Show Details
 + Feature 3 = Tv Show Reviews


## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+  `https://api.themoviedb.org/3/genre/tv/list?api_key="+process.env.REACT_APP_TMDB_KEY+"&language=en-US` -          Gets genre List for the tv shows
+  `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1` -       Gets a list of popular tv shows
+  `https://api.themoviedb.org/3/tv/${id2}?api_key=${process.env.REACT_APP_TMDB_KEY}` - 			     Gets the tv show details based of the id selected
+  `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1` - Gets Tv Show Reviews
## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design

-Changed Header. 
-Changed Cards and tv-list.
-Moved search bar and genre list to the header.

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.
+<TvGenresContextProvider> 
+<TvContextProvider>       
+/tvshow/:id2
+/tvshows




# Assignment 1 - Agile Software Practice.

Name: Sean Stokes


## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/projects/xwy6h4/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D






---------------------------------

