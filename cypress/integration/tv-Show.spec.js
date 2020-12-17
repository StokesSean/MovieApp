/* eslint-disable no-undef */
let tvshows;

const filterByTitle = (tvList, string) =>
tvList.filter((t) => t.name.toLowerCase().search(string) !== -1);

const filterByGenre = (tvList, genreId) =>
tvList.filter((t) => t.genre_ids.includes(genreId));

describe("Tv-Shows page", () => {
    before(() => {
    cy.request(`https://api.themoviedb.org/3/tv/popular?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&page=1`

    )
    .its("body")
    .then((response) =>{
        tvshows = response.results
       })
    })
    beforeEach(() => {
<<<<<<< HEAD
        cy.visit("/tvshows")
=======
        cy.visit("/tvshows");
        cy.contains('a', 'TV Shows').last().click({ force: true });
        cy.url().should("include", `/tvshows`);
>>>>>>> develop
    });
    describe("Base test", () => {
      it("displays page header",()=>{
          cy.get("h2").contains("Tv Shows");
          cy.get(".badge").contains(20);
        });
    })
  describe("Filtering", () => {
    describe("By movie title" ,() => {
      it("should display movies with 'p ' in the title", () => {
        const searchString = 'p'
        const   MatchingTvShows = filterByTitle(tvshows, searchString );
        cy.get("nav").get("li").get("input").last().type(searchString);
        cy.get(".card").should("have.length",   MatchingTvShows.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
          .find(".card-title")
          .should("have.text",  MatchingTvShows[index].name);
        });
      })
      it("should display movies with 'o' in the title", () => {
        const searchString = "o";
        const   MatchingTvShows = filterByTitle(tvshows, searchString);
        cy.get("nav").get("li").get("input").last().type(searchString);
        cy.get(".card").should("have.length",   MatchingTvShows.length);
        cy.get(".card").each(($card, index) => {
          cy.wrap($card)
          .find(".card-title")
          .should("have.text",  MatchingTvShows[index].name);
        })
      })
      it("should display no movies with no matches in the title", () => {
        const searchString = "xyz";
        const   MatchingTvShows = filterByTitle(tvshows, searchString);
        cy.get("nav").get("li").get("input").last().type(searchString);
        cy.get(".badge").contains(0);
      })
    })

    describe("By movie genre", () => {
        it("should display movies with the specified genre only", () => {
          const selectedGenreId = 35;
          const selectedGenreText = "Comedy";
          const MatchingTvShows = filterByGenre(tvshows, selectedGenreId);
          cy.get("select").last().select(selectedGenreText); 
          cy.get(".card").should("have.length", MatchingTvShows.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
              .find(".card-title")
              .should("have.text",  MatchingTvShows[index].name);
          });      
        });
    });
    describe("By genre and text", () => {
        it("should display movies with the specified genre and o in the title only", () => {
          const searchString = "o";
          const selectedGenreId = 35;
          const selectedGenreText = "Comedy";
          const MatchingTvShows = filterByGenre(tvshows, selectedGenreId)
          const MatchingTvShowswithtitle = filterByTitle (MatchingTvShows, searchString)
          cy.get("nav").get("li").get("input").last().type(searchString);
          cy.get("select").last().select(selectedGenreText);  
          cy.get(".card").should("have.length", MatchingTvShowswithtitle.length);
          cy.get(".card").each(($card, index) => {
            cy.wrap($card)
              .find(".card-title")
              .should("have.text",  MatchingTvShowswithtitle[index].name);
          });      
        });
    });
});
});