/* eslint-disable no-undef */
let movies;
const movieId = 497582; // Enola Holmes movie id
let reviews;

describe("Navigation", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h2").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      // This tests all the the links on the site header
      //Tv Show Test
      cy.contains('a', 'TV Shows').last().click({ force: true });
      cy.url().should("include", `/tvshows`);
      cy.get("h2").contains("Tv Shows");
      //Up Comeing Movies
      cy.contains('a', 'Up Coming').last().click({ force: true });
      cy.url().should("include", `/movies/upcoming`);
      cy.get("h2").contains("Up Comeing Movies");
      //Favourites Test
      cy.contains('a', 'Favorites').last().click({ force: true });
      cy.url().should("include", `/movies/favorites`);
      cy.get("h2").contains("Favorite Movies");
      //Home Movies Test
      cy.get("nav").find("li").eq(0).find("a").last().click({ force: true });
      cy.get("nav.navbar-brand").find("a").last().click({ force: true });
      cy.url().should("not.include", `/favorites`);
      cy.get("h2").contains("No. Movies");
    });
  });

  describe("From the Movie Details page ", () => {
    beforeEach(() => {
      cy.visit(`/`);
      cy.get(".card").eq(2).find("img").click();

     // cy.visit(`/movies/${movieId}`);
    });
    it("should change browser URL when show/hide reviews is clicked", () => {
      cy.contains("Show Reviews").click();
      cy.url().should("include", `/movies/${movies[2].id}/reviews`);
      cy.contains("Hide Reviews").click();
      cy.url().should("not.include", `/movies/${movies[2].id}/reviews`);
    });
       // it("navigate to the full review page when a 'Full Review' link is clicked", () => {
    //   cy.contains("Show Reviews").click();
    //   cy.get("table").find("tbody").find("td").eq(2).find("a").click();
    //   cy.url().should("include", `/reviews/${reviews[0].id}`);
    //   cy.get("h2").contains("Enola Holmes");
    //   cy.get("svg[data-icon=arrow-circle-left]").click();
    //   cy.url().should("include", `/movies/${movieId}/reviews`);
    // });
  });


  describe("From the Favorites page", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get(".card").eq(0).find("button").click();
      cy.contains('a', 'Favorites').last().click({ force: true });
    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h2").contains(movies[0].title);
    });
  });
  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.get("svg[data-icon=arrow-circle-left]").click();
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("No. Movies");
    });
    it("should navigate from favorites page to movie details and back", () => {
        cy.get(".card").eq(0).find("button").click();
        cy.contains('a', 'Favorites').last().click({ force: true });
        cy.url().should("include",`/movies/favorites` )
        cy.get(".card").eq(0).find("img").click();
        cy.url().should("include", `/movies/${movies[0].id}`);
        cy.get("h2").contains(movies[0].title);
        cy.get("svg[data-icon=arrow-circle-left]").click();
        cy.url().should("include",`/movies/favorites` )

    });
  }); 
});