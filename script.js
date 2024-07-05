//your code here
() => {
  // Check left and right arrows have carousel-control class
  cy.get(".left").should("have.class", "carousel-control");
  cy.get(".right").should("have.class", "carousel-control");

  // Check for the glyphicon classes
  cy.get(".glyphicon-chevron-right").should("exist");
  cy.get(".glyphicon-chevron-left").should("exist");
  cy.get(".glyphicon").should("exist");
}
