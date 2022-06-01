export function decreaseCount() {
  cy.get(":nth-child(2) > .row > :nth-child(2) > .btn-info").click();
  cy.get(":nth-child(2) > .row > :nth-child(1) > .badge").should(
    "not.contain",
    "1"
  );
}
