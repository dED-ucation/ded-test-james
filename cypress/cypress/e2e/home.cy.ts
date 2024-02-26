describe('home', () => {
  it('Home page loads without errors; total investment is greater than 1bn.', () => {
    cy.visit("/");
    cy.get(`h2`).contains("The Demilitarise Education Model");
    cy.get(`p.ded-total-investment`).should("contain", "£").then(($p) => {
      var digits = $p[0].innerText;
      var valueString = digits.replace(/[^\d.]/g, "");
      var valueFloat = Number.parseFloat(valueString);
      cy.wrap(valueFloat).should('be.gt', 1000000000); // 1bn
    })
  })
})
