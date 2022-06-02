export function decreaseCount(
  rowVal: number,
  countVal: number,
  cartItems: number
) {
  let y = countVal;
  for (; y > 0; y--) {
    cy.get(`:nth-child(${rowVal}) > .row > :nth-child(2) >.btn-info`).click();
  }
  cy.get(`:nth-child(${rowVal}) > .row > :nth-child(1) > .badge`).should(
    "contain",
    "Zero"
  );
  cy.get(".navbar-brand > .badge").should("contain", cartItems);
}
