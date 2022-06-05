export function startApplication() {
  cy.visit("http://localhost:3000/");
  cy.get(".navbar-brand > .badge").contains("0");
  cy.get(".navbar-brand > .badge").should("not.be.hidden");
  cy.get(".btn-secondary > .fa").should("have.length", 4);
  cy.get(".btn-info").should("have.length", 4);
}
