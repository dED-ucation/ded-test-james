describe('university_search_home', () => {
  const searchText = "bri";
  const targetName = "University of the West of England, Bristol";
  const targetPath = "/data/university/2";
  const expectedLinkText = [
    "policies",
    "financial partnerships",
    "research partnerships",
    "academic partnerships",
    "FOI requests",
    "actions",
  ];
  
  it(`University search on home page yields expected results.`, () => {
    cy.viewport(1600, 1200);
    cy.visit("/");

    cy.get("input.ded-input-search-university").clear().type(searchText);

    cy.get("div.ded-university-search-result-container").as("container");

    cy.get("@container").find("> button").contains(targetName).click();

    cy.url().should('include', targetPath);

    cy.get("h2").contains(targetName);

    expectedLinkText.forEach((linkText) => {
      cy.get("a").contains(linkText);
    });

  });
});
