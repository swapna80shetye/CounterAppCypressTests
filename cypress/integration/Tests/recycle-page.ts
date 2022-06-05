import { deleteRow } from "./delete-row";

export function recyclePage() {
  cy.get(".btn-primary").should("be.disabled");
  deleteRow();
  cy.get(".btn-success").should("be.disabled");
  cy.get(".btn-primary").should("be.enabled");
  cy.get(".btn-primary").should("be.enabled").click();
  cy.get(".btn-success").should("be.enabled");
  cy.get(".btn-primary").should("be.disabled");
  cy.get(" .btn-danger ").should("have.length", "4");
}
