export function deleteRow() {
  cy.get(":nth-child(4) > .row > :nth-child(2) > .btn-danger > .fa").click();
  cy.get(" .btn-danger ").should("have.length", "3");
}
