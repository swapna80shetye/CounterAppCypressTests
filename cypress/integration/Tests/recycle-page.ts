export function recyclePage() {
  cy.get(".btn-primary > .fa").should("be.enabled");
  cy.get(".btn-primary > .fa").click();
}
