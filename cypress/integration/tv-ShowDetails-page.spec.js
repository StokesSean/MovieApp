/* eslint-disable no-undef */
let tvshowId = null
let tvshow;
let reviews;
describe("tvshow Details Page", () => {
  before(() => {
    cy.request(`https://api.themoviedb.org/3/tv/popular?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitrarytvshowIdignored) => {
        tvshowId = arbitrarytvshowIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/tv/${tvshowId}?api_key=${Cypress.env("TMDB_KEY")}`
          )
          .its("body");
      })
      .then((tvshowDetails) => {
        tvshow = tvshowDetails;
        return tvshowDetails.id;
      })
  });
  beforeEach(() => {
    cy.visit(`/`);
    cy.contains('a', 'TV Shows').last().click({ force: true });
    cy.url().should("include", `/tvshows`);
    cy.get(".card").eq(2).find("img").click();
  });

  it("should display tvshow title in the page header", () => {
    cy.get("h2").contains(tvshow.name);
  });
  it("should display the tvshow's details", () => {
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(tvshow.overview);
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(2).contains("Release Date");
        cy.get("li").eq(3).contains(tvshow.first_air_date);
      });
  });
  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", tvshow.homepage);
  });
  it("should display the correct image with the title of the tvshow", () => {
     cy.get("img").should("have.attr","src")
  });
});