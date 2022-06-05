import { deleteRow } from "./delete-row";
import { startApplication } from "./start-application";

export function recyclePage() {
  cy.get(".btn-primary").should("be.disabled");
  deleteRow();
  cy.get(".btn-success").should("be.disabled");
  cy.get(".btn-primary").should("be.enabled");
  cy.get(".btn-primary").click();
  startApplication();
}
