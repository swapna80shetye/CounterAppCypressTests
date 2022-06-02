export function increaseCounter(
  rowVal: number,
  countVal: number,
  cartItems: number
) {
  cy.get(`:nth-child(${rowVal}) > .row > :nth-child(1) > .badge`).should(
    "contain",
    "Zero"
  );

  let x = 1;
  for (; x < countVal; x++) {
    cy.get(
      `:nth-child(${rowVal}) > .row > :nth-child(2) > .btn-secondary > .fa`
    ).click();
    cy.get(`:nth-child(${rowVal}) > .row > :nth-child(1) > .badge`).should(
      "contain",
      x
    );

    cy.get(`:nth-child(${rowVal}) > .row > :nth-child(2) > .btn-info`).should(
      "be.enabled"
    );
  }
  cy.get(".navbar-brand > .badge").should("contain", cartItems);
}
