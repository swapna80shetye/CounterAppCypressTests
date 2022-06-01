export function refreshPage() {
  cy.get(".btn-success > .fa").should("not.be.disabled");
  cy.get(".btn-success > .fa").click();
  cy.get(".navbar-brand > .badge").contains("0");
  cy.get(" .badge").contains("Zero");
}
