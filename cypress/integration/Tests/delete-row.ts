export function deleteRow() {
  let rowDelete = 2;
  for (; rowDelete <= 5; rowDelete++) {
    cy.get(":nth-child(2) > .row > :nth-child(2) > .btn-danger").click();
  }
  cy.get(".navbar-brand > .badge").should("contain", "0");
}
