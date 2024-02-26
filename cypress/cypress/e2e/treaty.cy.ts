describe('treaty', () => {
  it(`Can navigate to treaty page.`, () => {
    cy.viewport(1600, 1200);

    cy.visit("/");

    cy.get(`a[href="/how-we-do-it"]`).contains("how we do it").click();
    
    cy.location().should(loc => {
        expect(loc.pathname).to.equal("/how-we-do-it");
    });

    cy.get(`h2`).contains("treaty").click();
    
    cy.location().should(loc => {
        expect(loc.pathname).to.equal("/how-we-do-it/treaty");
    });

    cy.get(`h2`).contains("The Demilitarise Education Treaty");

  });
});
